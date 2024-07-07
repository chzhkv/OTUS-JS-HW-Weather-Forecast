import "./styles.css";
import { showSearchingWeather } from "./showSearchingWeather";
import { showCurrentLocationWeather } from "./showCurrentLocationWeather";

document.querySelector(".app").innerHTML = `
    <h1 style="    
    text-align: center;
    font-size: 3vw;
    margin-bottom: 20px;
    ">
        Weather Forecast
    </h1>
    
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

showCurrentLocationWeather();
showSearchingWeather();
