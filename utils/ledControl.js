var onoff = require('onoff');

exports.toggleLED = function (){
  var Gpio = onoff.Gpio, 
  led = new Gpio(4, 'out');
  var value = led.readSync()
  led.write(!value, function(){
  });

  process.on('SIGINT', function () {
  clearInterval(interval);
  led.writeSync(0);
  led.unexport();
  console.log('Bye, bye!');
  process.exit();
  });
}

