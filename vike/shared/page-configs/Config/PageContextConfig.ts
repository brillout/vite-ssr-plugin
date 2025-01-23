export type { PageContextConfig }
export type { ConfigResolved }

import type { VikePackages } from '../../VikeNamespace.js'
import type { ConfigBuiltIn, ConfigBuiltInResolved, ImportString } from '../Config.js'
import type { Combine, IsNotEmpty, XOR5 } from './helpers.js'

type WithoutImportString<T> = { [K in keyof T]: Exclude<T[K], ImportString> }

// https://vike.dev/meta#typescript
type ConfigResolvedOnly = ConfigBuiltInResolved & Vike.ConfigResolved
type ConfigUnresolved = WithoutImportString<ConfigBuiltIn> & Vike.Config
type ConfigResolved = ConfigResolvedOnly & Omit<ConfigUnresolved, keyof ConfigResolvedOnly>
type PageContextConfig = ConfigResolved &
  // TODO/eventually: remove the whole XOR logic
  (ConfigVikePackagesNotEmptyXor extends true ? ConfigVikePackagesIntersection : ConfigVikePackagesCombined)

// Preserves JSDocs, such as the the JSDoc pageContext.config.title defined by vike-react
type ConfigVikePackagesIntersection = VikePackages.ConfigVikeReact &
  VikePackages.ConfigVikeVue &
  VikePackages.ConfigVikeSolid &
  VikePackages.ConfigVikeSvelte &
  VikePackages.ConfigVikeAngular
// Loses JSDocs, such as the the JSDoc pageContext.config.title defined by vike-react
type ConfigVikePackagesCombined = Combine<
  VikePackages.ConfigVikeReact,
  Combine<
    VikePackages.ConfigVikeVue,
    Combine<VikePackages.ConfigVikeSolid, Combine<VikePackages.ConfigVikeSvelte, VikePackages.ConfigVikeAngular>>
  >
>

type ConfigVikePackagesNotEmptyXor = XOR5<
  IsNotEmpty<VikePackages.ConfigVikeReact>,
  IsNotEmpty<VikePackages.ConfigVikeVue>,
  IsNotEmpty<VikePackages.ConfigVikeSolid>,
  IsNotEmpty<VikePackages.ConfigVikeSvelte>,
  IsNotEmpty<VikePackages.ConfigVikeAngular>
>
