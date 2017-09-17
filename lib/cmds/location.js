
/*

$ termux-location [-p provider] [-r request]
Get the device location.

  -p provider  location provider [gps/network/passive] (default: gps)
  -r request   kind of request to make [once/last/updates] (default: once)

- Usage:

api.location()
   .provider('network') // network/passive/gps (default)
   .request('last') // updates/last/once (default)
   .run()
   .then(function (result) {
     // ...
   })

*/
