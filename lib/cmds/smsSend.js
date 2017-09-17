
/*

$ termux-sms-send -n number[,number2,number3,...] [text]
Send a SMS message to the specified recipient number(s). The text to send is either supplied as arguments or read from stdin if no arguments are given.

  -n number(s)  recipient number(s) - separate multiple numbers by commas

- Usage:

api.smsSend()
   .numbers([348239235, 293034239])
   .text('.... Hey friend ....')
   .run()

*/
