import { API_KEY_OPENWEATHER } from "./constants";

export async function getCurrentWeather(userLocation) {
  let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${userLocation.lat}&lon=${userLocation.lng}&appid=${API_KEY_OPENWEATHER}`,
  );
  return data.json();
}
