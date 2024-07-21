import { API_KEY_OPENWEATHER } from "./constants";

export async function getWeather(cityName) {
  try {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY_OPENWEATHER}`,
    );
    return data.json();
  } catch (err) {
    alert(
      err,
      "Unfortunately, we cannot find this city. Please enter the correct city name",
    );
  }
}
