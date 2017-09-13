const constants = require(".././config/constants");
const ledSensor = require(".././utils/ledControl");
module.exports = function(app, auth){
  
    // Edit an article
    app.get(constants.apiPath + '/led/toggle', function(request, response){
        
    })
  
  }