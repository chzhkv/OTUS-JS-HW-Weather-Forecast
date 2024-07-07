import { getWeather } from "./getWeather";
import { showWeather } from "./showWeather";
import { showMap } from "./showMap";

export function showSearchingWeather() {
  const formEl = document.querySelector("form");
  const weatherInfoEl = document.querySelector(".info");
  const mapInfoEl = document.querySelector(".map");
  formEl.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const formElement = ev.target;
    const inputEl = formElement.querySelector("input");
    const cityName = inputEl.value;
    inputEl.value = "";
    const cityWeather = await getWeather(cityName);
    showWeather(weatherInfoEl, cityWeather);
    showMap(mapInfoEl, cityWeather);
  });
}
