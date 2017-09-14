const constants = require(".././config/constants");
const ledControl = require(".././utils/ledControl");
module.exports = function(app, auth){
  
  app.post(constants.apiPath + '/led/toggle', function(request, response){
    ledControl.toggleLED();

    res.json({
      message: "toggled!"
    });
})
  }