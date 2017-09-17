const debug = require('debug')('termux')
const execa = require('execa')
const hasTermux = require('has-termux-api')
const autoloader = require('./lib/autoloader')

var api = Object.assign({
  hasTermux: hasTermux.sync()
}, autoloader())

debug('API loaded:', api)

/*
// TODO
execa.shell('termux-battery-status').then(function (result) {
  console.log(result.stdout)
  console.log(result.stderr)
}).catch(function (error) {
  console.log(error)
})
*/

module.exports = api
