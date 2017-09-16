

/*

$ termux-infrared-transmit -f frequency pattern
Transmit an infrared pattern. The pattern is specified in comma-separated on/off intervals, such as '20,50,20,30'. Only patterns shorter than 2 seconds will be transmitted.

  -f frequency  IR carrier frequency in Hertz

- Usage:

api.infraredTransmit()
   .frequency([20,50,20,30])
   .run()

*/
