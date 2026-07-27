/*

$ termux-sms-send -n number[,number2,number3,...] [text]
Send a SMS message to the specified recipient number(s). The text to send is either supplied as arguments or read from stdin if no arguments are given.

  -n number(s)  recipient number(s) - separate multiple numbers by commas

- Usage:

api.smsSend()
   .numbers([348239235, '293034239'])
   .text('.... Hey friend ....')
   .run()

*/

const BaseClass = require('../BaseClass')

class SmsSend extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-sms-send'
  }

  getArgs () {
    return this.setArgs({
      _: this._text !== undefined ? [this._text] : [],
      numbers: this._numbers
    }, {
      aliases: {
        numbers: 'n'
      }
    })
  }

  numbers (arr) {
    if (!Array.isArray(arr)) throw new Error('numbers(<Array>) accepts only an Array')
    this._numbers = arr.filter((n) => Number.isFinite(Number(n))).join(',')
    return this
  }

  text (txt) {
    this._text = txt
    return this
  }

  validateCmd () {
    if (!this._numbers) return false
    else return true
  }
}

module.exports = SmsSend
