import sumar from "./sumador";

const cant = document.querySelector("#cant-items");
const form = document.querySelector("#items-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //const firstNumber = Number.parseInt(cant.value);
  
  div.innerHTML = "<p> Cantidad de items: " + cant.value + "</p>";
});
