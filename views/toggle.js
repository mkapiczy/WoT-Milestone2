var toggleLED = function() {
    $.ajax({
        url: "/api/sensors/led/toggle",
        type: 'PUT',
        success: function(result) {
            // Do something with the result
        }
    });
}