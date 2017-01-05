import express from 'express'
import colors from 'colors'
import basicAuth from 'basic-auth'
// use instead of deprecated createLocation.
import createMemoryHistory from 'react-router/lib/createMemoryHistory'

import routesConfig from './routes'
import matchFunc from './match'
// create the inital app, which is exported and used by index.js
const app = express()

// basic auth
let auth = (req, res, next) => {
  function unauthorized (res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required')
    return res.send(401)
  }

  let user = basicAuth(req)

  if (!user || !user.name || !user.pass) {
    return unauthorized(res)
  }

  if (user.name === 'nebula' && user.pass === 'nebula') {
    return next()
  } else {
    return unauthorized(res)
  }
}

// allows us to have dev middleware and hot loading when not in production mode.
if (process.env.NODE_ENV !== 'production') {
  require('./../webpack.dev.js').default(app)
}

// for production...not even sure if this works. Also need a build command so we aren't interpreting jsx on the fly.
app.use(express.static('public'))

app.use(auth, (req, res) => {
  // create location for match to use.

  const history = createMemoryHistory()
  const location = history.createLocation(req.url)

  if (res.statusCode == 200) {
    console.log(colors.green('status: 200 ') + colors.red(req.method) + ' ' + colors.cyan(req.url))
  }

  const routes = routesConfig()

  matchFunc(routes, location, res)
})

// simply adds the rendered html and the preloadedState into and html file, which then loads the bundle.
// This is the only html that we need for the entire app. No index.html or index.ejs required. Thanks, ES6.
export default app
