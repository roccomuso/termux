

/*

$ termux-camera-photo [-c camera-id] output-file
Take a photo and save it to a faile in a JPEG format.

(camera-id default 0)

- Usage:

api.cameraPhoto()
   .id(0) // choose camera 0
   .run()
   .then(function(result) {
     // result is the photo path...
     var photo = fs.readFileSync(result)
   })

*/
