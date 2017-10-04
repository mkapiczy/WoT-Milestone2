var toggleLED = function() {
    $.put("/api/sensors/led/toggle");
}