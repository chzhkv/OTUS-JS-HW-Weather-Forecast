export async function getWeather(cityName) {
  const appId = "06ff609e1920bf484f9364dc64081fc2";
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${appId}`,
  );
  const weather = await data.json();
  return weather;
}
