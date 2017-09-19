
/*

$ termux-clipboard-set
Set the system clipboard text.

- Usage:

api.clipboardSet()
   .text('Hello world')
   .run()

*/


const BaseClass = require('../BaseClass')

class ClipboardSet extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-clipboard-set'
  }

  parser (stdout) {
    // TODO: parse the stdout if any ?
    try {
      var out = JSON.parse(stdout)
      return out
    } catch (e) {
      return false
    }
  }

  getArgs () {
    // TOCHECK: the obj is computed by dargs and called before the run.
    this.setArgs({
      _: [this._str]
    })
  }

  text (str) {
    this._str = str
  }

}

module.exports = ClipboardSet
