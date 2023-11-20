export default Page

import React, { useState } from 'react'
import { usePageContext } from '../../renderer/usePageContext'

function Page() {
  const pageContext = usePageContext()
  const { globalOnBeforeRenderWasCalled, globalOnBeforeRenderWasCalledInEnv, data } = pageContext
  return (
    <>
      <h1>Page</h1>
      <p>global onBeforeRender() was called: {String(globalOnBeforeRenderWasCalled)}</p>
      <p>global onBeforeRender() was called in env: {String(globalOnBeforeRenderWasCalledInEnv)}</p>
      <p>global data() was called: {String(data?.globalDataWasCalled)}</p>
      <p>global data() was called in env: {String(data?.globalDataWasCalledInEnv)}</p>
      <p>per-page data() was called: {String(data?.perPageDataWasCalled)}</p>
      <p>per-page data() was called in env: {String(data?.perPageDataWasCalledInEnv)}</p>
      <Counter />
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      Counter {count}
    </button>
  )
}
