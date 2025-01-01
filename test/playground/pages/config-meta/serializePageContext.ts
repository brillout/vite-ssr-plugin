export { serializePageContext }
export { extractPageContext }

import { Config, PageContext } from 'vike/types'
import { isBrowser } from '../../utils/isBrowser'

const START_MARKER = '===CONFIG:START==='
const END_MARKER = '===CONFIG:END==='
const EXTRACT_REGEX = RegExp(START_MARKER + '(.*)' + END_MARKER)

type SerializedData = {
  isBrowser: boolean
  pageContextSubset: Record<string, unknown>
}

/**
 * Serializes the specified keys of {@link PageContext#config} and wraps the resulting JSON
 * in known start and end markers so that it can be later extracted from the resulting HTML
 * via {@link extractPageContext} without knowing its exact position on the page.
 */
function serializePageContext(pageContext: PageContext, keys: (string & keyof Config)[]) {
  const pageContextSubset: Record<string, unknown> = {}
  for (const key of keys) {
    pageContextSubset[key] = valueOrType(pageContext.config[key])
  }
  let serializedData: SerializedData = { isBrowser, pageContextSubset }
  return START_MARKER + JSON.stringify(serializedData) + END_MARKER
}

function valueOrType(value: any) {
  if (value === undefined) {
    return 'undefined'
  }
  if (value === null) {
    return 'null'
  }
  return value
}

/**
 * Extracts and deserialized the config settings that were embedded into a page via {@link serializePageContext}.
 *
 * @param text The text that contains the serialized settings.
 * @returns
 */
function extractPageContext(text: string | null): Record<string, any> {
  if (!text) {
    throw Error('Text must not be null or undefined.')
  }
  let jsonText = text!.match(EXTRACT_REGEX)?.[1]
  if (!text) {
    throw Error('Failed to find start+end markers in the provided text.')
  }

  // We only need to support the HTML entities that will be generated by React auto-escaping here
  // (as defined by https://github.com/facebook/react/blob/372ec00c0384cd2089651154ea7c67693ee3f2a5/packages/react-dom/src/__tests__/escapeTextForBrowser-test.js#L22-L45))
  // so we keep this basic instead of using a dedicated HTML entity encoding/decoding library.
  jsonText = jsonText!
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')

  const { isBrowser, pageContextSubset } = JSON.parse(jsonText!) as SerializedData
  return { pageContextSubset, isBrowser }
}