export { projectInfo }
export type { ProjectTag }
export { PROJECT_VERSION }

import { onProjectInfo } from './assertSingleInstance.js'

const PROJECT_VERSION = '0.4.150' as const

type PackageName = typeof projectInfo.npmPackageName
type ProjectVersion = typeof projectInfo.projectVersion
type ProjectTag = `[${PackageName}]` | `[${PackageName}@${ProjectVersion}]`

const projectInfo = {
  projectName: 'Vike' as const,
  projectVersion: PROJECT_VERSION,
  npmPackageName: 'vike' as const,
  githubRepository: 'https://github.com/vikejs/vike' as const
}

// Trick: since `utils/asserts.ts` depends on this file (`utils/projectInfo.ts`), we can have confidence that this file is always instantiated. So that we don't have to initialize this code snippet at every possible entry. (There are a *lot* of entries: `client/router/`, `client/`, `node/`, `node/plugin/`, `node/cli`, etc.)
onProjectInfo(projectInfo.projectVersion)
