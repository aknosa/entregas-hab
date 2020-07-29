<template>
  <div>
    <vue-headful title="Hack a Market | Error" />
    <h1>ERROR 404 - La página no fue encontrada</h1>
    <p>Lo sentimos pero la página que intentas acceder no existe. Comprueba que has escrito bien la dirección en el navegador.</p>
    <img src="../assets/desert.gif" />
  </div>
</template>

<script>
export default {
  name: "Error"
};
</script>

<style scoped>
div {
  margin-top: 6rem;
}

h1 {
  color: #ffa931;
  font-weight: 400;
  font-size: 1.75rem;
  margin: 2rem auto;
  padding: 0.5rem;
}

p {
  margin-bottom: 3rem;
  padding: 0.5rem;
}

img {
  max-width: 100%;
  margin-bottom: 3rem;
  padding: 0.75rem;
  border-radius: 50px;
}

@media (min-width: 700px) {
  div {
    margin-top: 10rem;
  }
  h1 {
    font-size: 2.75rem;
    font-weight: 500;
    margin-top: 4rem;
  }

  p {
    font-size: 1.25rem;
  }
}
</style>