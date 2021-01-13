import { movies } from "./moviesDatabase.js";
document.getElementById("nieuwste").addEventListener("click", eventHandler);
document.getElementById("avengers").addEventListener("click", eventHandler);
document.getElementById("x-men").addEventListener("click", eventHandler);
document.getElementById("princess").addEventListener("click", eventHandler);
document.getElementById("batman").addEventListener("click", eventHandler);

function eventHandler(event) {
  console.log(event.target.value);
  console.log(movies[0].Title);
}
