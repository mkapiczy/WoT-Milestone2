const express = require("express");
const HttpStatus = require("http-status-codes");
const bodyParser = require("body-parser");
const pug = require("pug");
const path = require("path");
var swaggerTools = require("swagger-tools");
var YAML = require("yamljs");
var request = require("request");

const app = express();
const constants = require("./config/constants");
//const tempController = require("./controllers/temperatureController")(app)
//const humidityController = require("./controllers/humidityController")(app)
//const ledController = require("./controllers/ledController")(app)

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

  res.render('index', {temp: temp, humid: humid, time: time})
  
});

var swaggerDoc = YAML.load("openapi.yaml");
swaggerTools.initializeMiddleware(swaggerDoc, function(middleware) {
  app.use(middleware.swaggerUi());
});

var routes = require('./routes');
app.use('/api', routes);

app.listen(port, err => {
  if (err) {
    return console.log("Error: ", err);
  }

  console.log(`Server is listening on port ${port}`);
});

