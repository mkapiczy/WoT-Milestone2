var toggleLED = function() {
    $.post("http://localhost:2727/api/sensors/led/toggle");
}