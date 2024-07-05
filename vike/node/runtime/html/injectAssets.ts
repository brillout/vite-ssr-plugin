export { injectHtmlTagsToString }
export { injectHtmlTagsToStream }
export type { PageContextInjectAssets }
export type { PageContextPromise }

import { assert, isCallable, isPromise } from '../utils.js'
import type { PageAsset } from '../renderPage/getPageAssets.js'
import { assertPageContextProvidedByUser } from '../../../shared/assertPageContextProvidedByUser.js'
import { injectHtmlTags, createHtmlHeadIfMissing, injectHtmlTagsUsingStream } from './injectAssets/injectHtmlTags.js'
import type { HtmlPart } from './renderHtml.js'
import { getHtmlTags, type PreloadFilter, type HtmlTag } from './injectAssets/getHtmlTags.js'
import type { StreamFromReactStreamingPackage } from './stream/react-streaming.js'
import type { PageConfigRuntime } from '../../../shared/page-configs/PageConfig.js'
import type { PageContextSerialization } from './serializePageContextClientSide.js'
import { getViteDevScript } from './injectAssets/getViteDevScript.js'

type PageContextInjectAssets = {
  urlPathname: string
  __getPageAssets: () => Promise<PageAsset[]>
  _pageId: string
  _isHtmlOnly: boolean
  _pageContextPromise: PageContextPromise
  _renderHook: {
    hookFilePath: string
    hookName: 'onRenderHtml' | 'render'
  }
  _baseServer: string
  _pageConfigs: PageConfigRuntime[]
  is404: null | boolean
} & PageContextSerialization

async function injectHtmlTagsToString(
  htmlParts: HtmlPart[],
  pageContext: PageContextInjectAssets & { _isStream: false },
  injectFilter: PreloadFilter
): Promise<string> {
  const pageAssets = await pageContext.__getPageAssets()
  const viteDevScript = await getViteDevScript()
  const htmlTags = getHtmlTags(pageContext, null, injectFilter, pageAssets, viteDevScript)
  let htmlString = htmlPartsToString(htmlParts, pageAssets)
  htmlString = injectToHtmlBegin(htmlString, htmlTags)
  htmlString = injectToHtmlEnd(htmlString, htmlTags)
  assert(htmlTags.filter((snippet) => snippet.position === 'STREAM').length === 0)
  return htmlString
}

function injectHtmlTagsToStream(
  pageContext: PageContextInjectAssets & { _isStream: true },
  streamFromReactStreamingPackage: null | StreamFromReactStreamingPackage,
  injectFilter: PreloadFilter
) {
  let htmlTags: HtmlTag[] | undefined

  return {
    injectAtStreamBegin,
    injectAtStreamEnd
  }

  async function injectAtStreamBegin(htmlPartsBegin: HtmlPart[]): Promise<string> {
    const pageAssets = await pageContext.__getPageAssets()
    const viteDevScript = await getViteDevScript()
    htmlTags = getHtmlTags(pageContext, streamFromReactStreamingPackage, injectFilter, pageAssets, viteDevScript)

    let htmlBegin = htmlPartsToString(htmlPartsBegin, pageAssets)
    htmlBegin = injectToHtmlBegin(htmlBegin, htmlTags)
    injectHtmlTagsUsingStream(htmlTags, streamFromReactStreamingPackage)

    return htmlBegin
  }

  async function injectAtStreamEnd(htmlPartsEnd: HtmlPart[]): Promise<string> {
    assert(htmlTags)
    await resolvePageContextPromise(pageContext)
    const pageAssets = await pageContext.__getPageAssets()
    let htmlEnd = htmlPartsToString(htmlPartsEnd, pageAssets)
    htmlEnd = injectToHtmlEnd(htmlEnd, htmlTags)
    return htmlEnd
  }
}

function injectToHtmlBegin(htmlBegin: string, htmlTags: HtmlTag[]): string {
  // Ensure existence of `<head>`
  htmlBegin = createHtmlHeadIfMissing(htmlBegin)
  htmlBegin = injectHtmlTags(htmlBegin, htmlTags, 'HTML_BEGIN')
  return htmlBegin
}

function injectToHtmlEnd(htmlEnd: string, htmlTags: HtmlTag[]): string {
  htmlEnd = injectHtmlTags(htmlEnd, htmlTags, 'HTML_END')
  return htmlEnd
}

// https://vike.dev/streaming#initial-data-after-stream-end
type PageContextPromise = null | Promise<unknown> | (() => void | Promise<unknown>)
async function resolvePageContextPromise(pageContext: {
  _pageContextPromise: PageContextPromise
  _renderHook: {
    hookFilePath: string
    hookName: 'onRenderHtml' | 'render'
  }
}) {
  const pageContextPromise = pageContext._pageContextPromise
  if (!pageContextPromise) {
    return
  }
  let pageContextProvidedByUser: unknown
  if (isCallable(pageContextPromise)) {
    pageContextProvidedByUser = await pageContextPromise()
  } else if (isPromise(pageContextPromise)) {
    pageContextProvidedByUser = await pageContextPromise
  } else {
    assert(false)
  }
  assertPageContextProvidedByUser(pageContextProvidedByUser, pageContext._renderHook)
  Object.assign(pageContext, pageContextProvidedByUser)
}

function htmlPartsToString(htmlParts: HtmlPart[], pageAssets: PageAsset[]): string {
  let htmlString = ''
  htmlParts.forEach((p) => {
    htmlString += typeof p === 'string' ? p : p(pageAssets)
  })
  return htmlString
}
