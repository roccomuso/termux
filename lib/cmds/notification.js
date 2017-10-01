
/*

$ termux-notification [-c content] [-i id] [-t title] [-u url]
Display a system notification.

  -c content notification content to show
  -i id      notification id (will overwrite any previous notification
               with the same id)
  -t title   notification title to show
  -u url     notification url when clicking on it

- Usage:

api.notification()
   .content('content to show')
   .id(1)
   .title('Title..')
   .url('...')
   .run()

*/

const BaseClass = require('../BaseClass')

class Notification extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-notification'
  }

  getArgs () {
    return this.setArgs({
      content: this._content,
      id: this._id,
      title: this._title,
      url: this._url
    }, {
      aliases: {
        content: 'c',
        id: 'i',
        title: 't',
        url: 'u'
      }
    })
  }

  content (str) {
    this._content = str
    return this
  }

  id (n) {
    this._id = n
    return this
  }

  title (str) {
    this._title = str
    return this
  }

  url (url) {
    this._url = url
    return this
  }
}

module.exports = Notification
