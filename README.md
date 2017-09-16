# termux

[![NPM Version](https://img.shields.io/npm/v/termux.svg)](https://www.npmjs.com/package/termux)
[![Dependency Status](https://david-dm.org/roccomuso/termux.png)](https://david-dm.org/roccomuso/termux)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Comprehensive Node.js module for [Termux-API](https://termux.com/add-on-api.html)

## Install

1. Make sure you've first installed the [termux-api](https://play.google.com/store/apps/details?id=com.termux.api) on your Android device from the Play store.
2. Then install the scripts with `apt install termux-api`.
3. Finally get this node module:

    $ npm install --save termux

## Example usage

```javascript
// todo
const api = require('termux')

api.vibrate()
   .duration(1000)
   .run()

api.toast()
   .text('Hello world')
   .transient()
   .run()
```

## Available methods

| Method | Description | Parameters |
|--------|-------------|-----------|
| `.toast()` | Show a toast message | `.text(<string>)` |
| |  | `.transient()` |
| `.vibrate()` | Vibrate your phone | `.duration(<ms>)` |
| |  | `.force()` |


## Other module

Check out also the [has-termux-api](https://github.com/roccomuso/has-termux-api) node module.

## Debug

Set the env DEBUG: `DEBUG=termux`

# Author

Rocco Musolino ([@roccomuso](https://twitter.com/roccomuso))

# License

MIT
