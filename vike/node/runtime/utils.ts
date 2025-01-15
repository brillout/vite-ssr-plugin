// Utils needed by Vike's server runtime

import '../../utils/trackLogs.js'

// We call onLoad() here so that it's called even when only a subset of the runtime is loaded. (Making the assert() calls inside onLoad() a lot stronger.)
import { onLoad } from './onLoad.js'
onLoad()

export * from '../../utils/assert.js'
export * from '../../utils/cast.js'
export * from '../../utils/checkType.js'
export * from '../../utils/isCallable.js'
export * from '../../utils/isBrowser.js'
export * from '../../utils/isPlainObject.js'
export * from '../../utils/isPromise.js'
export * from '../../utils/hasProp.js'
export * from '../../utils/parseUrl.js'
export * from '../../utils/parseUrl-extras.js'
export * from '../../utils/slice.js'
export * from '../../utils/sorter.js'
export * from '../../utils/projectInfo.js'
export * from '../../utils/isArray.js'
export * from '../../utils/isObject.js'
export * from '../../utils/objectAssign.js'
export * from '../../utils/PromiseType.js'
export * from '../../utils/compareString.js'
export * from '../../utils/isObjectWithKeys.js'
export * from '../../utils/stringifyStringArray.js'
export * from '../../utils/unique.js'
export * from '../../utils/filesystemPathHandling.js'
export * from '../../utils/getOutDirs.js'
export * from '../../utils/capitalizeFirstLetter.js'
export * from '../../utils/debugGlob.js'
export * from '../../utils/isSameErrorMessage.js'
export * from '../../utils/styleFileRE.js'
export * from '../../utils/isPropertyGetter.js'
export * from '../../utils/debug.js'
export * from '../../utils/urlToFile.js'
export * from '../../utils/getGlobalObject.js'
export * from '../../utils/freezePartial.js'
export * from '../../utils/isNpmPackage.js'
export * from '../../utils/isNotNullish.js'
export * from '../../utils/isScriptFile.js'
export * from '../../utils/removeFileExtention.js'
export * from '../../utils/objectKeys.js'
export * from '../../utils/objectEntries.js'
export * from '../../utils/objectFromEntries.js'
export * from '../../utils/getFileExtension.js'
export * from '../../utils/assertSetup.js'
export * from '../../utils/path-shim.js'
export * from '../../utils/assertUsageNodeEnv.js'
export * from '../../utils/isHtml.js'
export * from '../../utils/warnIfErrorIsNotObject.js'
export * from '../../utils/stripAnsi.js'
export * from '../../utils/getTerminWidth.js'
export * from '../../utils/truncateString.js'
export * from '../../utils/formatHintLog.js'
export * from '../../utils/joinEnglish.js'
export * from '../../utils/isArrayOfStrings.js'
export * from '../../utils/escapeHtml.js'
export * from '../../utils/normalizeHeaders.js'
export * from '../../utils/isVikeReactApp.js'
export * from '../../utils/getPropAccessNotation.js'
export * from '../../utils/PROJECT_VERSION.js'
export * from '../../utils/genPromise.js'
