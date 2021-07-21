function celsiusToFahrenheit (temperature){
    var convertion = (temperature * (9/5)) + 32;
    return convertion;
}

function fahrenheitToCelsius (temperature){
    var convertion = (temperature - 32) * 5/9;
    return convertion;
}