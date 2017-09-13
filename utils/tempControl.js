var sensorLib = require('node-dht-sensor');

sensorLib.initialize(22, 12);
var interval = setInterval(function(){
  readTemp();
}, 2000);

exports.readTemp = function (){
  var readout = sensorLib.read();
  
  return readout.temparature.toFixed(2);
}

