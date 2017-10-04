const constants = require("./config/constants");
var express = require("express");
var router = express.Router();

const constants = require("./constants");

var indexController = require("../controllers/indexController");
var tempCtrl = require('./controllers/mocks/temperatureController');
var humidCtrl = require('./controllers/mocks/humidityController');
var ledCtrl = require('./controllers/mocks/ledController');

router.get("/", indexController.index);
router.get(constants.apiPath + "temperature/value", tempCtrl.getValue);
router.get(constants.apiPath + "humidity/value", humidCtrl.getValue);
router.put(constants.apiPath + "led/toggle", ledCtrl.toggle);

module.exports = router;
