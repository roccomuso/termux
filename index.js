const execa = require('execa')

// TODO
execa.shell('termux-battery-status').then(function (result) {
	console.log(result.stdout)
	console.log(result.stderr)
}).catch(function (error) {
  console.log(error)
})
