<template>
  <div id="app">
    <menucustom />
    <h1 id="title">Hack a Music</h1>
    <router-view />
    <footercustom />
  </div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "App",
  components: {
    footercustom,
    menucustom,
  },
};
</script>

<style>
/* Importo una fuente de Google Fonts*/
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&family=Permanent+Marker&display=swap");

html {
  --title-font: "Permanent Marker", cursive, sans-serif;
  --font: "Montserrat", sans-serif;
}
* {
  margin: 0;
}

body {
  background-color: #bbe1fa;
}

#app {
  font-family: var(--font);
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
  padding-bottom: 5rem;
}

#app #title {
  font-family: var(--title-font);
  text-align: center;
  font-size: 2.75rem;
  margin: 1rem 0;
}

@media (min-width: 600px) {
  #app #title {
    font-size: 4rem;
  }
}

@media (min-width: 850px) {
  #app #title {
    font-size: 5rem;
  }
}

@media (min-width: 1500px) {
  #app #title {
    font-size: 6rem;
  }
}
</style>
