import "./index.css";
import {getSeries} from "./services"

const createHtmlSeries = async ()=>{
  const series = await getSeries("married at first sight");
  
  const seriesContainer = document.querySelector("#results");
  const createSerieContainer = document.createElement("div");
  createSerieContainer.innerHTML=`
  <img class="serie-poster" src="${series[0].Poster}" alt="serie poster">
  <h2 class="serie-title">${series[0].Title}</h2>
  <p class="serie-year">${series[0].Year}</p>
  <p class="serie-rating">${series[0].Type}</p>
  <p class="serie-genres">${series[0].Genre}</p>
  `;
  seriesContainer.appendChild(createSerieContainer)
  }
createHtmlSeries()