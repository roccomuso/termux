
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
   .run()

*/
