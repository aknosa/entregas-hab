"use strict";

const fs = require("fs").promises;
const path = require("path");
const chalk = require("chalk");
const os = require("os");
const { formatDistanceToNow } = require("date-fns");
const { es } = require("date-fns/locale");

const todoFile = path.join(os.homedir(), ".tasks.json");

// Lee la lista de todos y devuelve el contenido
async function readTodoList() {
  try {
    let todos;

    try {
      const todoListContent = await fs.readFile(todoFile);
      todos = JSON.parse(todoListContent.toString());
    } catch (error) {
      todos = { todos: [] };
      await fs.writeFile(todoFile, JSON.stringify(todos));
    }

    return todos;
  } catch (error) {
    console.error(error);
  }
}

// Guarda la lista de todos
async function saveTodos(todoList) {
  try {
    await fs.writeFile(todoFile, JSON.stringify(todoList));
  } catch (error) {
    console.error(error.message);
  }
}

async function addTodo({ text, priority, done, date }) {
  // Abrir la lista actual de todos
  const currentList = await readTodoList();
  // Añadir el todo que recibe al principio
  currentList.todos.unshift({
    text,
    priority,
    done,
    date,
  });
  // Guardar la lista actualizada
  await saveTodos(currentList);
}

async function markAsDone(index) {
  // Abrir la lista actual de todos
  const todos = await readTodoList();
  let newIndex = index - 1;
  // Buscar el todo con el index que recibe
  // Modificar el objecto del todo como done: true
  if (todos.todos[newIndex]) {
    todos.todos[newIndex].done = true;
    // Guardar la lista actualizada
    await saveTodos(todos);
    console.log(`Marco el todo ${index} como HECHO.`);
  } else {
    console.error("El todo no existe.");
  }
}

async function markAsUnDone(index) {
  // Abrir la lista actual de todos
  const todos = await readTodoList();
  const todosArray = todos.todos;
  // Buscar el todo con el index que recibe
  let newIndex = index - 1;
  // Modificar el objecto del todo como done: false
  // Guardar la lista actualizada
  if (todos.todos[newIndex]) {
    todos.todos[newIndex].done = false;
    console.log(`Marco el todo ${index} como PENDIENTE.`);
    // Guardar la lista actualizada
    await saveTodos(todos);
  } else {
    console.error("El todo no existe.");
  }
}

async function listTodos() {
  // Abrir la lista actual de todos
  let todos = await readTodoList();
  let todosArray = todos.todos;
  // Imprimir la lista en la consola
  console.log();
  console.log(chalk.blue("Esta es tu lista de cosas que hacer:"));
  for (let todo of todosArray) {
    let todoDate = formatDistanceToNow(new Date(todo.date), { locale: es });
    console.log();
    console.log(
      `${todosArray.indexOf(todo) + 1}. ${todo.text}${
        todo.priority ? chalk.red(" (Prioridad alta)") : ""
      } - ${
        todo.done ? chalk.green("(Hecho)") : "(Pendiente)"
      } - Añadido hace ${todoDate}.`
    );
    console.log();
  }
}

async function cleanTodos() {
  // Abrir la lista actual de todos
  const todos = await readTodoList();
  // Filtrar los que están marcados como done: true
  const filteredTodos = todos["todos"].filter((todo) => todo.done === false);
  todos.todos = filteredTodos;
  // Guardar la lista resultante
  await saveTodos(todos);
}

module.exports = {
  addTodo,
  markAsDone,
  markAsUnDone,
  listTodos,
  cleanTodos,
};
