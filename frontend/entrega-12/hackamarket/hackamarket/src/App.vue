<template>
  <div id="app">
    <menucustom />
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
    menucustom
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Advent+Pro:wght@400;500;600&family=Montserrat:wght@400;500;600&display=swap");

html {
  --font: "Montserrat", sans-serif;
}

* {
  margin: 0;
  box-sizing: border-box;
}

input:focus {
  outline: none;
}

button:focus {
  outline: none;
}

#app {
  font-family: var(--font);
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  position: relative;
  min-height: 100vh;
  padding-bottom: 2.5rem;
}
</style>
