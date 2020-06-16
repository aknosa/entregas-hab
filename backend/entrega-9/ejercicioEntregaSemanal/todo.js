"use strict";

const fs = require("fs").promises;
const path = require("path");
const minimist = require("minimist");
const {
  addTodo,
  markAsDone,
  markAsUnDone,
  listTodos,
  cleanTodos,
} = require("./lib/actions");

async function todoList() {
  const args = minimist(process.argv.slice(2));

  const { _, priority, list, done, undone, clean } = args;

  if (list) {
    await listTodos();
    process.exit();
  }

  if (done) {
    // Marcar el todo número "done" como hecho
    await markAsDone(done);
    process.exit();
  }

  if (undone) {
    // Marcar el todo número "undone" como no hecho
    await markAsUnDone(undone);
    process.exit();
  }

  if (clean) {
    // Borro de la lista todos hechos
    await cleanTodos();
    console.log("Borro los todos ya HECHOS.");
    process.exit();
  }

  const newTodo = _.join(" ");

  if (newTodo.length > 0) {
    // Añadir newTodo a la lista
    await addTodo({
      text: newTodo,
      priority: priority ? true : false,
      done: false,
      date: new Date(),
    });

    process.exit();
  } else {
    console.log("Nada que hacer.");
  }
}

todoList();
