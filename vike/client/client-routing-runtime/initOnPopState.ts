export { initOnPopState }

import { onPopStateBegin, type HistoryInfo } from './history.js'
import { renderPageClientSide } from './renderPageClientSide.js'
import { type ScrollTarget, setScrollPosition } from './setScrollPosition.js'

// The 'popstate' event is trigged when the browser doesn't fully load the new URL: for example, `location.hash='#foo'` triggers the popstate event while `location.href='/foo'` doesn't.

// Concretely, 'popstate' is fired when:
// 1. Back-/forward navigation:
//    - By the user using the browser's back-/forward navigation
//    - By the app using `history.back()` / `history.forward()` / `history.go()`
// 2. URL hash changes:
//    - By the user clicking on `<a href="#some-hash">`
//      - The popstate event is *only* triggered if `href` starts with '#' (even if `href==='/foo#bar'` and the current URL has the same pathname '/foo' then popstate isn't triggered)
//      - Vike doesn't intercept hash links (see `skipLink()`) and let's the browser handle them.
//    - By the app using a `location` API such as `location.hash = 'some-hash'`
//      - Even upon `location.href='/foo#bar'` while the current URL is '/foo' (unlike <a> clicks).
//      - Only upon hash navigation: setting `location.href='/foo'` triggers a full page reload and no popstate event is fired.
// 3. Server Routing
//    - When the user clicks on a link before the page's JavaScript was loaded

// Notes:
// - The 'hashchange' event is fired after popstate, so we cannot use it to distinguish between hash and non-hash navigations.
// - It isn't possible to monkey patch the `location` APIs. (Chrome throws `TypeError: Cannot redefine property` when attempt to overwrite any `location` property.)
// - Text links aren't supported: https://github.com/vikejs/vike/issues/2114

function initOnPopState() {
  window.addEventListener('popstate', onPopState)
}
async function onPopState() {
  const { isHistoryEntryNotEnhanced, previous, current } = onPopStateBegin()
  // - `isHistoryEntryNotEnhanced === false` <=> back-/forward navigation
  // - `isHistoryEntryNotEnhanced === true` when:
  //   - Click on `<a href="#some-hash">`
  //   - Using the `location` API (only hash navigation, see comment above)
  //   - Server Routing
  if (isHistoryEntryNotEnhanced) {
    // Let the browser handle it
    return
  } else {
    // Back-/forward navigation (including back-/forward hash navigation)
    await handleBackForwardNavigation(previous, current)
  }
}
async function handleBackForwardNavigation(previous: HistoryInfo, current: HistoryInfo) {
  const scrollTarget: ScrollTarget = current.state.scrollPosition || undefined

  const isHashNavigation = removeHash(current.url) === removeHash(previous.url) && current.url !== previous.url
  if (isHashNavigation) {
    // We have to scroll ourselves because we have set `window.history.scrollRestoration = 'manual'`
    setScrollPosition(scrollTarget)
    return
  }

  const isUserPushStateNavigation = current.state.triggeredBy === 'user' || previous.state.triggeredBy === 'user'
  const doNotRenderIfSamePage = isUserPushStateNavigation

  const isBackwardNavigation =
    !current.state.timestamp || !previous.state.timestamp ? null : current.state.timestamp < previous.state.timestamp

  await renderPageClientSide({ scrollTarget, isBackwardNavigation, doNotRenderIfSamePage })
}

function removeHash(url: `/${string}`) {
  return url.split('#')[0]!
}
