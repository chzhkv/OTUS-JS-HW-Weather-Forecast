export function readHistoryList() {
  let data = JSON.parse(localStorage.getItem("list"));
  return data === null ? [] : data;
}
