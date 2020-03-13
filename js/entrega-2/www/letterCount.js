"use strict";

function eligeLaPalabraLarga(a, b) {
  if (a.length >= b.length) return a;
  else return b;
}

function letterCount(frase) {
  let arrayDePalabras = frase.split(" ");

  let mayor = arrayDePalabras[0];
  for (const palabra of arrayDePalabras) {
    mayor = eligeLaPalabraLarga(mayor, palabra);
  }
  return mayor;
}

console.log(letterCount("Hoy es un día estupendo y fantástico"));
