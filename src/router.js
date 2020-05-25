import Vue from "vue";
import Router from "vue-router";
import Welcome from "./components/Welcome.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome,
    },
    {
      path: "/home",
      component: Welcome,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/profile",
      name: "profile",
      // lazy-loaded
      component: () => import("./components/Profile.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      // lazy-loaded
      component: () => import("./components/BoardAdmin.vue"),
    },
    {
      path: "/user",
      name: "user",
      // lazy-loaded
      component: () => import("./components/BoardUser.vue"),
    },
  ],
});
