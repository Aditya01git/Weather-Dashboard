const apiKey = "34bb29457f7f3f46539d600b3b05b1dd"; 
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const weatherImages = {
  Clear: "images/sunny.png",
  Clouds: "images/cloudy.png",
  Rain: "images/rainy.png",
  Snow: "images/snowy.png",
  Drizzle: "images/rainy.png",
  Thunderstorm: "images/storm.png",
  Mist: "images/foggy.png",
  Smoke: "images/foggy1.png",
  Haze: "images/foggy.png",
  Dust: "images/dusty.png",
  Fog: "images/foggy.png",
  Sand: "images/dusty.png",
  Ash: "images/dusty.png",
  Squall: "images/windy.png",
  Tornado: "images/tornado.png",
  Default: "images/default.png",
};

const weatherColors = {
  Clear: "--sunny-color",
  Clouds: "--cloudy-color",
  Rain: "--rainy-color",
  Snow: "--snowy-color",
  Drizzle: "--rainy-color",
  Thunderstorm: "--storm-color",
  Mist: "--foggy-color",
  Smoke: "--foggy-color",
  Haze: "--foggy-color",
  Dust: "--dusty-color",
  Fog: "--foggy-color",
  Sand: "--dusty-color",
  Ash: "--dusty-color",
  Squall: "--windy-color",
  Tornado: "--tornado-color",
  Default: "--background-color", 
};

let currentUnit = "metric"; // Default unit: Celsius


async function getWeather(city) {
  try {
    const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=${currentUnit}`);
    if (!response.ok) {
      throw new Error("City not found");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}


function renderWeather(data) {
  const resultDiv = document.getElementById("result");
  const iconBox = document.getElementById("icon-box");
  const weatherInfoDiv = document.getElementById("weather-info");

  if (!resultDiv || !iconBox || !weatherInfoDiv) {
    console.error("Required elements not found!");
    return;
  }

  const weatherCondition = data.weather[0].main;
  const weatherIcon = weatherImages[weatherCondition] || weatherImages.Default;
  const weatherColor = weatherColors[weatherCondition] || weatherColors.Default;

  const temp = data.main.temp;
  const tempUnit = currentUnit === "metric" ? "°C" : "°F";


  const windSpeed = currentUnit === "metric" ? data.wind.speed : data.wind.speed; 
const windUnit = currentUnit === "metric" ? "m/s" : "mph";


  
  weatherInfoDiv.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${temp}${tempUnit}</p>
    <p>Condition: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${windSpeed.toFixed(2)} ${windUnit}</p>
  `;


  resultDiv.style.backgroundColor = `var(${weatherColor})`;


  const weatherIconElement = document.getElementById("weather-icon");
  weatherIconElement.src = weatherIcon;
  weatherIconElement.alt = `${weatherCondition} icon`;
  iconBox.style.display = "block"; 
}

document.getElementById("search").addEventListener("click", async () => {
  const cityInput = document.getElementById("city");
  const resultDiv = document.getElementById("result");
  const iconBox = document.getElementById("icon-box");
  const weatherInfoDiv = document.getElementById("weather-info");

  if (!cityInput || !resultDiv || !iconBox || !weatherInfoDiv) {
    console.error("Required elements not found!");
    return;
  }

  const city = cityInput.value.trim();

  if (!city) {
    weatherInfoDiv.innerHTML = "<p>Please enter a city name.</p>";
    iconBox.style.display = "none"; 
    return;
  }

  const data = await getWeather(city);

  if (data) {
    renderWeather(data);
  } else {
    weatherInfoDiv.innerHTML = "<p>Could not fetch weather data. Try again later.</p>";
    iconBox.style.display = "none"; 
  }
});


document.getElementById("unit-toggle").addEventListener("click", async () => {
 
  currentUnit = currentUnit === "metric" ? "imperial" : "metric"; 
  document.getElementById("unit-toggle").textContent = currentUnit === "metric" ? "Switch to Fahrenheit and mph" : "Switch to Celsius and m/s";
  
  const city = document.getElementById("city").value;
  if (city) {
    const data = await getWeather(city); 
    if (data) {
      renderWeather(data);
    }
  }
});

