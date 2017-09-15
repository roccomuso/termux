# termux

[![NPM Version](https://img.shields.io/npm/v/termux.svg)](https://www.npmjs.com/package/termux)
[![Dependency Status](https://david-dm.org/roccomuso/termux.png)](https://david-dm.org/roccomuso/termux)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Node.js module for [Termux-API](https://termux.com/add-on-api.html)

## Install

Make sure you've first installed the termux-api on your Android device.

    $ npm install --save termux

## Example usage

```javascript
// todo
const api = require('termux')

api.vibrate()
   .setDuration(1000)
   .run()

api.toast()
   .setText('Hello world')
   .shortDuration()
   .run()
```

## Available methods

| Method | Description | Parameters |
|--------|-------------|-----------|
| `.toast()` | Show a toast message | `.setDuration(ms)` |
| |  | `.shortDuration()` |
| `.vibrate()` | Vibrate your phone | `.shortDuration()` |

## Debug

Set the env DEBUG: `DEBUG=termux`

# Author

Rocco Musolino ([@roccomuso](https://twitter.com/roccomuso))

# License

MIT
