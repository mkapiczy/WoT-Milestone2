//var sensorLib = require('node-dht-sensor');

//sensorLib.initialize(22, 12);
//var interval = setInterval(function(){
//  exports.readTemp();
//}, 2000);

exports.readTemp = function (){
  //var readout = sensorLib.read();
  return 2;
  //return readout.temperature.toFixed(2);
}

exports.readHumid = function (){
  //var readout = sensorLib.read();
  return 2;
  //return readout.humidity.toFixed(2);
}
