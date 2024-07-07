import { API_KEY_YANDEX_MAP } from "./constants";
import { getCurrentWeather } from "./getCurrentWeather";

export function showCurrentLocationWeather() {
  navigator.geolocation.getCurrentPosition(async function (position) {
    let userLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };

    document.querySelector(".map").innerHTML =
      `<img class="map-img" src="https://static-maps.yandex.ru/v1?ll=${userLocation.lng},${userLocation.lat}&lang=en_RU&size=200,200&z=10&apikey=${API_KEY_YANDEX_MAP}">`;

    let currentCityWeather = await getCurrentWeather(userLocation);
    document.querySelector(".info").innerHTML = `
            <img src ='http://openweathermap.org/img/wn/${currentCityWeather.weather[0].icon}@2x.png'>
            <h2>${currentCityWeather?.main?.temp}°C </h2>            
            <span>${currentCityWeather?.name}</span>
    `;
  });
}
