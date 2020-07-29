<template>
  <div id="register">
    <vue-headful title="Hack a Market | Registrar" />
    <h1>Registro de Clientes</h1>
    <!-- Antes de que cargue la página aparece el spinner -->
    <loadercustom v-show="isLoading"></loadercustom>
    <!-- Formulario para registrar un cliente -->
    <div id="table" v-show="!isLoading">
      <p v-show="errorMsg">*Tienes campos vacíos</p>
      <input type="text" v-model="nombre" placeholder="Nombre del Cliente" />
      <br />
      <input type="text" v-model="usuario" placeholder="Nombre de Usuario" />
      <br />
      <input type="email" v-model="email" placeholder="Email del Cliente" />
      <br />
      <input type="password" v-model="password" placeholder="Contraseña del Cliente" />
      <br />
      <input type="text" v-model="foto" placeholder="Fotografía (URL)" />
      <br />
      <button @click="validatingData()">Crear cliente</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import loadercustom from "@/components/LoaderCustom.vue";

export default {
  name: "RegisterClient",
  components: {
    loadercustom
  },
  data() {
    return {
      nombre: "",
      usuario: "",
      email: "",
      password: "",
      foto: "",
      createClient: false,
      errorMsg: false,
      isLoading: true
    };
  },
  //Función para que durante un tiempo aparezca el spinner
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1200);
  },
  methods: {
    validatingData() {
      if (
        this.nombre === "" ||
        this.usuario === "" ||
        this.email === "" ||
        this.password === "" ||
        this.foto === ""
      ) {
        this.createClient = false;
        this.errorMsg = true;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No puedes dejar campos vacíos."
        });
      } else {
        this.errorMsg = false;
        this.createClient = true;
        this.addNewClient();
      }
    },
    addNewClient() {
      if (this.createClient === true) {
        var self = this;
        axios
          .post("http://localhost:3050/register", {
            nombre: self.nombre,
            usuario: self.usuario,
            email: self.email,
            password: self.password,
            foto: self.foto
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        Swal.fire({
          icon: "success",
          title: "Nuevo cliente añadido",
          onClose: () => {
            location.reload();
          }
        });
        this.createClient = false;
        this.nombre = "";
        this.usuario = "";
        this.email = "";
        this.password = "";
        this.foto = "";
      } else {
        console.log("Yo no debería estar aquí.");
      }
    }
  }
};
</script>

<style scoped>
#register {
  margin-top: 6rem;
}

#register h1 {
  color: #ffa931;
  font-weight: 400;
  font-size: 1.75rem;
  margin: 2rem auto;
}

#table {
  position: relative;
  animation-name: animacion;
  animation-duration: 1s;
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

p {
  margin: 4rem auto 2rem auto;
}

input {
  border: none;
  height: 3rem;
  border-bottom: 2px solid #ffa931;
  font-size: 1rem;
}

button {
  margin-top: 2rem;
  margin-bottom: 5rem;
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
  #register {
    margin-top: 10rem;
  }
  #register h1 {
    font-size: 2.75rem;
    font-weight: 500;
    margin-top: 4rem;
    margin-bottom: 5rem;
  }
  p {
    font-size: 1.2rem;
  }
  input {
    font-size: 1.5rem;
    margin: 0.9rem auto;
  }
  button {
    font-size: 1.4rem;
  }
}
</style>