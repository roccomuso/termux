
/*

$ termux-location [-p provider] [-r request]
Get the device location.

  -p provider  location provider [gps/network/passive] (default: gps)
  -r request   kind of request to make [once/last/updates] (default: once)

- Usage:

api.location()
   .provider('network') // network/passive/gps (default)
   .request('last') // updates/last/once (default)
   .run()
   .then(function (result) {
     // ...
   })

*/

const BaseClass = require('../BaseClass')

class Location extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-location'
  }

  parser (stdout) {
    // parse the stdout
    try {
      var out = JSON.parse(stdout)
      return out
    } catch (e) {
      return false
    }
  }

  getArgs () {
    return this.setArgs({
      provider: this._provider,
      request: this._request
    }, {
      aliases: {
        provider: 'p',
        request: 'r'
      }
    })
  }

  provider (str) {
    this._provider = validateProvider(str)
    return this
  }

  request (str) {
    this._request = validateRequest(str)
    return this
  }
}

function validateProvider (entry) {
  const allowed = ['network', 'passive', 'gps']
  if (typeof entry !== 'string') throw Error('.provider(str) accepts only String')
  entry = entry.trim().toLowerCase()
  if (allowed.indexOf(entry) !== -1) return entry
  else throw Error('provider should be picked between: ' + allowed)
}

function validateRequest (entry) {
  const allowed = ['updates', 'last', 'once']
  if (typeof entry !== 'string') throw Error('.request(str) accepts only String')
  entry = entry.trim().toLowerCase()
  if (allowed.indexOf(entry) !== -1) return entry
  else throw Error('request should be picked between: ' + allowed)
}

module.exports = Location
