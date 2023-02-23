import cargarEstados from "./lista";
import calcularPrecioNeto from "./precioNeto";
import buscarEstado from "./estado";
import buscarDescuento from "./tipoDescuento";
import calcularDescuento from "./calcularDescuento";

var precioNeto=0;
var impuestodiv =0;
var descuentoDiv=0;
var cantidadItems = 0;

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const firstMul = document.querySelector("#primer-numeroMulti");
const formMul =document.querySelector("#multiplicar-form");
const divMul= document.querySelector("#resultado-divMulti");

const resultadoNetoForm = document.querySelector("#precioNeto-form");
const divResNeto = document.querySelector("#resultado-divNeto");

const impuestoForm =document.querySelector("#impuesto-form");
const estadoImpuesto= document.querySelector("#impuesto-estado");
const divImpuesto= document.querySelector("#resultado-divImpues");

const descuentoForm = document.querySelector("#descuento-form");
const divDescuento= document.querySelector("#resultado-divDescuen");

const totalizarForm = document.querySelector("#total-form");
const totalizarDiv = document.querySelector("#resultado-divTotal");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  cantidadItems =firstNumber;

  div.innerHTML = "<p>" +"Cantidad de Items: "+firstNumber + "</p>";
});

formMul.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumberMulti = Number.parseInt(firstMul.value);

  divMul.innerHTML = "<p>" +"Precio por item: "+ firstNumberMulti + "</p>";
});

resultadoNetoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantItems = Number.parseInt(first.value);
  const precioUnitario= Number.parseInt(firstMul.value);
  precioNeto=calcularPrecioNeto(cantItems,precioUnitario);

  divResNeto.innerHTML = "<p>" +"Precio neto (unitario x cantidad de Items): "+ precioNeto + "</p>";
});

impuestoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  var impu=[];
  var impuesto = new Object();
  impu= cargarEstados();
  const impuestoEstado = estadoImpuesto.value;
  
  
  impuesto= buscarEstado(impu,impuestoEstado);
  console.log(impuesto);
  impuestodiv=calcularImpuesto(precioNeto,impuesto.impu);

  divImpuesto.innerHTML = "<p>" +"El impuesto para " + impuesto.name +" %:"+impuesto.imp +" es: "+impuestodiv +"</p>";
});

descuentoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  var descuento=0;
  descuento= buscarDescuento(cantidadItems);
  console.log(descuento);
  descuentoDiv=calcularDescuento(precioNeto,descuento);

  divDescuento.innerHTML = "<p>" +"El Descuento para " + cantidadItems +" items es: "+descuento +"%"+"</p>";
});

totalizarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  var respFinal=0;
  respFinal = precioNeto+impuestodiv-descuentoDiv;

  totalizarDiv.innerHTML = "<p>" +"Precio total(descuento e impuesto): "+respFinal + "</p>";
});
