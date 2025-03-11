const apikey = "2f6a24862312522fcd9ac99f01824a05";

const weatherDataEl = document.getElementById("weather-data");
const cityInputE1 = document.getElementById("city-input");
const formE1 = document.querySelector("form");
formE1.addEventListener("submit", (event)=>{
    event.preventDefault();
    const cityValue = cityInputE1.value;
    // console.log(cityValue);
    getWeatherData(cityValue);    
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
    );

    if (!response.ok) {
      // Corrected condition
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const temperature = Math.round(data.main.tep);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const drtails = [
        `Feels like: ${Math.round(data.main.feels_like)}`,
        `Humidity: ${data.main.humidity}`,
        `Wind speed: ${data.wind.speed}`,
    ]
    console.log(data);

    displayWeatherData(data); // Call function to display data
  } catch (error) {
    console.error("Error fetching weather data:", error);
    displayError("Could not find the city. Please try again."); // Display error to user
  }
}