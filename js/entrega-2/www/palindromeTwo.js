"use strict";

function palindromo(frase) {
  let frase2 = frase.toLowerCase();

  let grupo = frase2.split("");

  let grupo2 = grupo.filter(letra => letra !== " ");

  if (grupo2.length % 2 === 0) {
    for (let i = 0; i < grupo2.length / 2; i++) {
      if (grupo2[i] === grupo2[grupo2.length - 1 - i]) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    for (let i = 0; i < (grupo2.length - 1) / 2; i++) {
      if (grupo2[i] === grupo2[grupo2.length - 1 - i]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

palindromo("Arriba la birra");
