/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../common/components/index'
import LandingPage from '../common/components/landingPage'
/* eslint-enable no-unused-vars */

export default function routesConfig (userAgent) {

  return (
    <Route path="/" userAgent={userAgent} component={App} >
      <IndexRoute component={LandingPage} />
    </Route>
  )
}
