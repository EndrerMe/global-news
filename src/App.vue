<template>
  <div id="app">
    <!-- <Header></Header> -->
    <Home></Home>

  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
// import Header from "./shared/layouts/header/header";

import Home from "./shared/layouts/header/home";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

