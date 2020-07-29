<template>
  <div>
    <div id="nav">
      <!-- Los distintos enlaces de la barra de navegación -->
      <router-link :to="{name: 'Home'}">Home</router-link>
      <router-link :to="{name: 'About'}">About</router-link>
      <router-link :to="{name: 'ProductsPage'}">Productos</router-link>
      <router-link :to="{name: 'ClientsPage'}">Clientes</router-link>
      <router-link :to="{name: 'RegisterClient'}">Registrar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCustom"
};
</script>

<style scoped>
#nav {
  padding: 15px;
  background-color: #838383;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  line-height: 2;
  z-index: 9999;
}

#nav a {
  font-weight: bold;
  display: block;
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
}

#nav a:hover {
  color: #fecb89;
  transition: color 0.5s;
}

#nav a.router-link-exact-active {
  color: #ffa931;
  text-decoration: underline;
}

@media (min-width: 600px) {
  #nav a {
    font-size: 1.25rem;
  }
}
</style>