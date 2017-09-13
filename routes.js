var express = require('express');
var tempCtrl = require('./controllers/temperatureController');
var humidCtrl = require('./controllers/humidityController');
var ledCtrl = require('./controllers/ledController');

var router = express.Router();

router.route('temperature/value').get(tempCtrl.getTempValue);

module.exports = router;