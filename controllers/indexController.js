const constants = require("../config/constants");
const lightLED = require(".././utils/lightLED");
const tempHumidSensor = require(".././utils/tempHumidSensor");

exports.index = function(req, res) {
    var currentTime = new Date();
    var humidity = tempHumidSensor.readHumid();
    var temperature = tempHumidSensor.readTemp();
    
    res.statusCode = 200;

    if (req.accepts('html')) {
      res.render('index', {temp: temperature, humid: humidity, time: currentTime})
      return;
    }
  
    if (req.accepts('json')) {
      res.json({
        currentTime: currentTime, 
        humidity: humidity,
        temperature: temperature
      });
      return;
    }
  };