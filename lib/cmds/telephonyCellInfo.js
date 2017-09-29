
/*

$ termux-telephony-cellinfo
Get information about all observed cell information from all radios on the device including the primary and neighboring cells.

- Usage:

api.telephonyCellInfo()
   .run()
   .then(function (result) {
     // ...
   })

*/

const BaseClass = require('../BaseClass')

class TelephonyCellInfo extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-telephony-cellinfo'
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
}

module.exports = TelephonyCellInfo
