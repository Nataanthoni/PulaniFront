<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Welcome msg="Welcome to PulaniFront" />
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";
//import Login from "./components/Login.vue";

import Vue from "vue";
// import router from "./router";
// import store from ".store";
//Import and use axios
import Axios from "axios";

      Vue.prototype.$http = Axios;
      const token = localStorage.getItem('token')
      if (token) {
        Vue.prototype.$http.defaults.headers.common['Authorization'] = token
      }

export default {
  name: "App",
  components: {
    Welcome,
    // Login
  }
    };

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
