
/*

$ termux-download [-d description] [-t title] url-to-download
Download a resource using the system download manager.

  -d description  description for the download request notification
  -t title        title for the download request notification

- Usage:

api.download()
   .url('...')
   .title('cool')
   .description('Download me')
   .run()

*/

const BaseClass = require('../BaseClass')

class Download extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-download'
  }

  getArgs () {
    return this.setArgs({
      _: [this._url],
      description: this._description,
      title: this._title
    }, {
      aliases: {
        description: 'd',
        title: 't'
      }
    })
  }

  url (str) {
    this._url = str
    return this
  }

  title (str) {
    this._title = str
    return this
  }

  description (str) {
    this._description = str
    return this
  }

  validateCmd () {
    if (!this._url) return false
    else return true
  }
}

module.exports = Download
