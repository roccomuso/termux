
/*

$ termux-sms-inbox [-d] [-l limit] [-n] [-o offset]
List received SMS messages.

  -d         show dates when messages were created
  -l limit   offset in sms list (default: 10)
  -n         show phone numbers
  -o offset  offset in sms list (default: 0)

- Usage:

api.smsInbox()
   .date() // show dates
   .limit() // offset in sms list (default: 10)
   .showNumbers()
   .offset(4) // offset in sms list (default: 0)
   .run()
   .then(function (result) {
     // SMS list..
   })

*/
