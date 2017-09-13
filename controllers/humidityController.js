const constants = require(".././config/constants");
const tempHumidSensor = require(".././utils/tempHumidSensor");
module.exports = {
  
    // Edit an article
    getHumidValue : function(request, response){
      var currentTime = new Date();
      var temperature = tempHumidSensor.readHumid();

        return ({
            currentTime: currentTime, 
            temperature: temperature
          });
    }
  
  }