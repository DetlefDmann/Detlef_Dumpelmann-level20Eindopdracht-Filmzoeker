import { movies } from "./moviesDatabase.js";

let selectedMovies = [];

function eventHandler(event) {
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
}

document.getElementById("nieuwste").addEventListener("click", eventHandler);
document.getElementById("avengers").addEventListener("click", eventHandler);
document.getElementById("x-men").addEventListener("click", eventHandler);
document.getElementById("princess").addEventListener("click", eventHandler);
document.getElementById("batman").addEventListener("click", eventHandler);
document.getElementById("textsearch").addEventListener("input", eventHandler);
