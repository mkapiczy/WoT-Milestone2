const constants = require("./config/constants");
module.exports = function(app){
  var tempCtrl = require('./controllers/temperatureController');
  var humidCtrl = require('./controllers/humidityController');
  
  //temperature controller
  app.get(constants.apiPath + 'temperature/value', tempCtrl.getValue);
  //humidity controller
  app.get(constants.apiPath + 'humiidty/value', humidCtrl.getValue);

  //TODO: Add led control toggle
  
}