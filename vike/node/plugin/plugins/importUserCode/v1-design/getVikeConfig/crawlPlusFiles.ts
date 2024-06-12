export { crawlPlusFiles }

import {
  assertPosixPath,
  assert,
  assertWarning,
  scriptFileExtensionList,
  scriptFileExtensions,
  humanizeTime,
  assertIsSingleModuleInstance,
  assertIsNotProductionRuntime,
  isVersionOrAbove
} from '../../../../utils.js'
import path from 'path'
import fs from 'fs/promises'
import glob from 'fast-glob'
import { exec } from 'child_process'
import { promisify } from 'util'
import pc from '@brillout/picocolors'
import { isTemporaryBuildFile } from './transpileAndExecuteFile.js'
const execA = promisify(exec)

assertIsNotProductionRuntime()
assertIsSingleModuleInstance('crawlPlusFiles.ts')
let gitIsNotUsable = false

async function crawlPlusFiles(
  userRootDir: string,
  outDirAbsoluteFilesystem: string,
  isDev: boolean,
  crawlWithGit: null | boolean
): Promise<{ filePathAbsoluteUserRootDir: string }[]> {
  assertPosixPath(userRootDir)
  assertPosixPath(outDirAbsoluteFilesystem)
  let outDirRelativeFromUserRootDir: string | null = path.posix.relative(userRootDir, outDirAbsoluteFilesystem)
  if (outDirRelativeFromUserRootDir.startsWith('../')) {
    // config.outDir is outside of config.root => it's going to be ignored anyways
    outDirRelativeFromUserRootDir = null
  }
  assert(
    outDirRelativeFromUserRootDir === null ||
      /* Not true if outDirRelativeFromUserRootDir starts with a hidden directory (i.e. a directory with a name that starts with `.`)
      !outDirRelativeFromUserRootDir.startsWith('.') &&
      */
      (!outDirRelativeFromUserRootDir.startsWith('./') &&
        //
        !outDirRelativeFromUserRootDir.startsWith('../'))
  )

  const timeBefore = new Date().getTime()

  // Crawl
  let files: string[] = []
  const res = crawlWithGit !== false && (await gitLsFiles(userRootDir, outDirRelativeFromUserRootDir))
  if (!res || res.files.length === 0) {
    // Fallback to fast-glob for users that dynamically generate plus files. (Assuming all (generetad) plus files to be skipped because users usually included them in `.gitignore`.)
    files = await fastGlob(userRootDir, outDirRelativeFromUserRootDir)
  } else if (res.symlinkDirs.length > 0) {
    // We cannot find files inside symlinks with `git ls-files` because it doesn't follow symlinks
    const filesInSymlinkDirs = (
      await Promise.all(
        res.symlinkDirs.map(async (symlinkDir) => {
          return (await fastGlob(path.posix.join(userRootDir, symlinkDir), outDirRelativeFromUserRootDir)).map(
            (fileInSymlinkDir) => path.posix.join(symlinkDir, fileInSymlinkDir)
          )
        })
      )
    ).flatMap((filesInSymlinkDir) => filesInSymlinkDir)
    files = res.files.concat(...filesInSymlinkDirs)
  } else {
    // Use result of `git ls-files` as is, becouse no symlinks found
    files = res.files
  }

  // Filter build files
  files = files.filter((file) => !isTemporaryBuildFile(file))

  // Check performance
  {
    const timeAfter = new Date().getTime()
    const timeSpent = timeAfter - timeBefore
    if (isDev) {
      // We only warn in dev, because while building it's expected to take a long time as crawling is competing for resources with other tasks.
      // Although, in dev, it's also competing for resources e.g. with Vite's `optimizeDeps`.
      assertWarning(
        timeSpent < 3 * 1000,
        `Crawling your ${pc.cyan('+')} files took an unexpected long time (${humanizeTime(
          timeSpent
        )}). If you repeatedly get this warning, then consider creating a new issue on Vike's GitHub.`,
        {
          onlyOnce: 'slow-page-files-search'
        }
      )
    }
  }

  // Normalize
  const plusFiles = files.map((filePath) => {
    // Both `$ git-ls files` and fast-glob return posix paths
    assertPosixPath(filePath)
    assert(!filePath.startsWith(userRootDir))
    const filePathAbsoluteUserRootDir = path.posix.join('/', filePath)
    return { filePathAbsoluteUserRootDir }
  })

  return plusFiles
}

