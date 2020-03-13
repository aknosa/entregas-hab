"use strict";

function aleatorio(minimo, maximo) {
  return Math.round(Math.random() * (maximo - minimo) + minimo);
}

function tirarDado() {
  return prompt("¿Quieres tirar el dado? y/n");
}

function dado() {
  let suma = 0;
  let dado = 0;
  for (let i = 1; suma < 50; i++) {
    const respuesta = tirarDado();
    if (respuesta === "y") {
      dado = aleatorio(1, 6);
      suma = suma + dado;
      console.log(
        `Tirada ${i}: Has sacado un ${dado} y llevas ${suma} puntos.`
      );
    } else if (respuesta === "n") {
      break;
    }
  }
  console.log(
    `Ha salido un ${dado} y has conseguido un total de ${suma} puntos.`
  );
}

dado();
