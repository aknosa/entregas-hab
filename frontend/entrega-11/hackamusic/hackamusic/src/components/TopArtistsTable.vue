<template>
  <div>
    <div id="searcher">
      <!-- Utilizo un v-model para filtrar y buscar lo que quiero -->
      <input type="search" v-model="search" placeholder="Buscar por nombre" />
    </div>
    <div id="list">
      <ul>
        <!-- Utilizo un v-for para recorrer el array de topartists -->
        <li v-for="artist in filtered" :key="artist.key">
          <img :src="artist.image[2]['#text']" />
          <p>🎤 ARTIST: {{ artist.name }}</p>
          <p>🎧 LISTENERS: {{ artist.listeners }}</p>
          <p>
            🔗 URL:
            <a :href="artist.url" target="_blank">Click Here!</a>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopArtistsTable",
  props: {
    topartists: Array,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    // Función que busca el artista
    filtered() {
      if (!this.search) {
        return this.topartists;
      }
      return this.topartists.filter((item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
* {
  list-style: none;
}

/* Animación de aparición */
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

a {
  color: #3282b8;
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

li img {
  border-radius: 50%;
  border: 5px solid #1b262c;
  width: 7rem;
}

ul {
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-inline-start: 0;
  animation-name: appear;
  animation-duration: 0.75s;
}

ul li {
  padding: 1.25rem 0;
}

ul li p {
  padding: 0.7rem 0;
}

@media (min-width: 600px) {
  input {
    width: 400px;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 5rem;
  }

  div ul li {
    margin: 5rem 0;
    width: 45%;
    height: 100px;
  }
}

@media (min-width: 850px) {
  #list {
    padding: 2rem;
  }

  ul {
    text-align: left;
    align-items: center;
    margin-left: 0.75rem;
  }

  div ul li {
    margin: 3rem 0;
  }

  div ul li p {
    margin: 1rem 0;
    font-size: 1rem;
  }

  li img {
    float: left;
    margin-right: 1rem;
    width: 9.5rem;
  }

  @media (min-width: 1500px) {
    ul {
      margin-left: 3rem;
    }

    div ul li {
      width: 33%;
    }
  }
}
</style>
