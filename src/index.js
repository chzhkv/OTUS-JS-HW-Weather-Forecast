import "./styles.css";
import { getWeather } from "./getWeather";
import { showWeather } from "./showWeather";
import { showMap } from "./showMap";
import { API_KEY_YANDEX_MAP } from "./constants";

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
              <section class="map">                         
              </section>
              <section class="info"></section>             
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

navigator.geolocation.getCurrentPosition(function (position) {
  let userLocation = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };

  document.querySelector(".map").innerHTML =
    `<img src="https://static-maps.yandex.ru/v1?ll=${userLocation.lng},${userLocation.lat}&lang=en_RU&size=200,200&z=10&apikey=${API_KEY_YANDEX_MAP}">`;
  //let currentCityWeather = getCurrentWeather(userLocation);
  //console.log(currentCityWeather);
});

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
