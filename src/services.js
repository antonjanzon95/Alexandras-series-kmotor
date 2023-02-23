export async function getSeries(searchTerm) {
    fetch('http://www.omdbapi.com/?apikey=2c325926&type=series&s=' + searchTerm)
    .then((response) => response.json())
    .then((data) => data);
  }

  