
/*

$ termux-tts-engines
Get information about the available text-to-speech (TTS) engines. The name of an engine may be given to the termux-tts-speak command using the -e option.

- Usage:

api.ttsEngines()
   .run()
   .then(function (result) {
     // ...
   })

*/

const BaseClass = require('../BaseClass')

class TtsEngines extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-tts-engines'
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

module.exports = TtsEngines
