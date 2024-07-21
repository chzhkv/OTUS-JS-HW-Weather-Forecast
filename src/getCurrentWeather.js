import { API_KEY_OPENWEATHER } from "./constants";

export async function getCurrentWeather(userLocation) {
  try {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${userLocation.lat}&lon=${userLocation.lng}&appid=${API_KEY_OPENWEATHER}`,
    );
    if (data.ok) {
      return data.json();
    } else {
      throw new Error(data.status);
    }
  } catch (error) {
    alert(error.message);
    console.log(error);
  }
}
