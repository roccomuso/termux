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

  setArgs (cmdObj, opts = {}) {
    this.args = dargs(cmdObj, {
      ...opts,
      ignoreFalse: true
    })
    return this.args
  }

  getCmd () {
    return this.cmd.trim()
  }

  async run () {
    if (!this.validateCmd()) throw new Error('Command not valid, make sure to pass mandatory params!')
    const result = await execa(this.getCmd(), this.getArgs())
    if (result.stderr) throw new Error(result.stderr)
    return this.parser(result.stdout)
  }
}

module.exports = BaseClass
