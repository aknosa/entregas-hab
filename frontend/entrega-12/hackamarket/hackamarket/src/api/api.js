const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

//COSAS QUE USA LA APP
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//DATOS DE CONEXIÓN DE LA BBDD
const connection = mysql.createConnection({
  host: "localhost",
  user: "andres",
  password: "andres",
  database: "bbdd_notas",
});

//HACIENDO CONEXIÓN A LA BASE DE DATOS
connection.connect((error) => {
  if (error) throw error;
  console.log("Database UP");
});

//PUERTO DE CONEXIÓN DEL SERVICIO
const PORT = 3050;

//CONEXIÓN DEL SERVICIO
app.listen(PORT, () => console.log("API UP"));

//AÑADIENDO CLIENTES A LA BASE DE DATOS
app.post("/register", (req, res) => {
  const sql = "INSERT INTO listaclientes SET ?";

  const nuevoCliente = {
    nombre: req.body.nombre,
    usuario: req.body.usuario,
    email: req.body.email,
    password: req.body.password,
    foto: req.body.foto,
  };

  connection.query(sql, nuevoCliente, (error) => {
    if (error) throw error;
    console.log("Cliente creado con éxito.");
  });
});

//MOSTRANDO TODOS LOS CLIENTES
app.get("/clients", (req, res) => {
  const sql = "SELECT * FROM listaclientes";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      console.log("No hay clientes que mostrar.");
    }
  });
});

//ACTUALIZANDO CLIENTE EN LA BBDD
app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const nombre = req.body.nombre;
  const usuario = req.body.usuario;
  const email = req.body.email;
  const password = req.body.password;
  const foto = req.body.foto;

  const sql = `UPDATE listaclientes SET nombre='${nombre}', usuario='${usuario}', email='${email}', password='${password}', foto='${foto}' WHERE id='${id}'`;

  connection.query(sql, (error) => {
    if (error) throw error;
    console.log("Cliente actualizado con éxito.");
  });
});

//BORRANDO CLIENTE DE LA BBDD
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM listaclientes WHERE id=${id}`;

  connection.query(sql, (error) => {
    if (error) throw error;
    console.log("Cliente borrado.");
  });
});

//MOSTRANDO PRODUCTOS
app.get("/products", (req, res) => {
  const sql = "SELECT * FROM listaproductos";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      console.log("No hay productos que mostrar.");
    }
  });
});
