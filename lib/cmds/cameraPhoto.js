
/*

$ termux-camera-photo [-c camera-id] output-file
Take a photo and save it to a faile in a JPEG format.

(camera-id default 0)

- Usage:

api.cameraPhoto()
   .camera(0) // choose camera 0
   .run()
   .then(function(result) {
     // result is the photo path...
     var photo = fs.readFileSync(result)
   })

*/

const BaseClass = require('../BaseClass')

class CameraPhoto extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-camera-photo'
    this._id = 0
  }

  parser (stdout) {
    // return plain text stdout
    return this._path
  }

  getArgs () {
    // TOCHECK: the obj is computed by dargs and called before the run.
    return this.setArgs({
      cameraID: this._id,
      path: this._path
    }, {
      aliases: {
        cameraID: 'd'
      }
    })
  }

  validateCmd () {
    if (!this._path) return false
    else return true
  }

  camera (id) {
    if (typeof id !== 'number') throw new Error('camera(id) accepts only a number')
    this._id = id
    return this
  }

  path (str) {
    this._path = str
    return this
  }
}

module.exports = CameraPhoto
