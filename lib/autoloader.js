const debug = require('debug')('termux')
const glob = require('glob')
const path = require('path')

function autoloader () {
  var directory = path.join(__dirname, 'cmds')
  var files = glob.sync('**/!(index).js', {cwd: directory})

  var cmds = {}

  files.forEach(function (file) {
    var moduleName = path.basename(file, '.js')
    cmds[moduleName] = classIstantiator(require(path.join(directory, file)))
    debug('Autoloader cmd:', moduleName + ':', path.join(directory, file))
  })

  return cmds
}

function classIstantiator (Fn) {
  return function () {
    return new Fn()
  }
}

module.exports = autoloader
