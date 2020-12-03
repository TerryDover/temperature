// JS GOES HERE
/* When the input field receives input, convert the value from fahrenheit to celsius */
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
  }
  fuction cToFtemperature(cVal);{
      cVal = parseFloat (cVal);
      document.getElementById("outputFahrenheit").innerHTML = (cVal * 1.8) +32;
  }
// °C to °F	Divide by 5, then multiply by 9, then add 32
// °F to °C	Deduct 32, then multiply by 5, then divide by 9
