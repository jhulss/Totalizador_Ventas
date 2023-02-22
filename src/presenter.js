import sumar from "./sumador";

const cant = document.querySelector("#cantidad-num");
const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

    div.innerHTML = "<p> Cantidad: " + cant.value + "</p>";
});
