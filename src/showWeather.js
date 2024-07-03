export function showWeather(el, weatherInfo) {
  el.innerHTML = `
            <div>City: ${weatherInfo.name}</div>
            <div>Temperature: ${weatherInfo?.main?.temp} </div>
            <div>Description: ${weatherInfo?.weather[0]?.description} </div>
            <img src ='http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png'>
    `;
}
