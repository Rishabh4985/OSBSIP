function convert(type) {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var kelvinInput = document.getElementById("kelvin");
  
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var kelvin = parseFloat(kelvinInput.value);
  
    if (type === "c") {
      fahrenheitInput.value = convertCelsiusToFahrenheit(celsius).toFixed(2);
      kelvinInput.value = convertCelsiusToKelvin(celsius).toFixed(2);
    } else if (type === "f") {
      celsiusInput.value = convertFahrenheitToCelsius(fahrenheit).toFixed(2);
      kelvinInput.value = convertFahrenheitToKelvin(fahrenheit).toFixed(2);
    } else if (type === "k") {
      celsiusInput.value = convertKelvinToCelsius(kelvin).toFixed(2);
      fahrenheitInput.value = convertKelvinToFahrenheit(kelvin).toFixed(2);
    }
  }
  
  function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function convertCelsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function convertFahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
  }
  
  function convertKelvinToCelsius(kelvin) {
    return (kelvin - 273.15);
  }
  
  function convertKelvinToFahrenheit(kelvin) {
    return ((kelvin-273.15)*9/5+32); 
  }
