<template>
  <div id="table">
    <ul>
      <li v-for="product in products" :key="product.id">
        <img :src="product.imagen" />
        <p>
          <b>Nombre:</b>
          {{product.nombre}}
        </p>
        <p>
          <b>Stock:</b>
          {{product.stock}}
        </p>
        <p
          :class="{green: product.disponibilidad === 'Disponible', red: product.disponibilidad ==='No disponible'}"
        >
          <b>Disponibilidad:</b>
          {{product.disponibilidad}}
        </p>
        <!-- Utilizo un v-if para mostrar o no los botones dependiendo de la disponibilidad -->
        <div id="buttons" v-if="product.disponibilidad === 'Disponible'">
          <button @click="comprarProducto()">Comprar</button>
          <button @click="reservarProducto()">Reservar</button>
        </div>
        <div v-if="product.disponibilidad === 'No disponible'">
          <p>Sin fecha de entrada</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "ProductsTable",
  props: {
    products: Array
  },
  methods: {
    //Al pulsar los botones de comprar y reservar se ejecutan las siguientes funciones:
    comprarProducto() {
      Swal.fire({
        title: "¡Gracias por comprar nuestro producto!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
    },
    reservarProducto() {
      Swal.fire({
        title: "¡Gracias por reservar nuestro producto!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
    }
  }
};
</script>

<style scoped>
.green {
  color: green;
}
.red {
  color: red;
}

#table {
  padding-bottom: 6rem;
}

#table b {
  color: black;
}

ul {
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  position: relative;
  animation-name: animacion;
  animation-duration: 1s;
}

p {
  font-weight: 400;
}

@keyframes animacion {
  0% {
    top: -60px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}

li {
  margin: 3rem 0.5rem 3rem 0.5rem;
}

li p {
  margin: 0.75rem auto;
}

img {
  object-fit: cover;
  width: 300px;
  height: 200px;
  max-width: 100%;
  border-radius: 25px;
  border: 3px solid #ffa931;
}

#buttons {
  margin: 1rem auto 4rem auto;
}

button {
  margin: 0.5rem;
  border: 3px solid #fecb89;
  background-color: #a77a7a;
  color: #fecb89;
  padding: 7px;
  border-radius: 10px;
  transition: all 0.5s;
}

button:hover {
  color: #a77a7a;
  border: 3px solid #a77a7a;
  background-color: #fecb89;
  transform: translateY(-6px);
}

div > p {
  margin-bottom: 4.5rem;
}

@media (min-width: 700px) {
  ul {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  li {
    border: 3px solid #a77a7a;
    border-radius: 25px;
    padding: 0.5rem;
    box-shadow: 10px 25px 0px rgba(0, 0, 0, 0.5);
  }
  img {
    padding: 1rem;
    width: 350px;
    height: 233px;
    border-radius: 0;
    border: none;
  }
  button {
    font-size: 1.2rem;
  }
  #buttons {
    margin: 3rem auto 1rem auto;
  }
}
</style>