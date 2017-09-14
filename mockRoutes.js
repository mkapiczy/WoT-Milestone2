const constants = require("./config/constants");
module.exports = function(app){
  var tempCtrl = require('./controllers/mocks/temperatureController');
  var humidCtrl = require('./controllers/mocks/humidityController');
  var ledCtrl = require('./controllers/mocks/ledController');
  
  //temperature controller
  app.get(constants.apiPath + 'temperature/value', tempCtrl.getValue);
  //humidity controller
  app.get(constants.apiPath + 'humidity/value', humidCtrl.getValue);
  //led controller
  app.post(constants.apiPath + 'led/toggle', ledCtrl.toggle)
  
}