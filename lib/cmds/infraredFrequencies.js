/*

$ termux-infrared-frequencies
Query the infrared transmitter's supported carrier frequencies.

- Usage:

api.infraredFrequencies()
   .run()
   .then(function (result) {
     // ...
   })

*/

const BaseClass = require('../BaseClass')

class InfraredFrequencies extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-infrared-frequencies'
  }

  parser (stdout) {
    // parse the stdout
    try {
      return JSON.parse(stdout)
    } catch (e) {
      return false
    }
  }
}

module.exports = InfraredFrequencies
