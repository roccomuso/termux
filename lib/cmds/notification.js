
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

  OLD, updated in README.md
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
      url: this._url,
      image: this._imgPath,


      button1: this._btn1Name,
      "button1-action": this._btn1Action,

      button2: this._btn2Name,
      "button2-action": this._btn2Action,

      button3: this._btn3Name,
      "button3-action": this._btn3Action,

      "on-delete": this._deleteAction,
      action: this._tapAction,
      ongoing: (this._id && this._pin),

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

  button1(name, action){
    this._btn1Name = name
    this._btn1Action = action
    return this
  }

  button2(name, action){
    this._btn2Name = name
    this._btn2Action = action
    return this
  }

  button3(name, action){
    this._btn3Name = name
    this._btn3Action = action
    return this
  }

  delete(action){
    this._deleteAction = action
    return this
  }
  
  pin(){
    this._pin = true
    return this    
  }

  tap(action){
    this._tapAction = action
    return this
  }


  image(path){
    this._imgPath = path
    return this
  }



}

module.exports = Notification
