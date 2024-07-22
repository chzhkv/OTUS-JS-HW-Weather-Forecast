export function drawHistoryList(el, items) {
  el.innerHTML = `<ol class="history-list">
                        ${items.map((el) => `<li class="history-list-el">${el}</li>`).join("")}
                    </ol>`;
}
