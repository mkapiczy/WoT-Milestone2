const constants = require(".././config/constants");
const ledSensor = require(".././utils/ledControl");
module.exports = function(app, auth){
  
  app.post(constants.apiPath + '/led/toggle', function(request, response){
    ledSensor.toggleLED();

    res.json({
      message: "toggled!"
    });
})
  }