<template>
  <div>
    <div id="searcher">
      <!-- Utilizo un v-model para filtrar y buscar lo que quiero -->
      <input type="search" v-model="search" placeholder="Buscar por nombre" />
    </div>
    <ul>
      <!-- Utilizo un v-for para recorrer el array de toptags -->
      <li v-for="tag in filtered" :key="tag.key">
        <p>🎵 TAG: {{ tag.name }}</p>
        <p>📌 TAGGINGS: {{ tag.taggings }}</p>
        <p>
          🔗 URL:
          <a :href="tag.url" target="_blank">Click Here!</a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopTagsTable",
  props: {
    toptags: Array,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    // Función que busca entre los tags
    filtered() {
      if (!this.search) {
        return this.toptags;
      }
      return this.toptags.filter((item) =>
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

/* Animación para aparecer las tablas*/
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
  color: whitesmoke;
}

#searcher {
  text-align: center;
  padding: 1rem 0;
  margin-bottom: 4rem;
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

ul {
  padding-inline-start: 0;
  animation-name: appear;
  animation-duration: 0.75s;
}

li {
  border: 3px inset #1b262c;
  background-color: #3282b8;
  color: #bbe1fa;
  border-radius: 25px;
  margin: 10px 4px;
  padding: 6px;
}

li:hover {
  border: 3px inset #3282b8;
  background-color: #1b262c;
  transition: all 0.5s;
}

@media (min-width: 600px) {
  input {
    width: 400px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem;
  }

  li {
    width: 40%;
  }
}

@media (min-width: 850px) {
  li {
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
}

@media (min-width: 1000px) {
  li {
    width: 30%;
  }
}

@media (min-width: 1000px) {
  ul {
    justify-content: space-around;
  }

  li {
    width: 22%;
  }
}
</style>
