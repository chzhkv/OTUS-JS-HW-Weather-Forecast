import "./styles.css";
import { showSearchingWeather } from "./showSearchingWeather";
import { showCurrentLocationWeather } from "./showCurrentLocationWeather";
import { drawHistoryElWeather } from "./drawHistoryElWeather";

document.querySelector(".app").innerHTML = `    
    <div class="wrapper">
          <div class="main-wrapper">
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
          <div class="history-wrapper">
            <h3>History</h3>
            <hr class="solid" />
            <div id="list"></div>
          </div>
        </div>
`;

showCurrentLocationWeather();
showSearchingWeather();
drawHistoryElWeather();
