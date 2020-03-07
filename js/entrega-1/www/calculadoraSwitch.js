"use strict";

let valor1 = +prompt("Introduzca el primer valor");
let operador = prompt("Introduzca el operador");
let valor2 = +prompt("Introduzca el segundo valor");

switch (operador) {
  case "+":
    console.log(`El resultado es ${valor1 + valor2}.`);
    break;
  case "-":
    console.log(`El resultado es ${valor1 - valor2}.`);
    break;
  case "*":
    console.log(`El resultado es ${valor1 * valor2}.`);
    break;
  case "/":
    console.log(`El resultado es ${valor1 / valor2}.`);
    break;
  case "**":
    console.log(`El resultado es ${valor1 ** valor2}.`);
    break;
  default:
    console.warn("No se ha seleccionado un tipo de operación correcta.");
}
