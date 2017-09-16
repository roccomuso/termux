

/*

$ termux-notification [-c content] [-i id] [-t title] [-u url]
Display a system notification.

  -c content notification content to show
  -i id      notification id (will overwrite any previous notification
               with the same id)
  -t title   notification title to show
  -u url     notification url when clicking on it

- Usage:

api.notification()
   .content('content to show')
   .id(1)
   .title('Title..')
   .url('...')
   .run()

*/
