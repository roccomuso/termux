
/*

$ termux-camera-info
Get information about device camera(s).

- Usage:

api.cameraInfo()
   .run()
   .then(function(result) {
     // camera(s) info...
   })

*/

const BaseClass = require('../BaseClass')

class CameraInfo extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-camera-info'
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

module.exports = CameraInfo
