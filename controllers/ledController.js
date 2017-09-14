const constants = require(".././config/constants");
const lightLED = require(".././utils/lightLED");

exports.toggle = function(req, res) {
  var currentTime = new Date();
  var message = "toggled";

  lightLED.toggleLED();
  
  res.statusCode = 200;
  res.json({
      currentTime: currentTime, 
      message: message
    });
};