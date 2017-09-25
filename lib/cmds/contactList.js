
/*

$ termux-contact-list
List all contacts.

- Usage:

api.contactList()
   .run()
   .then(function (result) {
     // contact list
   })

*/

const BaseClass = require('../BaseClass')

class ContactList extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-contact-list'
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
}

module.exports = ContactList
