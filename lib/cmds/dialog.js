
/*

$ termux-dialog [-i hint] [-m] [-p] [-t title]
Show a text entry dialog.

  -i hint   the input hint to show when the input is empty
  -m        use a textarea with multiple lines instead of a single
  -p        enter the input as a password
  -t title  the title to show for the input prompt

- Usage:

api.dialog()
   .title('foo')
   .hint('hei..')
   .multipleLines()
   .password()
   .run()
   .then(function (text) {
     // user text
   })

*/

const BaseClass = require('../BaseClass')

class Dialog extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-dialog'
  }

  getArgs () {
    return this.setArgs({
      title: this._title,
      hint: this._hint,
      password: this._password,
      multipleLines: this._m
    }, {
      aliases: {
        title: 't',
        hint: 'i',
        password: 'p',
        multipleLines: 'm'
      }
    })
  }

  title (str) {
    this._title = str
    return this
  }

  hint (str) {
    this._hint = str
    return this
  }

  password () {
    this._password = true
    return this
  }

  multipleLines () {
    this._m = true
    return this
  }
}

module.exports = Dialog
