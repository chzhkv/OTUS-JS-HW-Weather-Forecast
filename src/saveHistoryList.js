export function saveHistoryList(items) {
  localStorage.setItem("list", JSON.stringify(items));
}
