
/*

$ termux-battery-status
Get the status of the device battery.

- Usage:

api.batteryStatus()
   .run()
   .then(function(result) {
     // battery info...
   })

*/

const BaseClass = require('../BaseClass')

class BatteryStatus extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-battery-status'
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

module.exports = BatteryStatus
