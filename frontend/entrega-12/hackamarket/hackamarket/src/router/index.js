import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "*",
    name: "Error",
    component: () => import("../views/Error.vue"),
  },
  {
    path: "/register-client",
    name: "RegisterClient",
    component: () => import("../views/RegisterClient.vue"),
  },
  {
    path: "/clients",
    name: "ClientsPage",
    component: () => import("../views/ClientsPage.vue"),
  },
  {
    path: "/products",
    name: "ProductsPage",
    component: () => import("../views/ProductsPage.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
