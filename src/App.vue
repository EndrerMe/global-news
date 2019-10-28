<template>
  <div id="app">
    <HeaderDesctop></HeaderDesctop>
    <router-view />
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
import HeaderDesctop from './shared/layouts/header/header';

export default {
  name: "app",
  components: {
    HeaderDesctop
  }
};
</script>
