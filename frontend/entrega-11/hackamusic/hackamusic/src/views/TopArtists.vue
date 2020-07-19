<template>
  <div class="home">
    <vue-headful title="Hack a Music | Top Artists" />
    <h2>Top Artists</h2>
    <!-- Utilizo v-show para mostrar y quitar la pantalla de carga -->
    <loadercustom v-show="isLoading"></loadercustom>
    <topartiststable v-show="!isLoading" :topartists="artists" />
  </div>
</template>

<script>
import api from "@/api/index.js";
import topartiststable from "@/components/TopArtistsTable.vue";
// Importo el logo de carga:
import loadercustom from "@/components/LoaderCustom.vue";

export default {
  name: "Home",
  components: {
    topartiststable,
    loadercustom,
  },
  data() {
    return {
      artists: [],
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
    api
      .getArtists()
      .then((response) => (this.artists = response.data.topartists.artist));
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin: 1rem;
}

@media (min-width: 600px) {
  h2 {
    font-size: 2rem;
  }
}

@media (min-width: 850px) {
  h2 {
    font-size: 3rem;
  }
}
</style>
