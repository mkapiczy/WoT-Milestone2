var onoff = require("onoff");

var Gpio = onoff.Gpio,
  led = new Gpio(4, "out");

exports.toggleLED = function() {
  var value = (led.readSync() + 1) % 2;
  
  led.write(value, function() {
    console.log("Changed LED state to: " + value);
  });

  process.on("SIGINT", function() {
    led.writeSync(0);
    led.unexport();
    console.log("Bye, bye!");
    process.exit();
  });
};
