const constants = require(".././config/constants");
const tempHumidSensor = require(".././utils/tempHumidSensor");
module.exports = {
  
    // Edit an article
    getTempValue : function(request, response){
        var currentTime = new Date();
        var temperature = tempHumidSensor.readTemp().ToFixed(2);
        console.log(currentTime);
        console.log(temperature);
        return ({
            currentTime: currentTime, 
            temperature: temperature
          });
    }
  
  }