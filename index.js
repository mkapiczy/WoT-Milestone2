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
app.get("/", (req, res) => {
    var temp;
    var humid;
    var time;
    //Get req from the controllers here...
    request(constants.host + constants.apiPath + 'sensors/temperature/value', function (error, response, body) {
        //temp = response.temp;
        console.log(response);
        console.log(body);
    });
    request(constants.host + constants.apiPath + 'sensors/humidity/value', function (error, response, body) {
        humid = response.humid;
        temp = response.time;
    });

  res.render('index', {temp: temp, humid: humid, time: time})
  
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

