<template>
  <div>
    <vue-headful title="Hack a Music | Error" />
    <!-- Utilizo v-show para mostrar y quitar la pantalla de carga -->
    <loadercustom v-show="isLoading"></loadercustom>
    <h1 v-show="!isLoading">La ruta no existe 😣</h1>
    <p v-show="!isLoading">Comprueba que has escrito bien la dirección.</p>
  </div>
</template>

<script>
// Importo el logo de carga
import loadercustom from "@/components/LoaderCustom.vue";

export default {
  name: "Error",
  components: {
    loadercustom,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    // Con un setTimeout desactivo la pantalla de carga
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-left: 1rem;
}

p {
  margin-top: 1rem;
  margin-left: 1rem;
}

@media (min-width: 600px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.25rem;
  }
}

@media (min-width: 850px) {
  h1 {
    margin-top: 10rem;
    font-size: 3rem;
  }

  p {
    font-size: 1.75rem;
  }
}
</style>
