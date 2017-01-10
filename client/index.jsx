import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router' // eslint-disable-line no-unused-vars
import { UserAgent } from 'express-useragent'
import routesConfig from '../server/routes'

let userAgent = new UserAgent().parse(navigator.userAgent);
const routes = routesConfig(userAgent)

render(
  <Router children={routes} history={browserHistory} />,
  document.getElementById('root')
)
