
/*

$ termux-tts-speak [-e engine] [-l language] [-p pitch] [-r rate] [-s stream] [text-to-speak]
Speak text with a system text-to-speech (TTS) engine. The text to speak is either supplied as arguments or read from stdin if no arguments are given.

  -e engine    TTS engine to use (see termux-tts-engines)
  -l language  language to speak in (may be unsupported by the engine)
  -p pitch     pitch to use in speech. 1.0 is the normal pitch,
                 lower values lower the tone of the synthesized voice,
                 greater values increase it.
  -r rate      speech rate to use. 1.0 is the normal speech rate,
                 lower values slow down the speech
                 (0.5 is half the normal speech rate)
                 while greater values accelerates it
                 (2.0 is twice the normal speech rate).
  -s stream    audio stream to use (default:NOTIFICATION), one of:
                 ALARM, MUSIC, NOTIFICATION, RING, SYSTEM, VOICE_CALL

- Usage:

api.ttsSpeak()
   .engine()  // see .ttsEngines()
   .language('IT')
   .pitch(1.0)
   .rate(1.0)
   .stream('NOTIFICATION') // One of: ALARM, MUSIC, NOTIFICATION (default), RING, SYSTEM, VOICE_CALL
   .text('Hello world')
   .run()

*/

const BaseClass = require('../BaseClass')

class TtsSpeak extends BaseClass {
  constructor () {
    super()
    this.cmd = 'termux-tts-speak'
  }

  getArgs () {
    return this.setArgs({
      _: [this._str],
      engine: this._engine,
      language: this._language,
      pitch: this._pitch,
      rate: this._rate,
      stream: this._stream
    }, {
      aliases: {
        'engine': 'e',
        'language': 'l',
        'pitch': 'p',
        'rate': 'r',
        'stream': 's'
      }
    })
  }

  text (str) {
    this._str = str
    return this
  }

  engine (e) {
    this._engine = e
    return this
  }

  language (l) {
    this._language = l
    return this
  }

  stream (s) {
    this._stream = validateStream(s)
    return this
  }

  pitch (n) {
    if (typeof n !== 'number') throw new Error('.pitch(n) accepts only a number')
    this._pitch = n
    return this
  }

  rate (n) {
    if (typeof n !== 'number') throw new Error('.rate(n) accepts only a number')
    this._rate = n
    return this
  }

  validateCmd () {
    if (!this._str) return false
    else return true
  }
}

function validateStream (entry) {
  const allowed = ['ALARM', 'MUSIC', 'NOTIFICATION', 'RING', 'SYSTEM', 'VOICE_CALL']
  if (typeof entry !== 'string') throw Error('.actionType(str) accepts only String')
  entry = entry.trim().toUpperCase()
  if (allowed.indexOf(entry) !== -1) return entry
  else throw Error('actionType must be one of the following: ' + allowed)
}

module.exports = TtsSpeak
