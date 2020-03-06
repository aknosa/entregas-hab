"use strict";

let equipoMaria = [62, 34, 55];
let equipoPaula = [35, 60, 59];
let equipoRebeca = [40, 39, 63];

function media(equipo) {
  let sumaEquipo = 0;

  for (let x = 0; x < equipo.length; x++) {
    sumaEquipo += equipo[x];
  }
  return sumaEquipo / equipo.length;
}

if (
  media(equipoMaria) > media(equipoPaula) &&
  media(equipoMaria) > media(equipoRebeca)
) {
  console.log(
    `El equipo de María tiene la mejor media con ${media(
      equipoMaria
    )} puntos por partido.`
  );
} else if (
  media(equipoPaula) > media(equipoMaria) &&
  media(equipoPaula) > media(equipoRebeca)
) {
  console.log(
    `El equipo de Paula tiene la mejor media con ${media(
      equipoPaula
    )} puntos por partido.`
  );
} else {
  console.log(
    `El equipo de Rebeca tiene la mejor media con ${media(
      equipoRebeca
    )} puntos por partido.`
  );
}
