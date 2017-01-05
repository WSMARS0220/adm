'use strict'

// allows us to use .jsx
require('babel-core/register')({})
require('babel-polyfill')
var colors = require('colors')

var server = require('./server/server').default

const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log(colors.red('Server listening on: ') + colors.green(PORT))
})
