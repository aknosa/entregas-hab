<template>
  <div id="products">
    <vue-headful title="Hack a Market | Productos" />
    <h1>Listado de Productos</h1>
    <!-- Antes de que cargue la página aparece el spinner -->
    <!-- Declaro el componente de productstable -->
    <loadercustom v-show="isLoading"></loadercustom>
    <productstable v-show="!isLoading" :products="products" />
  </div>
</template>

<script>
import axios from "axios";
import productstable from "@/components/ProductsTable.vue";
import loadercustom from "@/components/LoaderCustom.vue";

export default {
  name: "ProductsPage",
  components: {
    productstable,
    loadercustom
  },
  data() {
    return {
      products: [],
      isLoading: true
    };
  },
  methods: {
    getProducts() {
      var self = this;

      axios
        .get("http://localhost:3050/products")
        .then(function(response) {
          self.products = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  //Función para que durante un tiempo aparezca el spinner
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1200);
  },
  created() {
    this.getProducts();
  }
};
</script>

<style scoped>
#products {
  margin-top: 6rem;
}

#products h1 {
  color: #ffa931;
  font-weight: 400;
  font-size: 1.75rem;
  margin: 2rem auto;
}
@media (min-width: 700px) {
  #products {
    margin-top: 10rem;
  }
  #products h1 {
    font-size: 2.75rem;
    font-weight: 500;
    margin-top: 4rem;
  }
}
</style>