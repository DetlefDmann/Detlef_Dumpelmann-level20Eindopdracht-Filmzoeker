import { movies } from "./moviesDatabase.js";

let selectedMovies = [];

const eventHandler = (event) => {
  console.log(event.target.value);
  if (event.target.value == "nieuwste") {
    console.log("Je wilt de nieuwste films?");
    selectedMovies = movies.filter((movie) => {
      if (movie.Year >= 2014) {
        return movie;
      }
    });
  } else {
    console.log(event.target.value);
    selectedMovies = movies.filter((movie) => {
      if (movie.Title.includes(event.target.value)) {
        return movie;
      }
    });
  }
  console.log(selectedMovies);
  moviePlacer();
};

document.getElementById("nieuwste").addEventListener("click", eventHandler);
document.getElementById("avengers").addEventListener("click", eventHandler);
document.getElementById("x-men").addEventListener("click", eventHandler);
document.getElementById("princess").addEventListener("click", eventHandler);
document.getElementById("batman").addEventListener("click", eventHandler);
document.getElementById("textsearch").addEventListener("input", eventHandler);

// nu een component maken die de inhoud van het array omzet in elementen die clickable zijn

const moviePlacer = () => {
  selectedMovies.map((movie) => {
    let linker = document.createElement("a");
    linker.setAttribute("href", `https://www.imdb.com/title/${movie.imdbID}`);
    linker.setAttribute("class", "movie__link");
    let temp = document.createElement("img");
    temp.setAttribute("src", movie.Poster);
    temp.setAttribute("id", movie.imdbID);
    temp.setAttribute("class", "movie__poster");
    temp.setAttribute("alt", `Poster for ${movie.Title}`);
    linker.appendChild(temp);
    document.getElementById("movie__field").appendChild(linker);
  });
};
