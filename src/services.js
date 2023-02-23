export async function getSeries(searchCategory) {

    switch (searchCategory) { 

        case 'RealityTv':
            fetch('http://www.omdbapi.com/?apikey=2c325926&type=series&t=' + searchTerm)
            .then((response) => response.json())
            .then((data) => data);

            break;
        case 'Romans':
            break;
        case 'Action':
            break;
        

        
   const selectedMovie = fetch('http://www.omdbapi.com/?apikey=2c325926&type=series&t=' + searchTerm)
    .then((response) => response.json())
    .then((data) => data);

    const selectedMovieCatagory = selectedMovie.

   fetch('http://www.omdbapi.com/?apikey=2c325926&type=series&s=' + searchTerm)
    .then((response) => response.json())
    .then((data) => data);



  }
}
