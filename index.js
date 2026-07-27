const debug = require('debug')('termux')
const hasTermux = require('has-termux-api')
const autoloader = require('./lib/autoloader')

const api = {
  hasTermux: hasTermux.sync(),
  ...autoloader()
}

debug('API loaded:', api)

module.exports = api
