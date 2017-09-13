const express = require("express");
const HttpStatus = require("http-status-codes");
const bodyParser = require("body-parser");
const pug = require("pug");
const path = require("path");
var swaggerTools = require("swagger-tools");
var YAML = require("yamljs");
var request = require("request");

const app = express();
const constants = require("./config/constants")
require('./routes')(app);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views/"));

var args = process.argv.slice(2);
const port = args[0];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//For presentation
app.get("/", (req, res) => {
    var temp;
    var humid;
    var time;

    request.get(constants.host + ':' + constants.portNo + constants.apiPath + "temperature/value",function(err,res,body){
        temp = JSON.parse(body).temperature;
        time = JSON.parse(body).currentTime;
      });

    request.get(constants.host + ':' + constants.portNo + constants.apiPath + "humidity/value",function(err,res,body){
        temp = JSON.parse(body).humidity;
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

