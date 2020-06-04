"use strict";

const body = document.body;
const h1 = document.querySelector("#principal");
const h2 = document.querySelector("#saludo");
const main = document.querySelector("main");

function formato(numero) {
  if (numero >= 10) {
    return numero;
  } else {
    return "0" + numero;
  }
}

function reloj() {
  const ahora = new Date();

  h1.textContent = `${formato(ahora.getHours())}:${formato(
    ahora.getMinutes()
  )}:${formato(ahora.getSeconds())}`;

  h2.textContent = saludo(ahora.getHours());

  alarma(ahora);

  let momentoDia;

  if (ahora.getHours() < 6 || ahora.getHours() >= 20) {
    momentoDia = "noche";
  } else if (ahora.getHours() < 12) {
    momentoDia = "manana";
  } else {
    momentoDia = "tarde";
  }

  body.setAttribute("class", momentoDia);
}

function saludo(hora) {
  if (hora < 6 || hora >= 20) {
    return "Buenas noches";
  } else if (hora < 12) {
    return "Buenos dias";
  } else {
    return "Buenas tardes";
  }
}

function alarma(hora) {
  if (
    Number(main.getAttribute("data-hour")) ===
      Number(formato(hora.getHours())) &&
    Number(main.getAttribute("data-minute")) ===
      Number(formato(hora.getMinutes())) &&
    Number(main.getAttribute("data-second")) ===
      Number(formato(hora.getSeconds()))
  ) {
    clearInterval(interval);
    body.style.backgroundImage = "linear-gradient(yellow, yellow)";
    h2.textContent = "RING RING RING";
  }
}

reloj();
const interval = setInterval(reloj, 1000);