// Same as fastGlob() but using `$ git ls-files`
async function gitLsFiles(
  userRootDir: string,
  outDirRelativeFromUserRootDir: string | null
): Promise<{
  files: string[]
  symlinkDirs: string[]
} | null> {
  if (gitIsNotUsable) return null

  // Preserve UTF-8 file paths.
  // https://github.com/vikejs/vike/issues/1658
  // https://stackoverflow.com/questions/22827239/how-to-make-git-properly-display-utf-8-encoded-pathnames-in-the-console-window/22828826#22828826
  // https://stackoverflow.com/questions/15884180/how-do-i-override-git-configuration-options-by-command-line-parameters/15884261#15884261
  const preserveUTF8 = '-c core.quotepath=off'

  const ignoreAsPatterns = getIgnoreAsPatterns(outDirRelativeFromUserRootDir)
  const ignoreAsFilterFn = getIgnoreAsFilterFn(outDirRelativeFromUserRootDir)

  const cmd = [
    'git',
    preserveUTF8,
    'ls-files',
    // we cannot use this pattern, becouse it cannot found symlink dirs
    // ...scriptFileExtensionList.map((ext) => `"**/+*.${ext}"`),
    ...ignoreAsPatterns.map((pattern) => `--exclude="${pattern}"`),
    // --others lists untracked files only (but using .gitignore because --exclude-standard)
    // --cached adds the tracked files to the output
    // --stage is needed to get the mode of the files to find symlinks
    '--others --cached --exclude-standard --stage'
  ].join(' ')

  let stagedRawResults: string[]
  let filesDeleted: string[]
  try {
    ;[stagedRawResults, filesDeleted] = await Promise.all([
      // Main command
      runCmd1(cmd, userRootDir),
      // Get tracked by deleted files
      runCmd1('git ls-files --deleted', userRootDir)
    ])
  } catch (err) {
    if (await isGitNotUsable(userRootDir)) {
      gitIsNotUsable = true
      return null
    }
    throw err
  }

  const symlinkDirs: string[] = []
  const files: string[] = []
  for (const stagedRawResult of stagedRawResults) {
    // stagedRawResult content examples:
    // 100644 f6928073402b241b468b199893ff6f4aed0b7195 0 pages/index/+Page.tsx
    // 120000 3b8f0bcdf3f3e92af0ed0e9f87ceb3b8aac21e84 0 pages/shared-pages-link
    const mode = stagedRawResult.slice(0, 6)
    const file = stagedRawResult.match(/.+\s+.+\s+.+\s+([^$]+)/)?.[1]
    if (!file) {
      continue
    }
    if (filesDeleted.includes(file)) {
      continue
    }
    if (!ignoreAsFilterFn(file)) {
      continue
    }
    // 120000 is the mode for symlinks
    if (mode === '120000') {
      const isDirectory = (await fs.stat(path.join(userRootDir, file))).isDirectory()
      if (isDirectory) {
        symlinkDirs.push(file)
        continue
      }
    }
    const basename = path.basename(file)
    if (!basename.startsWith('+')) {
      continue
    }
    const extname = path.extname(file).slice(1)
    if (!scriptFileExtensions.includes(extname)) {
      continue
    }
    files.push(file)
  }

  return { files, symlinkDirs }
}
// Same as gitLsFiles() but using fast-glob
async function fastGlob(userRootDir: string, outDirRelativeFromUserRootDir: string | null): Promise<string[]> {
  const files = await glob(`**/+*.${scriptFileExtensions}`, {
    ignore: getIgnoreAsPatterns(outDirRelativeFromUserRootDir),
    cwd: userRootDir,
    dot: false
  })
  return files
}

// Same as getIgnoreFilter() but as glob pattern
function getIgnoreAsPatterns(outDirRelativeFromUserRootDir: string | null): string[] {
  const ignoreAsPatterns = [
    '**/node_modules/**',
    // Allow:
    // ```
    // +Page.js
    // +Page.telefunc.js
    // ```
    '**/*.telefunc.*'
  ]
  if (outDirRelativeFromUserRootDir) {
    assert(!outDirRelativeFromUserRootDir.startsWith('/'))
    ignoreAsPatterns.push(`${outDirRelativeFromUserRootDir}/**`)
  }
  return ignoreAsPatterns
}
// Same as getIgnorePatterns() but for Array.filter()
function getIgnoreAsFilterFn(outDirRelativeFromUserRootDir: string | null): (file: string) => boolean {
  assert(outDirRelativeFromUserRootDir === null || !outDirRelativeFromUserRootDir.startsWith('/'))
  return (file: string) =>
    !file.includes('node_modules/') &&
    !file.includes('.telefunc.') &&
    (outDirRelativeFromUserRootDir === null || !file.startsWith(`${outDirRelativeFromUserRootDir}/`))
}

// Whether Git is installed and whether we can use it
async function isGitNotUsable(userRootDir: string) {
  // Check Git version
  {
    const res = await runCmd2('git --version', userRootDir)
    if ('err' in res) return true
    let { stdout, stderr } = res
    assert(stderr === '')
    const prefix = 'git version '
    assert(stdout.startsWith(prefix))
    const gitVersion = stdout.slice(prefix.length)
    //  - Works with Git 2.43.1 but also (most certainly) with earlier versions.
    //    - We didn't bother test which is the earliest verision that works.
    //  - Git 2.32.0 doesn't seem to work: https://github.com/vikejs/vike/discussions/1549
    //    - Maybe it's because of StackBlitz: looking at the release notes, Git 2.32.0 should be working.
    if (!isVersionOrAbove(gitVersion, '2.43.1')) return true
  }
  // Is userRootDir inside a Git repository?
  {
    const res = await runCmd2('git rev-parse --is-inside-work-tree', userRootDir)
    if ('err' in res) return true
    let { stdout, stderr } = res
    assert(stderr === '')
    assert(stdout === 'true')
    return false
  }
}

async function runCmd1(cmd: string, cwd: string): Promise<string[]> {
  const { stdout } = await execA(cmd, { cwd })
  /* Not always true: https://github.com/vikejs/vike/issues/1440#issuecomment-1892831303
  assert(res.stderr === '')
  */
  return stdout.toString().split('\n').filter(Boolean)
}
async function runCmd2(cmd: string, cwd: string): Promise<{ err: unknown } | { stdout: string; stderr: string }> {
  let res: Awaited<ReturnType<typeof execA>>
  try {
    res = await execA(cmd, { cwd })
  } catch (err) {
    return { err }
  }
  let { stdout, stderr } = res
  stdout = stdout.toString().trim()
  stderr = stderr.toString().trim()
  return { stdout, stderr }
}
