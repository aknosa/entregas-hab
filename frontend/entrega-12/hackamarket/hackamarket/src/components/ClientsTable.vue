<template>
  <div id="table">
    <ul>
      <li v-for="(client, index) in clients" :key="client.id">
        <img :src="client.foto" />
        <p>
          <b>Nombre:</b>
          {{client.nombre}}
        </p>
        <p>
          <b>Usuario:</b>
          {{client.usuario}}
        </p>
        <p>
          <b>Email:</b>
          {{client.email}}
        </p>
        <p>
          <b>Contraseña:</b>
          {{client.password}}
        </p>
        <div id="buttons">
          <!-- Los botones de editar y borrar pasan información del cliente a la vista -->
          <button @click="enviarDatosCliente(index)">Editar</button>
          <button @click="enviarIndiceCliente(index)">Borrar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ClientsTable",
  props: {
    clients: Array
  },
  methods: {
    enviarDatosCliente(index) {
      let datosCliente = this.clients[index];
      this.$emit("datos", datosCliente);
    },
    enviarIndiceCliente(index) {
      let indiceCliente = this.clients[index].id;
      this.$emit("borrar", indiceCliente);
    }
  }
};
</script>

<style scoped>
ul {
  padding-inline-start: 0;
  list-style: none;
  position: relative;
  animation-name: animacion;
  animation-duration: 1s;
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

img {
  height: 10rem;
  width: 10rem;
  max-width: 100%;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1.75rem;
  border: 5px solid #ffa931;
}

#table p {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

#buttons {
  margin: 1rem auto 5rem auto;
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

@media (min-width: 700px) {
  #table {
    padding-bottom: 4rem;
  }
  #table p {
    font-size: 0.9rem;
  }
  ul {
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  li {
    width: 30%;
    margin: 1.5rem 1.5rem;
    border: 3px solid #a77a7a;
    border-radius: 25px;
    padding: 0.5rem;
    box-shadow: 10px 25px 0px rgba(0, 0, 0, 0.5);
    margin-bottom: 4rem;
  }
  img {
    margin-top: 2rem;
    height: 12rem;
    width: 12rem;
  }
  button {
    font-size: 1rem;
  }
  #buttons {
    margin: 3rem auto 1rem auto;
  }

  @media (min-width: 1000px) {
    li {
      width: 20%;
    }
  }

  @media (min-width: 1400px) {
    li {
      width: 13%;
    }
  }
}
</style>