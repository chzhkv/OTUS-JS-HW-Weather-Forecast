import { sum } from "./sum.js";
import "./styles.css";

document.querySelector(".app").innerHTML = `<h2>${sum(2, 23)}</h2>`;
