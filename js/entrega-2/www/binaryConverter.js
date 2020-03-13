"use strict";

function binaryConverter(numero) {
  let numeroConvertidoString = numero.toPrecision();

  let arrayDelNumero = numeroConvertidoString.split("");

  let arrayInvertido = arrayDelNumero.reverse();

  function elevar(valor, index) {
    return +valor * 2 ** index;
  }

  let elevado = arrayInvertido.map(elevar);

  function sumarArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma = suma + array[i];
    }
    return suma;
  }

  return sumarArray(elevado);
}

binaryConverter(10100);
