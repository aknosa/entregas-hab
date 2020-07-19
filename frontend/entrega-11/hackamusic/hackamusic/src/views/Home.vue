<template>
  <div class="home">
    <vue-headful title="Hack a Music | Home" />
    <h2 id="welcome">Welcome!</h2>
    <h2>Top Tags</h2>
    <!-- Utilizo v-show para mostrar y quitar la pantalla de carga -->
    <loadercustom v-show="isLoading"></loadercustom>
    <toptagstable v-show="!isLoading" :toptags="tags" />
  </div>
</template>

<script>
import api from "@/api/index.js";
import toptagstable from "@/components/TopTagsTable.vue";
// Importo el logo de carga:
import loadercustom from "@/components/LoaderCustom.vue";

export default {
  name: "Home",
  components: {
    toptagstable,
    loadercustom,
  },
  data() {
    return {
      tags: [],
      isLoading: true,
    };
  },
  mounted() {
    // Con un setTimeout desactivo la pantalla de carga
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  created() {
    api.getTopTags().then((response) => (this.tags = response.data.tags.tag));
  },
};
</script>

<style scoped>
/* Importo una fuente de Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&family=Permanent+Marker&display=swap");

html {
  --title-font: "Permanent Marker", cursive, sans-serif;
  --font: "Montserrat", sans-serif;
}

.home #welcome {
  font-family: var(--title-font);
  text-align: center;
  font-size: 1.5rem;
}

div h2:nth-child(2) {
  text-align: center;
  margin: 2rem 0;
}

@media (min-width: 600px) {
  div h2:nth-child(2) {
    font-size: 2rem;
  }

  .home #welcome {
    font-size: 1.75rem;
  }
}

@media (min-width: 850px) {
  div h2:nth-child(2) {
    font-size: 3rem;
  }

  .home #welcome {
    font-size: 2rem;
  }
}
</style>
