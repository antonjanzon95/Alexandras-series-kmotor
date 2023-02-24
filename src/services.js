export async function getSeries(searchTerm) {
  const apiKey = "2c325926"
  return fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&type=series&s=` + searchTerm
  )
    .then((response) => response.json())
    .then((data) => data.Search)
    .catch((error) => {
      console.error("Error: ", error);
    });
}
