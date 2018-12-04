# termux

[![NPM Version](https://img.shields.io/npm/v/termux.svg)](https://www.npmjs.com/package/termux)
[![Dependency Status](https://david-dm.org/roccomuso/termux.png)](https://david-dm.org/roccomuso/termux)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Comprehensive Node.js module for [Termux-API](https://wiki.termux.com/wiki/Termux:API)

## Install

1. Make sure you've first installed the [termux-api](https://play.google.com/store/apps/details?id=com.termux.api) on your Android device from the Play store.
2. Then install the scripts with `apt install termux-api`.
3. Finally get this node module:

    $ `npm install --save termux`

## Example usage

```javascript
const api = require('termux')

if (!api.hasTermux) process.exit(1)

api.vibrate()
   .duration(1000)
   .run()

api.clipboardGet()
   .run()
   .then(function (text) {
     // ...
   })
```

## Available methods

Every command instance has the `.run()` method that must be used to execute the command. It always return a Promise (eventually with results).

| Method | Description | Parameters |
|--------|-------------|-----------|
| `.toast()` | Show a toast message | |
| | set the text to show | `.text(<str>)` |
| | show the toast for a short while | `.transient()` |
| `.vibrate()` | Vibrate your phone | |
| | set the duration in milliseconds | `.duration(<ms>)` |
| | force vibration even in silent mode | `.force()` |
| `.batteryStatus()` | Get the status of the device battery | |
| `.cameraInfo()` | Get info about device camera(s) | |
| `.cameraPhoto()` | Take a photo and save it to a file (JPEG format) | |
| | select the camera by ID | `.camera(<id>)` |
| | output photo file (NB. use an absolute path!) | `.outputFile(<str>)` |
| `.clipboardGet()` | Get the system clipboard text | |
| `.clipboardSet()` | Set the system clipboard text | |
| | text to copy in clipboard | `.text(<str>)` |
| `.contactList()` | Set the system clipboard text | |
| `.contactList()` | List all contacts | |
| `.dialog()` | Show a text entry dialog | |
| | dialog title | `.title(<str>)` |
| | hint to show when input is empty | `.hint(<str>)` |
| | use a textarea with multiple lines | `.multipleLines()` |
| | enter the input as a password | `.password()` |
| `.download()` | Download a resource using the download manager | |
| | set the resource to download | `.url(<str>)` |
| | title for the download request | `.title(<str>)` |
| | description for the download request | `.description(<str>)` |
| `.infraredFrequencies()` | Query the infrared transmitter's supported carrier frequencies | |
| `.infraredTransmit()` | Transmit an infrared pattern | |
| | specify the pattern to transmit as array of numbers | `.frequency(<Array>)` |
| `.location()` | Get the device location | |
| | location provider (gps/network/passive) | `.provider(<enum>)` |
| | kind of request to make (once/last/updates) | `.request(<enum>)` |
| `.notification()` | Display a system notification | |
| | notification content to show | `.content(<str>)` |
| | notification id (will overwrite any previous notification with the same id)| `.id(<int>)` |
| | notification title to show | `.title(<str>)` |
| | notification url when clicking on it | `.url(<str>)` |
| `.share()` | share a file specified as argument | |
| | provide a file to share | `.file(<path>)` |
| | which action to perform on the file (edit/send/view) | `.action(<enum>)` |
| | content-type to use (default: guessed from file extension) | `.contentType(<str>)` |
| | share to the default receiver instead of showing a chooser | `.default()` |
| | title to use for shared content (default: shared file name) | `.title(<str>)` |
| `.smsInbox()` | List received SMS messages | |
| | show dates when messages were created | `.date()` |
| | limit in sms list (default: 10) | `.limit(<int>)` |
| | show phone numbers | `.showNumbers()` |
| | offset in sms list (default: 0) | `.offset(<int>)` |
| `.smsSend()` | Send a SMS message to the specified recipient number(s) | |
| | Recipient number(s), gotta be an Array | `.numbers(<Array>)` |
| | The SMS text | `.text(<str>)` |
| `.telephonyCellInfo()` | Get information about all observed cell information from all radios on the device | |
| `.telephonyDeviceInfo()` | Get information about the telephony device | |
| `.ttsEngines()` | Get information about the available text-to-speech (TTS) engines | |
| `.ttsSpeak()` | Speak text with a system text-to-speech (TTS) engine | |
| | Text to speak, passed to the engine | `.text(<str>)` |
| | TTS engine to use, see `.ttsEngines()` | `.engine(<id>)` |
| | language to use (may be unsupported by the engine) | `.language(<enum>)` |
| | pitch to use in speech (1.0 is normal) | `.pitch(<num>)` |
| | speech rate to use (1.0 is normal) | `.rate(<num>)` |
| | audio stream to use (ALARM/MUSIC/NOTIFICATION/RING/SYSTEM/VOICE_CALL) | `.stream(<enum>)` |


## Dependency

It uses [has-termux-api](https://github.com/roccomuso/has-termux-api) to check if termux-api is installed.

## Debug

Set the env DEBUG: `DEBUG=termux`

# Author

Rocco Musolino ([@roccomuso](https://twitter.com/roccomuso))

# License

MIT
