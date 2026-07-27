/*

$ termux-telephony-deviceinfo
Get information about the telephony device.

- Usage:

api.telephonyDeviceInfo()
   .run()
   .then(function (result) {
     // ...
   })

*/

const BaseClass = require('../BaseClass')

class TelephonyDeviceInfo extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-telephony-deviceinfo'
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

module.exports = TelephonyDeviceInfo
