import { movies } from "./moviesDatabase.js";

let selectedMovies = [];

const filterHandler = (event) => {
  console.log(event.target.value);
  if (event.target.value == "nieuwste") {
    console.log("Je wilt de nieuwste films?");
    selectedMovies = movies.filter((movie) => {
      if (movie.Year >= 2014) {
        return movie;
      }
    });
  } else {
    selectedMovies = movies.filter((movie) => {
      if (movie.Title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return movie;
      }
    });
  }
  moviePlacer();
};

const addEventListeners = () => {
  const inputElements = Array.from(document.getElementsByName("select"));
  const textInputs = inputElements.filter((i) => i.type == "text");
  inputElements.map((b) => b.addEventListener("click", filterHandler));
  textInputs.map((t) => t.addEventListener("input", filterHandler));
  textInputs.map((t) => t.addEventListener("click", uncheckRadioButtons));
};

const uncheckRadioButtons = () =>
  Array.from(document.getElementsByName("select"))
    .filter((i) => i.type == "radio")
    .map((r) => (r.checked = false));

addEventListeners();

// nu een component maken die de inhoud van het array omzet in elementen die clickable zijn

const moviePlacer = () => {
  movieClearer();
  selectedMovies.map((movie) => {
    const movielistItem = document.createElement("li");
    const movielink = document.createElement("a");
    movielink.setAttribute("href", `https://www.imdb.com/title/${movie.imdbID}`);
    movielink.setAttribute("class", "movie__link");
    const poster = document.createElement("img");
    poster.setAttribute("src", movie.Poster);
    poster.setAttribute("id", movie.imdbID);
    poster.setAttribute("class", "movie__poster");
    poster.setAttribute("alt", `Poster for ${movie.Title}`);
    movielink.appendChild(poster);
    document.getElementById("movie__field").appendChild(movielistItem).appendChild(movielink);
  });
};

//er is nog wel een functie nodig die de vorige selectie weghaald voordat de nieuwe geplaatst word.

const movieClearer = () => {
  const parent = document.getElementById("movie__field");
  const count = parent.childNodes.length;
  for (let i = 0; i < count; i++) {
    parent.removeChild(parent.childNodes[0]);
  }
};

// initiele status : voeg alle films toe (ongefilterd)

selectedMovies = movies;
moviePlacer();
