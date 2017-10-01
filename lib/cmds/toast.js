
/*

$ termux-toast [-s] [text]
Show text in a Toast (a transient popup). The text to show is either supplied as arguments or read from stdin if no arguments are given.

 -s  only show the toast for a short while

- Usage:

api.toast()
   .transient()  // show the toast for a short while
   .text('Toast text...')
   .run()

*/

const BaseClass = require('../BaseClass')

class Toast extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-toast'
  }

  getArgs () {
    return this.setArgs({
      _: [this._str],
      transient: this._transient
    }, {
      aliases: {
        'transient': 's'
      }
    })
  }

  transient () {
    this._transient = true
    return this
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

module.exports = Toast
