import "./index.css";

const seriesContainer = document.querySelector("#results");
const createSerieContainer = document.createElement("div");
createSerieContainer.innerHTML=`
<img class="serie-poster" src="" alt="serie poster">
<h2 class="serie-title"></h2>
<p class="serie-year">year</p>
<p class="serie-rating">rating</p>
<p class="serie-genres">genres</p>
`;
seriesContainer.appendChild(createSerieContainer)

console.log(createSerieContainer)