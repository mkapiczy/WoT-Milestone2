var express = require('express');
const constants = require('./config/constants');
var tempCtrl = require('./controllers/temperaturController');
var humidCtrl = require('./controllers/humidityController');
var ledCtrl = require('./controllers/ledController');

var router = express.Router();

router.route('temperature/value').get(tempCtrl.getTempValue);

module.exports = router;