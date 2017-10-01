
/*

$ termux-infrared-transmit -f frequency pattern
Transmit an infrared pattern. The pattern is specified in comma-separated on/off intervals, such as '20,50,20,30'. Only patterns shorter than 2 seconds will be transmitted.

  -f frequency  IR carrier frequency in Hertz

- Usage:

api.infraredTransmit()
   .frequency([20,50,20,30])
   .run()

*/

const BaseClass = require('../BaseClass')

class Download extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-download'
  }

  getArgs () {
    return this.setArgs({
      frequency: this._frequency
    }, {
      aliases: {
        frequency: 'f'
      }
    })
  }

  frequency (f) {
    if (!Array.isArray(f)) throw Error('frequency(<Array>) accepts only an Array')
    this._frequency = f.filter(Number).join(',')
    return this
  }

  validateCmd () {
    if (!this._frequency) return false
    else return true
  }
}

module.exports = Download
