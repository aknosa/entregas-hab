<template>
  <div class="about">
    <vue-headful title="Hack a Market | About" />
    <h1>Sobre mí 👋</h1>
    <!-- CONTENIDO DEL ABOUT -->
    <div id="list">
      <p>
        👨‍💻 Me llamo Andrés, estoy haciendo el bootcamp de Hack a Boss y esta es mi página de
        <b>Hack a Market</b>, que tuve que hacer para el módulo de Frontend. Para ello he necesitado y he hecho lo siguiente:
      </p>
      <ol>
        <li>El proyecto fue realizado con Vue. Consta de 6 vistas y 5 componentes.</li>
        <li>He instalado las dependencias necesarias para poder conectarme con la API y la base de datos. Que son las siguientes: nodemon, axios, cors, body-parser y mysql.</li>
        <li>En mi base de datos he creado las tablas: listaproductos y listaclientes. Que utilizo para insertar y extraer datos que luego usaré para mis páginas.</li>
        <li>
          Para este proyecto fueron necesarios 5 endpoints:
          <ul>
            <li>Un POST para añadir nuevos clientes.</li>
            <li>Un PUT para actualizar los datos del cliente.</li>
            <li>Un DELETE para borrar un cliente.</li>
            <li>Un GET para mostrar todos los clientes en la página de Clientes.</li>
            <li>Y otro GET para mostrar todos los productos en la página de Productos.</li>
          </ul>
        </li>
        <li>Hago uso de Sweetalert para las notificaciones en los botones.</li>
        <li>La aplicación es responsive.</li>
        <li>Usé Vue-Headful para que aparezcan el nombre de cada sección en las pestañas del navegador.</li>
        <li>Utilicé CSS Spinner para los tiempos de carga de las páginas.</li>
      </ol>
    </div>
    <!-- CONTENIDO DEL ABOUT -->
  </div>
</template>

<style scoped>
.about {
  margin-top: 6rem;
}

h1 {
  color: #ffa931;
  font-weight: 400;
  font-size: 1.75rem;
  margin: 2rem auto;
}

#list {
  text-align: left;
  padding-top: 1.75rem;
  padding-bottom: 8rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

#list p {
  margin-bottom: 2rem;
}

li {
  margin: 0.75rem;
}

@media (min-width: 700px) {
  .about {
    margin-top: 10rem;
  }
  h1 {
    font-size: 2.75rem;
    font-weight: 500;
    margin-top: 4rem;
  }
  #list {
    font-weight: 400;
    width: 70%;
    margin: 5rem auto;
    padding: 2rem;
    margin-top: 3rem;
    margin-bottom: 10rem;
    border-bottom: 3px solid #838383;
    border-right: 3px solid #838383;
    box-shadow: 10px 25px 0px rgba(0, 0, 0, 0.5);
  }
}

@media (min-width: 1000px) {
  #list {
    width: 50%;
    font-size: 1.25rem;
  }
}
</style>
