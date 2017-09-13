const express = require("express");
const HttpStatus = require("http-status-codes");
const bodyParser = require("body-parser");
const pug = require("pug");
const path = require("path");
var swaggerTools = require("swagger-tools");
var YAML = require("yamljs");

const app = express();

const ledControl = require("./utils/ledControl")
const tempControl = require("./utils/tempControl")


const apiPath = "/api/kademlia/";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views/"));

var args = process.argv.slice(2);
const port = args[0];

//For presentation
app.get("/", (request, response) => {
  ledControl.blinkLED();
  var temperature = tempControl.readTemp();
  var humidity = tempControl.readHumid();
  response.render('index', {title: 'Hey!', message: 'This works :-)', temp: temperature, humid: humidity})
  
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

