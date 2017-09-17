const express = require("express");

const HttpStatus = require("http-status-codes");
const bodyParser = require("body-parser");
const pug = require("pug");
const path = require("path");
var swaggerTools = require("swagger-tools");
var YAML = require("yamljs");


const app = express();
const constants = require("./config/constants");
var routes = require("./config/routes");
app.use("", routes);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views/"));

var args = process.argv.slice(2);
const port = args[0];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//For making the folder public to pug script.
app.use("/views", express.static(path.join(__dirname, "/views")));

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
