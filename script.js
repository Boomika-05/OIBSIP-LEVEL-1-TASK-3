function convertToFar() {
    var celsius = document.getElementById('inputCelsius').value;
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('outputFahrenheit').innerHTML = fahrenheit + "°F";
}

function convertToCel() {
    var fahrenheit = document.getElementById('inputFahrenheit').value;
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('outputCelsius').innerHTML = celsius + "°C";
}
