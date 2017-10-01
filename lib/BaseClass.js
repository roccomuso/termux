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
    return true
  }

  getArgs () { /* to Override */
    return this.args
  }

  setArgs (cmdObj, opts) {
    opts = opts || {}
    this.args = dargs(cmdObj, Object.assign(opts, {
      ignoreFalse: true
    }))
    return this.args
  }

  getCmd () {
    return this.cmd.trim()
  }

  run () {
    var self = this
    return new Promise(function (resolve, reject) {
      if (!self.validateCmd()) return reject(new Error('Command not valid, make sure to pass mandatory params!'))
      execa(self.getCmd(), self.getArgs()).then(function (result) {
        if (result.stderr) return reject(result.stderr)
        resolve(self.parser(result.stdout))
      }).catch(function (error) {
        reject(error)
      })
    })
  }
}

module.exports = BaseClass
