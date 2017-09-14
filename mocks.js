const express = require("express");
const HttpStatus = require("http-status-codes");
const bodyParser = require("body-parser");
const pug = require("pug");
const path = require("path");
var swaggerTools = require("swagger-tools");
var YAML = require("yamljs");
var request = require("request");
var rp = require('request-promise');


const app = express();
const constants = require("./config/constants")
require('./mockRoutes')(app);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views/"));

var args = process.argv.slice(2);
const port = args[0];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//For making the folder public to pug script.
app.use('/views', express.static(path.join(__dirname, '/views')));

//For presentation
app.get("/", (req, res) => {
    var _temp;
    var _humid;
    var _time;

    var optionsTemp = {
      uri: constants.host + ':' + constants.portNo + constants.apiPath + "temperature/value",
      json: true
    };
    
    rp(optionsTemp)
      .then(function (body) {
        _temp = body.temperature
        _time = body.currentTime
        
        var optionsHumid = {
          uri: constants.host + ':' + constants.portNo + constants.apiPath + "humidity/value",
          json: true
       };
        rp(optionsHumid)
         .then(function (body) {
           _humid = body.humidity
           res.render('index', {temp: _temp, humid: _humid, time: _time})
           
         }).catch(function (err) {
           // API call failed... 
         });        
    }).catch(function (err) {
      // API call failed... 
    });
});

var swaggerDoc = YAML.load("openapi.yaml");
swaggerTools.initializeMiddleware(swaggerDoc, function(middleware) {
  app.use(middleware.swaggerUi());
});

app.listen(port, err => {
  if (err) {
    return console.log("Error: ", err);
  }

  console.log(`Server is listening on port ${port}`);
});

