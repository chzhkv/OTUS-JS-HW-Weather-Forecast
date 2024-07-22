import { API_KEY_OPENWEATHER } from "./constants";

export async function getWeather(cityName) {
  try {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY_OPENWEATHER}`,
    );
    if (data.ok) {
      return data.json();
    } else {
      throw new Error(data.status);
    }
  } catch (error) {
    //alert("City not found! Please try again");
    console.log(error);
  }
}
