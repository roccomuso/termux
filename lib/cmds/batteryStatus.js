
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
    console.log('battery status...')
  }
}

module.exports = BatteryStatus
