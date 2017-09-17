
/*

$ termux-toast [-s] [text]
Show text in a Toast (a transient popup). The text to show is either supplied as arguments or read from stdin if no arguments are given.

 -s  only show the toast for a short while

- Usage:

api.toast()
   .transient()  // show the toast for a short while
   .text('Toast text...')
   .run()

*/
