<template>
  <div id="list">
    <vue-headful title="Hack a Market | Clientes" />
    <h1>Listado de Clientes</h1>
    <loadercustom v-show="isLoading"></loadercustom>
    <!-- Declaro el componente clientstable -->
    <!-- Antes de que cargue la página aparece el spinner -->
    <!-- Recibe los datos del cliente al pulsar el botón del componente -->
    <!-- Recibe el índice del cliente al pulsar el botón del componente -->
    <clientstable
      v-show="!isLoading"
      v-on:datos="mostrarInfoCliente"
      v-on:borrar="borrandoCliente"
      :clients="clients"
    />
    <!-- Modal que aparece al pulsar en editar cliente -->
    <div v-show="seeModal" class="modal">
      <div class="modalBox">
        <h3>Actualiza los datos de tu cliente:</h3>
        <p>ID del Cliente: {{idCliente}}</p>
        <input type="text" placeholder="Nombre del cliente" v-model="nombreActualizado" />
        <br />
        <input type="text" placeholder="Nombre de usuario" v-model="usuarioActualizado" />
        <br />
        <input type="text" placeholder="Email del cliente" v-model="emailActualizado" />
        <br />
        <input type="text" placeholder="Contraseña del cliente" v-model="passwordActualizado" />
        <br />
        <input type="text" placeholder="Fotografía (En URL)" v-model="fotoActualizada" />
        <br />
        <button @click="seeModal =! seeModal">Cancelar</button>
        <button @click="actualizarCliente()">Actualizar Cliente</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import clientstable from "@/components/ClientsTable.vue";
import loadercustom from "@/components/LoaderCustom.vue";
import Swal from "sweetalert2";

export default {
  name: "ClientsPage",
  components: {
    clientstable,
    loadercustom
  },
  data() {
    return {
      clients: [],
      idCliente: "",
      nombreActualizado: "",
      usuarioActualizado: "",
      emailActualizado: "",
      passwordActualizado: "",
      fotoActualizada: "",
      seeModal: false,
      isLoading: true
    };
  },
  methods: {
    borrandoCliente(indiceCliente) {
      var self = this;
      axios
        .delete("http://localhost:3050/delete/" + indiceCliente)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      Swal.fire({
        title: "Cliente borrado",
        icon: "success",
        onClose: () => {
          location.reload();
        }
      });
    },
    //Esta función se ejecuta al pulsar aceptar en el modal de editar cliente
    actualizarCliente() {
      var self = this;
      axios
        .put("http://localhost:3050/update/" + self.idCliente, {
          nombre: self.nombreActualizado,
          usuario: self.usuarioActualizado,
          email: self.emailActualizado,
          password: self.passwordActualizado,
          foto: self.fotoActualizada
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      Swal.fire({
        title: "Cliente actualizado",
        icon: "success",
        onClose: () => {
          location.reload();
        }
      });
    },
    //Esta función se ejecuta al pulsar editar cliente
    mostrarInfoCliente(datosCliente) {
      this.nombreActualizado = datosCliente.nombre;
      this.usuarioActualizado = datosCliente.usuario;
      this.emailActualizado = datosCliente.email;
      this.passwordActualizado = datosCliente.password;
      this.fotoActualizada = datosCliente.foto;
      this.idCliente = datosCliente.id;

      this.seeModal = true;
    },
    getClients() {
      var self = this;

      axios
        .get("http://localhost:3050/clients")
        .then(function(response) {
          self.clients = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  //Tiempo en el que aparece el logo de carga
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1200);
  },
  created() {
    this.getClients();
  }
};
</script>

<style scoped>
.modal {
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modalBox {
  background-color: white;
  border-radius: 25px;
  margin: 20% auto;
  padding: 1.5rem;
  width: 80%;
  border: 1px solid #888;
}

#list {
  margin-top: 6rem;
}

#list h1 {
  color: #ffa931;
  font-weight: 400;
  font-size: 1.75rem;
  margin: 2rem auto;
}

input {
  border: none;
  height: 3rem;
  border-bottom: 2px solid #ffa931;
  font-size: 1rem;
}

button {
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: 0.5rem;
  border: 3px solid #fecb89;
  background-color: #a77a7a;
  color: #fecb89;
  padding: 7px;
  border-radius: 10px;
  transition: all 0.5s;
  font-size: 0.75rem;
}

button:hover {
  color: #a77a7a;
  border: 3px solid #a77a7a;
  background-color: #fecb89;
  transform: translateY(-6px);
}

.modalBox p {
  margin-top: 1rem;
}

@media (min-width: 700px) {
  #list {
    margin-top: 10rem;
  }
  #list h1 {
    font-size: 2.75rem;
    font-weight: 500;
    margin-top: 4rem;
  }
  .modalBox {
    width: 50%;
    margin: 15% auto;
  }
  .modalBox h3 {
    margin-bottom: 2rem;
  }
  button {
    margin-top: 7rem;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
}
</style>