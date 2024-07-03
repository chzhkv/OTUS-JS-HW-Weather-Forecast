import "./styles.css";
import { getWeather } from "./getWeather";
import { showWeather } from "./showWeather";

document.querySelector(".app").innerHTML = `
    <div class="wrapper">
          <div>
            <form class="search-wrapper">
              <div class="search">
                <input type="text" class="search-field" placeholder="Type city" required/>
                <img
                  src="https://img.icons8.com/?size=100&id=131&format=png&color=000000"
                  alt=""
                  class="search-icon"
                />
              </div>
              <button type="submit" class="search-button">Show</button>
            </form>
            <div class="info-wrapper">
              <div class="map">Map</div>
              <div class="info"></div>             
            </div>
          </div>
          <div>
            <div>History</div>
            <hr class="solid" />
            <ul>
              <li>London</li>
              <li>Minsk</li>
              <li>Moscow</li>
            </ul>
          </div>
        </div>
`;

const formEl = document.querySelector("form");
const weatherInfoEl = document.querySelector(".info");
formEl.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const formElement = ev.target;
  const inputEl = formElement.querySelector("input");
  const cityName = inputEl.value;
  inputEl.value = "";

  const cityWeather = await getWeather(cityName);
  showWeather(weatherInfoEl, cityWeather);
});
