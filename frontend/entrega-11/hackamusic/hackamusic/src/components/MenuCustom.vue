<template>
  <div>
    <!-- HTML del Nav -->
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'TopArtists' }">Top Artists</router-link>
      <router-link :to="{ name: 'TopTracks' }">Top Tracks</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCustom",
};
</script>

<style scoped>
#nav {
  background-color: #1b262c;
  display: flex;
  justify-content: space-around;
}

#nav {
  padding: 20px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #3282b8;
  text-decoration: none;
  font-size: 0.8rem;
}

#nav a:hover {
  color: #bbe1fa;
  transition: color 0.5s;
}

#nav a.router-link-exact-active {
  color: #bbe1fa;
  text-decoration: underline;
}

@media (min-width: 600px) {
  #nav a {
    font-size: 1.25rem;
  }
}
</style>
