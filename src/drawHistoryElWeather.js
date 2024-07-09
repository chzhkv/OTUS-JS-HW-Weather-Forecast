import { getWeather } from "./getWeather";
import { showWeather } from "./showWeather";
import { showMap } from "./showMap";

export function drawHistoryElWeather() {
  const historyListElements = document.querySelectorAll(".history-list-el");
  const mapInfoEl = document.querySelector(".map");
  const weatherInfoEl = document.querySelector(".info");

  historyListElements.forEach((el) => {
    el.addEventListener("click", async () => {
      const cityName = el.innerText;
      const cityWeather = await getWeather(cityName);
      showWeather(weatherInfoEl, cityWeather);
      showMap(mapInfoEl, cityWeather);
    });
  });
}
