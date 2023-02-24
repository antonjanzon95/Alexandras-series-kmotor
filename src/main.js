import "./index.css";
import movie from "./models/Movie";
import { getSeries } from "./services";

const addSearchText = () => {
  const input = document.querySelector("#movieSearch")
  const searchTerm = input.value
  createHtmlSeries(searchTerm);

}

const init = () =>{
  const button = document.querySelector("#search");
  button.addEventListener("click", (addSearchText));
}


const createAnimation = () => {
  const heading = document.querySelector("h1");
  const button = document.querySelector("#search");
  const searchText = document.querySelector("#movieSearch");

  gsap.to(heading, { y: "-20px", yoyo: true, repeat: -1, duration: 0.5 });
  gsap.fromTo(
    button,
    { x: "-100px" },
    { x: "100px", yoyo: true, repeat: -1, duration: 0.3 }
  );
  gsap.to(searchText, { scale: 0.2, yoyo: true, repeat: -1, duration: 0.5 });
}

createAnimation();

const createHtmlSeries = async (searchString) => {
  const seriesContainer = document.querySelector("#results");
  try{
  const series = await getSeries(searchString);
  for (let i=0; i<series.length; i++){
    const createSerieContainer = document.createElement("div");

    createSerieContainer.innerHTML = `
    <img class="serie-poster" src="${series[i].Poster}" alt="serie poster">
    <h2 class="serie-title">${series[i].Title}</h2>
    <p class="serie-year">${series[i].Year}</p>
    <p class="serie-type">${series[i].Type}</p>
    `;
    seriesContainer.appendChild(createSerieContainer);
    const noMessage = document.querySelector("#no-result");
    noMessage.innerHTML = "";
  }
}
  catch {
    displayNoResult(seriesContainer);
  }
};
const displayNoResult = (container) => {
  const noMessage = document.querySelector("#no-result");
  noMessage.innerHTML = "";
  noMessage.innerHTML = "Inga sökresultat att visa";

  container.appendChild(noMessage);
};
init();
