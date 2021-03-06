import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// Estas son las rutas de mi proyecto:

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "*",
    name: "Error",
    component: () => import("../views/Error.vue"),
  },
  {
    path: "/top-artists",
    name: "TopArtists",
    component: () => import("../views/TopArtists.vue"),
  },
  {
    path: "/top-tracks",
    name: "TopTracks",
    component: () => import("../views/TopTracks.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
