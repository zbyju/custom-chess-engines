import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "../views/Menu.vue";
import PlayGame from "../views/PlayGame.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Menu",
    component: Menu
  },
  {
    path: "/play",
    name: "Play",
    component: PlayGame
  }
];

const router = new VueRouter({
  routes
});

export default router;
