/**
 * Internal types
 */
export type PageContextBuiltIn = {
  Page: any
  pageExports: Record<string, unknown>
  routeParams: Record<string, string>
  url: string
  urlPathname: string
  urlParsed: {
    pathname: string
    search: null | Record<string, string>
    hash: null | string
  }
}

// props defined here are always available in `render()` hook and
// if `renderPage()` is successful also always available there.
export interface PageContextOnBeforeRenderInternal {
  pageExports: {
    documentProps: {
      title: string
      description: string
    }
  }
}

/**
 * Namespace that can be partially overriden by user
 */
export declare namespace VitePluginSsr {
  // can be overriden
  export interface PageContextInit {
    url: string
  }

  // can be overriden
  export interface PageContextOnBeforeRender {}

  // somewhat internal type
  export interface GenericPageContext {
    pageContext?: {
      pageProps?: any
    }
  }

  type OnBeforeHookReturnInternal<X extends GenericPageContext> =
    Partial<PageContextOnBeforeRenderInternal> & Partial<PageContextOnBeforeRender> & X;

  // OnBeforeHook return type extract for readability and reusability
  export type OnBeforeHookReturn<X extends GenericPageContext> =
    OnBeforeHookReturnInternal<X> | Promise<OnBeforeHookReturnInternal<X>>;

  // OnBeforeRender pageContext have some internally computed props that we add
  export interface OnBeforeRenderPageContext extends PageContextBuiltIn, PageContextInit {}

  // OnBeforeHook type
  export interface OnBeforeHook<X> {
    (context: OnBeforeRenderPageContext): OnBeforeHookReturn<X>
  }

  // util to easily create a functional Component
  export interface Page<Props> {
    (props: Props): any
  }
}

/**
 * Dummy TS wrapper to ensure the following:
 *   - hook type is correct
 *   - hook return type can be infered
 *
 * _key is used as type only, but since this helper as multiple generics, it's impossible to set one and let TS
 * infer the others. Passing key as a value and infering its type is a workaround for this issue.
 */
export function withTypescript<K extends keyof WithTSMapping, H extends ReturnType<WithTSMapping[K]>>(_key: K, hook: H) {
  return hook;
}

export interface WithTSMapping {
  // function-like syntax necessary to allow extends syntax
  onBeforeRender: <X extends VitePluginSsr.GenericPageContext>() => VitePluginSsr.OnBeforeHook<X>
}

/**
 * Util types to extract PageProps or PageComponent types (could be moved into namespace)
 */
export type GetPagePropsInternal<T extends VitePluginSsr.GenericPageContext> = T extends {
  pageContext?: {
    pageProps?: infer U
  }
} ? U : never;
export type GetPageProps<T extends VitePluginSsr.OnBeforeHook<any>> = T extends VitePluginSsr.OnBeforeHook<infer U> ?
  GetPagePropsInternal<U> : {};
export type GetPage<T extends VitePluginSsr.OnBeforeHook<any>> = T extends VitePluginSsr.OnBeforeHook<infer U> ?
  VitePluginSsr.Page<GetPagePropsInternal<U>> : {};
