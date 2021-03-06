# WoT-Milestone2
An implementation of a Web of Things API that communicates with a raspberry pi in order to read sensor measurements (temperature and humidity) and manipulate an actuator (LED).

The system consists of an express server that gets the temperature and humidity measurement, and is able to toggle an LED.

#### Raspberry PI setup

![Setup](https://github.com/mkapiczy/WoT-Milestone2/blob/master/img/setup.png)

#### Usage

For the real implementation:
```
$ npm install
$ node index.js 2727
```
If you have not installed the 'node-dht-sensor' package it will not work. There is an external guide for doing so on:
```
$ cd drivers
$ tar zxvf bcm2835-1.50.tar.gz
$ cd bcm2835-1.50
$ ./configure
$ make
$ sudo make check
$ sudo make install
```

For testing without the sensor and just running on your local machine use:
```
$ npm install
$ node index.js 2727 mocks
```
Which will use the fake controllers and sensors.

Go to http://localhost:2727/ to see an overview of the implementation
