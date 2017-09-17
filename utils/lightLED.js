var onoff = require("onoff");

exports.toggleLED = function() {
  var Gpio = onoff.Gpio,
    led = new Gpio(4, "out");
    console.log(led.readSync())
  var value = (led.readSync() + 1) % 2;

  led.writeSync(value, function() {
    console.log("Changed LED state to: " + value);

  });

  process.on("SIGINT", function() {
    clearInterval();
    led.writeSync(0);
    led.unexport();
    console.log("Bye, bye!");
    process.exit();
  });

  console.log("LED toggled");
};
