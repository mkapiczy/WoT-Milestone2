var toggleLED = function() {
    $.post("/api/sensors/led/toggle");
}