
/*

$ termux-clipboard-get
Get the system clipboard text.

- Usage:

api.clipboardGet()
   .run()
   .then(function(result) {
     // The clipboard text
   })

*/

const BaseClass = require('../BaseClass')

class ClipboardGet extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-clipboard-get'
  }

  parser (stdout) {
    // return plain text stdout
    return stdout
  }
}

module.exports = ClipboardGet
