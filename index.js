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
    selectedMovies = movies.filter((movie) => {
      if (movie.Title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return movie;
      }
    });
  }
  moviePlacer();
};

const addEventListeners = () => {
  let buttons = Array.from(document.getElementsByName("select"));
  let textInput = buttons.filter((i) => i.type == "text");
  buttons.map((b) => b.addEventListener("click", eventHandler));
  textInput.map((t) => t.addEventListener("input", eventHandler));
  textInput.map((t) => t.addEventListener("click", deselector));
};

const deselector = () =>
  Array.from(document.getElementsByName("select"))
    .filter((i) => i.type == "radio")
    .map((r) => (r.checked = false));

addEventListeners();

// nu een component maken die de inhoud van het array omzet in elementen die clickable zijn

const moviePlacer = () => {
  movieClearer();
  selectedMovies.map((movie) => {
    let lister = document.createElement("li");
    let linker = document.createElement("a");
    linker.setAttribute("href", `https://www.imdb.com/title/${movie.imdbID}`);
    linker.setAttribute("class", "movie__link");
    let temp = document.createElement("img");
    temp.setAttribute("src", movie.Poster);
    temp.setAttribute("id", movie.imdbID);
    temp.setAttribute("class", "movie__poster");
    temp.setAttribute("alt", `Poster for ${movie.Title}`);
    linker.appendChild(temp);
    document.getElementById("movie__field").appendChild(lister).appendChild(linker);
  });
};

//er is nog wel een functie nodig die de vorige selectie weghaald voordat de nieuwe geplaatst word.

const movieClearer = () => {
  let parent = document.getElementById("movie__field");
  let count = parent.childNodes.length;
  for (let i = 0; i < count; i++) {
    parent.removeChild(parent.childNodes[0]);
  }
};

// initiele status : voeg alle films toe (ongefilterd)

selectedMovies = movies;
moviePlacer();
