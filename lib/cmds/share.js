

/*

$ termux-share [-a action] [-c content-type] [-d] [-t title] [file]
Share a file specified as argument or the text received on stdin if no file argument is given.

  -a action        which action to performed on the shared content:
                     edit/send/view (default:view)
  -c content-type  content-type to use (default: guessed from file extension,
                     text/plain for stdin)
  -d               share to the default receiver if one is selected
                     instead of showing a chooser
  -t title         title to use for shared content (default: shared file name)

- Usage:

api.share()
   .file('filePath..')
   .action('send') // edit/send/view (default)
   .contentType('text/plain') // default: guessed from the file extension
   .default()
   .title('Title...')
   .run()

*/
