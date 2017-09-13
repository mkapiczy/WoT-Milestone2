const constants = require(".././config/constants");
const tempHumidSensor = require(".././utils/tempHumidSensor");
module.exports = function(app, auth){
  
    // Edit an article
    app.get(constants.apiPath + '/temperature/value', function(request, response){
        var currentTime = new Date();
        var temperature = tempHumidSensor.readTemp();

        response.json({
            currentTime: currentTime, 
            temperature: temperature
          });
    })
  
  }