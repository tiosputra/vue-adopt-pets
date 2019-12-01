import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/cats",
    name: "cats",
    component: () => import("../views/Cats.vue")
  },
  {
    path: "/dogs",
    name: "dogs",
    component: () => import("../views/Dogs.vue")
  },
  {
    path: "/pets/:species/:id",
    name: "pet",
    component: () => import("../views/Pet.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
