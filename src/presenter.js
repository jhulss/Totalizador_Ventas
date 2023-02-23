import sumar from "./sumador";

const cant = document.querySelector("#cant-num");
const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

    const cantNum = Number.parseInt(cant.value);
    div.innerHTML = "<p> Cantidad: " + cantNum.valueOf(cant) + "</p>";
});
