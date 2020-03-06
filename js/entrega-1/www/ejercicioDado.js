function aleatorio(minimo, maximo) {
  return Math.round(Math.random() * (maximo - minimo) + minimo);
}
let suma = 0;
let dado = 0;

for (i = 1; suma < 50; i++) {
  dado = aleatorio(1, 6);
  suma = suma + dado;
  console.log(`Tirada ${i}: Has sacado un ${dado} y llevas ${suma} puntos.`);
}

console.log(`Has conseguido un total de ${suma} puntos.`);
