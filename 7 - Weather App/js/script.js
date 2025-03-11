// const apikey = "2f6a24862312522fcd9ac99f01824a05";

// const weatherDataEl = document.getElementById("weather-data");
// const cityInputE1 = document.getElementById("city-input");
// const formE1 = document.querySelector("form");
// formE1.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     const cityValue = cityInputE1.value;
//     // console.log(cityValue);
//     getWeatherData(cityValue);    
// });

// async function getWeatherData(cityValue) {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
//     );

//     if (!response.ok) {
//       // Corrected condition
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json();

//     const temperature = Math.round(data.main.tep);
//     const description = data.weather[0].description;
//     const icon = data.weather[0].icon;

//     const drtails = [
//         `Feels like: ${Math.round(data.main.feels_like)}`,
//         `Humidity: ${data.main.humidity}%`,
//         `Wind speed: ${data.wind.speed} m/s`,
//     ]

//     weatherDataEl.querySelector(".icon"
//     ).innerHTML = ` <img src="https://openweathermap.org/img/wn/${icon}.png" alt="WeatherIcon">`;
//     weatherDataEl.querySelector(".temperature").textContent = `${temperature}C`;

//     weatherDataEl.querySelector(".description").textContent = description;
//     weatherDataEl.querySelector(".drtails").innerHTML = drtails.map(
//       (detail) => `<div>${detail}</div>`
//     ).join("");


//     console.log(data);

//     displayWeatherData(data); // Call function to display data
//   } catch (error) {
//     weatherDataEl.querySelector(".icon").innerHTML = "";
//     weatherDataEl.querySelector(".temperature").textContent = "";
//     weatherDataEl.querySelector(".description").textContent =
//       "Could not find the city. Please try again.";
//     weatherDataEl.querySelector(".drtails").innerHTML = " ";

//   }
// }


const apikey = "2f6a24862312522fcd9ac99f01824a05";

const weatherDataEl = document.getElementById("weather-data");
const cityInputE1 = document.getElementById("city-input");
const formE1 = document.querySelector("form");

formE1.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputE1.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const temperature = Math.round(data.main.temp); // Corrected typo
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const details = [
      // Corrected variable name
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
    ];

    weatherDataEl.querySelector(
      ".icon"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="WeatherIcon">`;
    weatherDataEl.querySelector(".temperature").textContent = `${temperature}C`;
    weatherDataEl.querySelector(".description").textContent = description;
    weatherDataEl.querySelector(".details").innerHTML = details // Corrected selector
      .map((detail) => `<div>${detail}</div>`)
      .join("");

    console.log(data);
  } catch (error) {
    weatherDataEl.querySelector(".icon").innerHTML = "";
    weatherDataEl.querySelector(".temperature").textContent = "";
    weatherDataEl.querySelector(".description").textContent =
      "Could not find the city. Please try again.";
    weatherDataEl.querySelector(".details").innerHTML = " "; // Corrected selector
  }
}