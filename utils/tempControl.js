var sensorLib = require('node-dht-sensor');

sensorLib.initialize(22, 12);
var interval = setInterval(function(){
  read();
}, 2000);

exports.readTemp = function (){
  var readout = sensorLib.read();
  
  return readout.temparature.toFixed(2);
}

exports.readHumid = function (){
  var readout = sensorLib.read();
  
  return readout.humidity.toFixed(2);
}
