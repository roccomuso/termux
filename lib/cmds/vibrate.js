
/*

$ termux-vibrate [-d duration] [-f]
Vibrate the device.

  -d duration  the duration to vibrate in ms (default:1000)
  -f           force vibration even in silent mode

- Usage:

api.vibrate()
   .duration(2000)
   .force() // force vibration even in silent mode
   .run()

*/

const BaseClass = require('../BaseClass')

class TermuxVibrate extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-vibrate'
    this._force = false
    this._duration = 1000
  }

  getArgs () {
    return this.setArgs({
      duration: this._duration,
      force: this._force
    }, {
      aliases: {
        duration: 'd',
        force: 'f'
      }
    })
  }

  duration (ms) {
    if (typeof ms !== 'number') throw new Error('duration(ms) accepts only a number')
    this._duration = ms
    return this
  }

  force () {
    this._force = true
    return this
  }
}

module.exports = TermuxVibrate
