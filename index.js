const express = require("express");
const HttpStatus = require("http-status-codes");
const bodyParser = require("body-parser");
const pug = require("pug");
const path = require("path");
var swaggerTools = require("swagger-tools");
var YAML = require("yamljs");
var request = require("request");


const app = express();

const tempController = require("./controllers/temperatureController")(app)
const humidityController = require("./controllers/humidityController")(app)
const ledController = require("./controllers/ledController")(app)

const constants = require("./config/constants");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views/"));

var args = process.argv.slice(2);
const port = args[0];


//For presentation
app.get("/", (request, response) => {
    var temp;
    var humid;
    var time;
    //Get req from the controllers here...
    request(constants.apiPath + 'sensors/temperature/value', function (error, response, body) {
        if (!error && response.statusCode == 200) {
        temp = response.temp;
        }
    });
    request(constants.apiPath + 'sensors/humidity/value', function (error, response, body) {
        if (!error && response.statusCode == 200) {
        humid = response.humid;
        temp = response.time;
        }
    });

  response.render('index', {temp: temp, humid: humid, time: time})
  
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

