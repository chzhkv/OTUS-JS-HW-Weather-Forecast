export function showWeather(el, weatherInfo) {
  el.innerHTML = `
            <img src ='http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png'>
            <h2>${Math.round(weatherInfo?.main?.temp)}°C </h2>            
            <span class="city-name">${weatherInfo.name}</span>
    `;
}
