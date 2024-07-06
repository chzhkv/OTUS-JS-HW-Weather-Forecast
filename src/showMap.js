import { API_KEY_YANDEX_MAP } from "./constants";

export function showMap(el, weatherInfo) {
  el.innerHTML = `
            <img src="https://static-maps.yandex.ru/v1?ll=${weatherInfo?.coord.lon},${weatherInfo?.coord.lat}&lang=en_RU&size=200,200&z=10&apikey=${API_KEY_YANDEX_MAP}">
`;
}
