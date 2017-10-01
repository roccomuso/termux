
/*

$ termux-share [-a action] [-c content-type] [-d] [-t title] [file]
Share a file specified as argument or the text received on stdin if no file argument is given.

  -a action        which action to performed on the shared content:
                     edit/send/view (default:view)
  -c content-type  content-type to use (default: guessed from file extension,
                     text/plain for stdin)
  -d               share to the default receiver if one is selected
                     instead of showing a chooser
  -t title         title to use for shared content (default: shared file name)

- Usage:

api.share()
   .file('filePath..')
   .action('send') // edit/send/view (default)
   .contentType('text/plain') // default: guessed from the file extension
   .default()
   .title('Title...')
   .run()

*/

const BaseClass = require('../BaseClass')

class Share extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-share'
  }

  getArgs () {
    return this.setArgs({
      _: [this._file],
      actionType: this._actionType,
      contentType: this._contentType,
      default: this._default,
      title: this._title
    }, {
      aliases: {
        actionType: 'a',
        contentType: 'c',
        default: 'd',
        title: 't'
      }
    })
  }

  actionType (action) {
    this._actionType = validateAction(action)
    return this
  }

  contentType (str) {
    this._contentType = str
    return this
  }

  default () {
    this._default = true
    return this
  }

  title (str) {
    this._title = str
    return this
  }

  file (str) {
    this._file = str
    return this
  }

  validateCmd () {
    if (!this._file) return false
    else return true
  }
}

function validateAction (entry) {
  const allowed = ['edit', 'send', 'view']
  if (typeof entry !== 'string') throw Error('.actionType(str) accepts only String')
  entry = entry.trim().toLowerCase()
  if (allowed.indexOf(entry) !== -1) return entry
  else throw Error('actionType must be one of the following: ' + allowed)
}

module.exports = Share
