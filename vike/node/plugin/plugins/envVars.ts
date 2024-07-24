export { envVarsPlugin }

// For ./envVars.spec.ts
export { applyEnvVar }

import type { Plugin, ResolvedConfig } from 'vite'
import { loadEnv } from 'vite'
import { assert, assertPosixPath, assertUsage, assertWarning, escapeRegex, isArray, lowerFirst } from '../utils.js'
import { sourceMapPassthrough } from '../shared/rollupSourceMap.js'
import { getModuleFilePath } from '../shared/getFilePath.js'

// TODO/enventually: (after we implemented vike.config.js)
// - Make import.meta.env work inside +config.js
//   - For it to work, we'll probably need the user to define the settings (e.g. `envDir`) for loadEnv() inside vike.config.js instead of vite.config.js
//   - Or stop using Vite's `mode` implemention and have Vike implement its own `mode` feature? (So that the only dependencies are `$ vike build --mode staging` and `$ MODE=staging vike build`.)

const PUBLIC_ENV_PREFIX = 'PUBLIC_ENV__'
const PUBLIC_ENV_WHITELIST = [
  // https://github.com/vikejs/vike/issues/1724
  'STORYBOOK'
]

function isEnvNameInWhiteList(envName: string): boolean {
  // OS Windows reserved PUBLIC env variable
  
  if(process.platform === 'win32' && envName === 'PUBLIC') {
    return true;
  }
  return PUBLIC_ENV_WHITELIST.includes(envName);
}

function envVarsPlugin(): Plugin {
  let envsAll: Record<string, string>
  let config: ResolvedConfig
  return {
    name: 'vike:envVars',
    enforce: 'post',
    configResolved(config_) {
      config = config_
      config.command
      envsAll = loadEnv(config.mode, config.envDir || config.root, '')
      // Vite's built-in plugin vite:define needs to apply after this plugin.
      //  - This plugin vike:env needs to apply after vike:extractAssets and vike:extractExportNames which need to apply after @vitejs/plugin-vue
      ;(config.plugins as Plugin[]).sort(lowerFirst<Plugin>((plugin) => (plugin.name === 'vite:define' ? 1 : 0)))
    },
    transform(code, id, options) {
      assertPosixPath(id)
      if (id.includes('/node_modules/')) return
      if (!id.startsWith(config.root)) return
      if (!code.includes('import.meta.env.')) return

      const isBuild = config.command === 'build'
      const isClientSide = getIsClientSide(config, options)

      Object.entries(envsAll)
        .filter(([key]) => {
          // Already handled by Vite
          const envPrefix = !config.envPrefix ? [] : isArray(config.envPrefix) ? config.envPrefix : [config.envPrefix]
          return !envPrefix.some((prefix) => key.startsWith(prefix))
        })
        .forEach(([envName, envVal]) => {
          // Security check
          {
            const envStatement = getEnvStatement(envName)
            const isPrivate = !envName.startsWith(PUBLIC_ENV_PREFIX) && !isEnvNameInWhiteList(envName)
            if (isPrivate && isClientSide) {
              if (!code.includes(envStatement)) return
              const modulePath = getModuleFilePath(id, config)
              const errMsgAddendum: string = isBuild ? '' : ' (Vike will prevent your app from building for production)'
              const keyPublic = `${PUBLIC_ENV_PREFIX}${envName}` as const
              const errMsg =
                `${envStatement} is used in client-side file ${modulePath} which means that the environment variable ${envName} will be included in client-side bundles and, therefore, ${envName} will be publicly exposed which can be a security leak${errMsgAddendum}. Use ${envStatement} only in server-side files, or rename ${envName} to ${keyPublic}, see https://vike.dev/env` as const
              if (isBuild) {
                assertUsage(false, errMsg)
              } else {
                // - Only a warning for faster development DX (e.g. when user toggles `ssr: boolean` or `onBeforeRenderIsomorph: boolean`).
                // - But only showing a warning can be confusing: https://github.com/vikejs/vike/issues/1641
                assertWarning(false, errMsg, { onlyOnce: true })
              }
            }
            // Double check
            assert(!(isPrivate && isClientSide) || !isBuild)
          }

          // Apply
          code = applyEnvVar(envName, envVal, code)
        })

      // Line numbers didn't change.
      //  - We only break the column number of a couple of lines, wich is acceptable.
      //  - Anyways, I'm not even sure Vite supports high-resolution column number source mapping.
      const ret = sourceMapPassthrough(code)
      return ret
    }
  }
}
function applyEnvVar(envName: string, envVal: string, code: string) {
  const envStatement = getEnvStatement(envName)
  const regex = new RegExp(escapeRegex(envStatement) + '\\b', 'g')
  return code.replace(regex, JSON.stringify(envVal))
}
function getEnvStatement(envName: string) {
  return `import.meta.env.${envName}` as const
}

function getIsClientSide(config: ResolvedConfig, options?: { ssr?: boolean }): boolean {
  const isBuild = config.command === 'build'
  if (isBuild) {
    assert(typeof config.build.ssr === 'boolean')
    const isServerSide: boolean = config.build.ssr
    if (options !== undefined) {
      assert(options.ssr === isServerSide)
    }
    return !isServerSide
  } else {
    assert(config.build.ssr === false)
    assert(typeof options?.ssr === 'boolean')
    const isServerSide: boolean = options.ssr
    return !isServerSide
  }
}
