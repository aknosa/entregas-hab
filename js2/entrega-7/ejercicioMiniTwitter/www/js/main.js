"use strict";

const message = document.querySelector("body main form textarea");
const section = document.querySelector(".messages");
const button = document.querySelector("body main form button");

function format(number) {
  if (number >= 10) return number;
  return `0${number}`;
}

button.onclick = function () {
  if (message.value === "" || message.value.length > 250) {
    window.alert(
      "Debes escribir algo primero y que no tenga más de 250 caracteres."
    );
  } else {
    const div = document.createElement("div");
    section.prepend(div);

    const moment = new Date();

    const p = document.createElement("p");
    p.textContent = message.value;
    div.append(p);

    const date = document.createElement("p");
    date.textContent = `${moment.getDate()}/${
      moment.getMonth() + 1
    }/${moment.getFullYear()} a las ${format(moment.getHours())}:${format(
      moment.getMinutes()
    )}`;

    div.append(date);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Borrar";
    div.append(deleteButton);

    deleteButton.onclick = function () {
      deleteButton.parentElement.remove();
    };
  }
};
