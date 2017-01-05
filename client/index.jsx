import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router' // eslint-disable-line no-unused-vars
import routesConfig from '../server/routes'

const routes = routesConfig()

render(
  <Router children={routes} history={browserHistory} />,
  document.getElementById('app')
)
