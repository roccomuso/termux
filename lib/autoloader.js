const debug = require('debug')('termux')
const fs = require('fs')
const path = require('path')

function autoloader () {
  const directory = path.join(__dirname, 'cmds')
  const files = fs.readdirSync(directory).filter((file) => file.endsWith('.js') && file !== 'index.js')

  const cmds = {}

  files.forEach((file) => {
    const moduleName = path.basename(file, '.js')
    cmds[moduleName] = classInstantiator(require(path.join(directory, file)))
    debug('Autoloader cmd:', moduleName + ':', path.join(directory, file))
  })

  return cmds
}

function classInstantiator (Fn) {
  return function () {
    return new Fn()
  }
}

module.exports = autoloader
