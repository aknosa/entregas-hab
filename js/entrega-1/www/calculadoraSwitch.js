"use strict";

let valor1;
let operador;
let valor2;

valor1 = prompt("Introduzca el primer valor", "");
operador = prompt("Introduzca el operador", "");
valor2 = prompt("Introduzca el segundo valor", "");

switch (operador) {
  case "+" && !isNaN(valor1 + valor2):
    console.log(`El resultado es ${+valor1 + +valor2}.`);
    break;
  case "-" && !isNaN(valor1 - valor2):
    console.log(`El resultado es ${valor1 - valor2}.`);
    break;
  case "*" && !isNaN(valor * valor2):
    console.log(`El resultado es ${valor1 * valor2}.`);
    break;
  case "/" && !isNaN(valor1 / valor2):
    console.log(`El resultado es ${valor1 / valor2}.`);
    break;
  case "**" && !isNaN(valor1 ** valor2):
    console.log(`El resultado es ${valor1 ** valor2}.`);
    break;
  default:
    console.warn("No se ha seleccionado un tipo de operación correcta.");
}
