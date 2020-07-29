<template>
  <div class="home">
    <vue-headful title="Hack a Market | Home" />
    <h1 id="title">Hack a Market</h1>
    <h2>¡Bienvenido/a!</h2>
    <!-- Texto con información de la aplicación -->
    <ul id="list">
      <li>
        En
        <b>About</b> encontrarás información sobre este proyecto y sobre mí.
      </li>
      <li>
        En
        <b>Productos</b> podrás ver la lista de nuestros artículos.
      </li>
      <li>
        Para ver nuestros clientes solo tienes que ir a
        <b>Clientes</b>.
      </li>
      <li>
        Y por último, para registrar un nuevo cliente tienes que ir a
        <b>Registrar</b>.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Advent+Pro:wght@400;500;600&family=Montserrat:wght@400;500;600&display=swap");

html {
  --font: "Montserrat", sans-serif;
  --title-font: "Advent Pro", sans-serif;
}

.home {
  background-image: url("../assets/office.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 3rem;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 0.6);
  background-blend-mode: lighten;
  animation-name: aparicion;
  animation-duration: 1s;
}

@keyframes aparicion {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.home #title {
  font-family: "Advent Pro", sans-serif;
  font-weight: 600;
  font-size: 3.25rem;
  color: black;
  padding-top: 3rem;
}

#list {
  margin: 2rem 0.5rem;
  list-style: square;
  background-color: #fbe6d4;
  border: 3px solid #ffa931;
  border-radius: 25px;
  font-weight: 400;
  font-size: 0.9rem;
  text-align: left;
  transition: all 0.5s;
  box-sizing: content-box;
}

#list:hover {
  background-color: #ffa931;
  border: 3px solid #fbe6d4;
  transform: scale(1.1, 1.1);
}

li {
  padding: 0.5rem;
}

h2 {
  color: #ffa931;
}

@media (min-width: 700px) {
  .home #title {
    font-size: 6rem;
    padding-top: 5rem;
  }
  h2 {
    font-size: 3rem;
  }
  #list {
    width: 50vw;
    font-size: 1.2rem;
    margin: 9rem auto;
  }
  li {
    padding: 1rem;
  }
}
</style>
