import React from 'react'
import { RouterContext, match } from 'react-router'// eslint-disable-line no-unused-vars
import { renderToString } from 'react-dom/server'
import renderFullPage from './renderFullPage'

export default function matchFunc (routes, location, res, userAgent) {
  return match({routes, location}, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err)
      return res.status(500).end('Internal server error')
    } else if (renderProps) {
      res.end(createApp())
        // could be refactored out of match...probably better.
        // creates initial app with preloaded state.
        // is there a way to decouple this from renderFullPage?
        // Does it matter?
      function createApp () { // eslint-disable-line no-inner-declarations
        const InitialHTML = (
          <RouterContext {...renderProps} />
        )
        const component = renderToString(InitialHTML)
        return renderFullPage(component)
      }
    } else if (redirectLocation) {
      // redirect server side
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else {
      return res.status(404).end('Not Found')
    }
  })
}
