function temperatureConverter(valNum) {
  document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
}

// Changed js to convert C to F
function temperatureConverter1(valNum) {
  document.getElementById("outputFahrenheit").innerHTML=(valNum * 1.8) + 32;
}