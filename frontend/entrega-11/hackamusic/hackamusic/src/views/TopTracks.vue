<template>
  <div>
    <vue-headful title="Hack a Music | Top Tracks" />
    <h2>Top Tracks</h2>
    <!-- Utilizo v-show para mostrar y quitar la pantalla de carga -->
    <loadercustom v-show="isLoading"></loadercustom>
    <toptrackstable v-show="!isLoading" :toptracks="tracks" />
  </div>
</template>

<script>
import api from "@/api/index.js";
import toptrackstable from "@/components/TopTracksTable.vue";
// Importo el logo de carga:
import loadercustom from "@/components/LoaderCustom.vue";

export default {
  name: "TopTracks",
  components: {
    toptrackstable,
    loadercustom,
  },
  data() {
    return {
      tracks: [],
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
      .getTopTracks()
      .then((response) => (this.tracks = response.data.tracks.track));
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
