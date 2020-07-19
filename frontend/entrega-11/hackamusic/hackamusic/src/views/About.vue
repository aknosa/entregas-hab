<template>
  <div class="about">
    <div id="intro">
      <h2>About</h2>
      <p>
        👉 Mi nombre es Andrés, estoy estudiando programación y para el módulo
        de Frontend he hecho el proyecto Hack a Music. Para ello tuve que hacer
        lo siguiente:
      </p>
    </div>
    <div id="list">
      <ol>
        <li>
          Utilicé la API de last.fm. Tuve que registrarme para recibir los datos
          necesarios para usar la API.
        </li>
        <li>
          Para el desarrollo de la página utilicé el framework de JavaScript,
          Vuejs. La página consta de 5 vistas y 6 componentes.
        </li>
        <li>Para hacer llamadas a la API descargué de la librería: AXIOS.</li>
        <li>
          El título de la pestaña de cada página lo configuré con Vue-Headful.
        </li>
        <li>
          Antes de cargar los datos de la API, muestro un ícono de carga que
          tengo gracias a CSS-Spinner.
        </li>
        <li>
          La notificación del botón 'LIKE' que salta, fue hecha con SweetAlert2.
        </li>
      </ol>
    </div>
    <div id="like">
      <!-- Al clickar en el botón, añade al contador un +1 y activa la alerta -->
      <button v-on:click="counter += 1" @click="sweetAlertOn()">LIKE</button>
      <p>{{ counter }} 👍</p>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    // Utilizo sweetalert2 para mostrar el mensaje de OK al pulsar el botón de LIKE
    sweetAlertOn() {
      Swal.fire({
        title: "¡Gracias por el LIKE!",
        icon: "success",
        confirmButtonText: "OK",
      });
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin: 1rem;
}

#intro p {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 2.5rem;
}

ol {
  border: 3px inset #1b262c;
  background-color: whitesmoke;
  color: #3282b8;
  border-radius: 25px;
  margin: 0 1rem;
}

li {
  padding: 0.25rem;
}

#like {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2rem;
  font-size: 1.25rem;
}

button:focus {
  outline: none;
}

button {
  display: inline;
  padding: 0.3em 1.2em;
  margin: 0 0.1em 0.1em 0;
  border: 5px solid rgba(255, 255, 255, 0);
  background: #184d47;
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  color: #eebb4d;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
}

button:hover {
  border-color: #eebb4d;
}

@media (min-width: 600px) {
  h2 {
    font-size: 2rem;
  }
  #list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  ol {
    width: 400px;
  }
  li {
    padding: 0.5rem;
  }
}

@media (min-width: 850px) {
  h2 {
    font-size: 3rem;
  }
  #intro p {
    margin-top: 3rem;
  }
  #like {
    justify-content: space-evenly;
  }
}

@media (min-width: 1000px) {
  ol {
    width: 500px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 3rem;
  }
  #intro p {
    font-size: 1.4rem;
  }
  li {
    font-size: 1.25rem;
  }
  #like {
    font-size: 1.75rem;
    margin-bottom: 3rem;
  }
  button {
    width: 8rem;
    height: 3rem;
  }
}

@media (min-width: 1500px) {
  #intro p {
    text-align: center;
  }
}
</style>
