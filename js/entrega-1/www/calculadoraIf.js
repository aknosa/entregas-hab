"use strict";

let valor1 = +prompt("Introduzca el primer valor", "");
let operador = prompt("Introduzca el operador", "");
let valor2 = +prompt("Introduzca el segundo valor", "");

if (operador === "*" && !isNaN(valor * valor2)) {
  console.log(`El resultado es ${valor1 * valor2}.`);
} else if (operador === "+" && !isNaN(valor1 + valor2)) {
  console.log(`El resultado es ${valor1 + valor2}.`);
} else if (operador === "-" && !isNaN(valor1 - valor2)) {
  console.log(`El resultado es ${valor1 - valor2}.`);
} else if (operador === "/" && !isNaN(valor1 / valor2)) {
  console.log(`El resultado es ${valor1 / valor2}.`);
} else if (operador === "**" && !isNaN(valor1 ** valor2)) {
  console.log(`El resultado es ${valor1 ** valor2}.`);
} else {
  console.error("No se ha seleccionado un tipo de operación correcta.");
}
