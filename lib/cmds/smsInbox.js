
/*

$ termux-sms-inbox [-d] [-l limit] [-n] [-o offset]
List received SMS messages.

  -d         show dates when messages were created
  -l limit   limit in sms list (default: 10)
  -n         show phone numbers
  -o offset  offset in sms list (default: 0)

- Usage:

api.smsInbox()
   .date() // show dates
   .limit() // offset in sms list (default: 10)
   .showNumbers()
   .offset(4) // offset in sms list (default: 0)
   .run()
   .then(function (result) {
     // SMS list..
   })

*/

const BaseClass = require('../BaseClass')

class SmsInbox extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-sms-inbox'
  }

  parser (stdout) {
    // return parsed stdout
    try {
      var out = JSON.parse(stdout)
      return out
    } catch (e) {
      return false
    }
  }

  getArgs () {
    return this.setArgs({
      limit: this._limit,
      showNumbers: this._showNumbers,
      date: this._date,
      offset: this._offset
    }, {
      aliases: {
        limit: 'l',
        showNumbers: 'n',
        date: 'd',
        offset: 'o'
      }
    })
  }

  limit (n) {
    if (typeof n !== 'number') throw new Error('.limit(n) accepts only a number')
    this._limit = n
    return this
  }

  showNumbers () {
    this._showNumbers = true
    return this
  }

  date () {
    this._date = true
    return this
  }

  offset (n) {
    if (typeof n !== 'number') throw new Error('.offset(n) accepts only a number')
    this._offset = n
    return this
  }
}

module.exports = SmsInbox
