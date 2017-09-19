const execa = require('execa')
const dargs = require('dargs')

class BaseClass {
  constructor () {
    this.args = ''
  }

  parser (stdout) { /* to Override */
    return stdout // default behaviour
  }

  validateCmd () { /* to Override */
    return false
  }

  setArgs (cmdObj) {
    this.args = dargs(cmdObj).join(' ')
    return this.args
  }

  getArgs () { /* to Override */
    return this.args
  }

  getFinalCmd () {
    return this.cmd.trim() + ' ' + this.getArgs()
  }

  run () {
    var self = this
    return new Promise(function (resolve, reject) {
      if (!self.validateCmd()) return reject(new Error('Command not valid, make sure to pass mandatory params!'))
      execa.shell(self.getFinalCmd()).then(function (result) {
        if (result.stderr) return reject(result.stderr)
        resolve(self.parser(result.stdout))
      }).catch(function (error) {
        reject(error)
      })
    })
  }
}


module.exports = BaseClass
