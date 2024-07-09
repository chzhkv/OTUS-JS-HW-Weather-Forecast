import { getWeather } from "./getWeather";
import { showWeather } from "./showWeather";
import { showMap } from "./showMap";
import { readHistoryList } from "./readHistoryList";
import { drawHistoryList } from "./drawHistoryList";
import { saveHistoryList } from "./saveHistoryList";
import { drawHistoryElWeather } from "./drawHistoryElWeather";

export function showSearchingWeather() {
  const formEl = document.querySelector("form");
  const weatherInfoEl = document.querySelector(".info");
  const mapInfoEl = document.querySelector(".map");
  const historyListEl = document.querySelector("#list");
  const historyItems = readHistoryList();
  drawHistoryList(historyListEl, historyItems);

  formEl.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const formElement = ev.target;
    const inputEl = formElement.querySelector("input");
    const cityName = inputEl.value;
    inputEl.value = "";

    historyItems.includes(cityName) ? null : historyItems.push(cityName);
    historyItems.length > 10 ? historyItems.shift() : null;

    const cityWeather = await getWeather(cityName);
    showWeather(weatherInfoEl, cityWeather);
    showMap(mapInfoEl, cityWeather);
    drawHistoryList(historyListEl, historyItems);
    saveHistoryList(historyItems);
    drawHistoryElWeather();
  });
}
