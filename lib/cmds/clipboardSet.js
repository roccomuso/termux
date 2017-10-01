
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

  getArgs () {
    return this.setArgs({
      _: [this._str]
    })
  }

  text (str) {
    this._str = str
    return this
  }

  validateCmd () {
    if (!this._str) return false
    else return true
  }
}

module.exports = ClipboardSet
