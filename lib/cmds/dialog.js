
/*

$ termux-dialog [-i hint] [-m] [-p] [-t title]
Show a text entry dialog.

  -i hint   the input hint to show when the input is empty
  -m        use a textarea with multiple lines instead of a single
  -p        enter the input as a password
  -t title  the title to show for the input prompt

- Usage:

api.dialog()
   .title('foo')
   .hint('hei..')
   .multipleLines()
   .password()
   .run()

*/
