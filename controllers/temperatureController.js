const constants = require(".././config/constants");
const tempHumidSensor = require(".././utils/tempHumidSensor");

exports.getValue = function(req, res) {
  var currentTime = new Date();
  var temperature = tempHumidSensor.readTemp();

  res.json({
      currentTime: currentTime, 
      temperature: temperature
    });
};