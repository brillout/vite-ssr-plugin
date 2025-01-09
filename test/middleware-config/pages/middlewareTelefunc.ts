import { decorate } from '@universal-middleware/router'

export { middlewareTelefunc }

import type { UniversalMiddleware } from '@universal-middleware/core'
import { telefunc } from 'telefunc'

const telefuncUniversalMiddleware: UniversalMiddleware = async (request, context, runtime) => {
  const url = request.url.toString()

  // No need for that. UniversalRouter and its variants should handle it
  // const urlParsed = new URL(url)
  // if (urlParsed.pathname !== '/_telefunc') return

  const httpResponse = await telefunc({
    url,
    method: request.method,
    body: await request.text(),
    context: {
      ...context,
      ...runtime
    }
  })
  const { body, statusCode, contentType } = httpResponse
  return new Response(body, {
    status: statusCode,
    headers: {
      'content-type': contentType
    }
  })
}

const middlewareTelefunc = decorate(telefuncUniversalMiddleware, {
  name: 'telefunc',
  method: 'POST',
  path: '/_telefunc'
})
