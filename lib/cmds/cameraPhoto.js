
/*

$ termux-camera-photo [-c camera-id] output-file
Take a photo and save it to a file in a JPEG format.

(camera-id default 0)

- Usage:

api.cameraPhoto()
   .camera(0) // choose camera 0
   .outputFile('...')
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
    return this.setArgs({
      _: [this._path],
      cameraID: this._id
    }, {
      aliases: {
        cameraID: 'c'
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

  outputFile (str) {
    this._path = str
    return this
  }
}

module.exports = CameraPhoto
