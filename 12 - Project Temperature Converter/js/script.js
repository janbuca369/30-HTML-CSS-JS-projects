// 





const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event) {
  const currentValue = +event.target.value; // Use event parameter
  switch (
    event.target.name // Check the name of the input
  ) {
    case "celsius":
      kelvinEl.value = (currentValue + 273.15).toFixed(2); // Corrected formula
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2); // Corrected formula
      break;

    case "fahrenheit":
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2); // Corrected formula
      kelvinEl.value = (celsiusEl.value + 273.15).toFixed(2); // Convert back to Kelvin
      break;

    case "kelvin":
      celsiusEl.value = (currentValue - 273.15).toFixed(2); // Corrected formula
      fahrenheitEl.value = (celsiusEl.value * 1.8 + 32).toFixed(2); // Convert back to Fahrenheit
      break;

    default:
      break;
  }
}