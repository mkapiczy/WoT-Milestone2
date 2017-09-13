const constants = require(".././config/constants");
const tempHumidSensor = require(".././utils/tempHumidSensor");
module.exports = function(app, auth){
  
    app.get(constants.apiPath + '/humidity/value', function(request, response){
        var currentTime = new Date();
        var humidity = tempHumidSensor.readHumid();

        res.json({
          currentTime: currentTime, 
          temperature: temperature
        });
    })
  
  }