const constants = require("../config/constants");
const tempHumidSensor = require(".././utils/tempHumidSensor");


exports.getValue = function(req, res) {
  var currentTime = new Date();
  var humidity = tempHumidSensor.readHumid();

  res.json({
      currentTime: currentTime, 
      humidity: humidity
    });
};