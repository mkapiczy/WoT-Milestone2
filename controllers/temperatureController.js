const constants = require(".././config/constants");
const tempHumidSensor = require(".././utils/tempHumidSensor");

exports.getValue = function(req, res) {
  var currentTime = new Date();
  var temperature = tempHumidSensor.readTemp();

  res.statusCode = 200;
  res.json({
      currentTime: currentTime, 
      temperature: temperature
    });
};