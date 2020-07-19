<template>
  <div>
    <div id="searcher">
      <!-- Aquí utilizo un v-model para buscar por nombre una canción -->
      <input type="search" v-model="search" placeholder="Buscar por nombre" />
    </div>
    <table id="tracks">
      <thead>
        <th>SONG</th>
        <th>ARTIST</th>
        <th>LISTENERS</th>
      </thead>
      <!-- Usando un v-for recorro el array de toptracks -->
      <tbody v-for="track in filtered" :key="track.key">
        <tr>
          <td>{{ track.name }}</td>
          <td>{{ track.artist.name }}</td>
          <td>{{ track.listeners }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TopTracksTable",
  props: {
    toptracks: Array,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    // La función filtered filtra las canciones por el nombre que le pongamos que filtre
    filtered() {
      if (!this.search) {
        return this.toptracks;
      }
      return this.toptracks.filter((item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
/* Animación para que aparezcan las tablas */
@keyframes appear {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}
#searcher {
  text-align: center;
  padding: 1rem 0;
}

input {
  width: 250px;
  height: 30px;
  border: 3px solid #1b262c;
  border-radius: 25px;
}

input:focus {
  outline: none;
}

table {
  border-collapse: collapse;
  margin: 1rem 0.5rem;
  animation-name: appear;
  animation-duration: 0.75s;
}

table,
th,
tr,
td {
  border: 1px solid #1b262c;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #0f4c75;
  color: white;
}

tr:hover {
  background-color: whitesmoke;
  color: #1b262c;
  transition: all 0.5s;
}

tbody {
  background-color: #3282b8;
  color: #bbe1fa;
  padding: 12px 1px;
}

@media (min-width: 600px) {
  input {
    width: 400px;
  }

  table {
    margin: 4rem auto;
    width: 400px;
  }

  td {
    padding: 12px 5px;
  }
}

@media (min-width: 850px) {
  table {
    width: 650px;
  }
}

@media (min-width: 1500px) {
  table {
    width: 1000px;
  }
}
</style>
