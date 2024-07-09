export function drawHistoryElWeather() {
  const historyListElement = document.querySelector(".history-list-el");

  if (historyListElement !== null) {
    historyListElement.addEventListener("click", (ev) => {
      ev.preventDefault();
      console.log(historyListElement.innerText);
    });
  }
}
