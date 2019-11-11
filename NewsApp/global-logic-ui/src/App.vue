<template>
  <div id="app">
    <loader :isShowLoader="isShowLoader"></loader>
    <HeaderDesctop></HeaderDesctop>
    <router-view />
    <Footer></Footer>
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
import HeaderDesctop from "./shared/layouts/header/header";
import Footer from "./shared/layouts/footer/footer";
import loader from "./components/loader/loader";
import { mapActions, mapGetters } from "vuex";
import EventBus from "./eventBus";

export default {
  name: "app",
  components: {
    HeaderDesctop,
    Footer,
    loader
  },
  computed: mapGetters(["getWeatherData"]),
  data() {
    return {
      isShowLoader: true,
      weatherData: null
    };
  },
  mounted() {
    this.isShowLoader = false;

    EventBus.$on("closeLoader", () => {
      this.isShowLoader = false;
    });

    EventBus.$on("showLoader", () => {
      this.isShowLoader = true;
    });

    this.$getLocation()
      .then(coordinates => {
        this.$store.dispatch("getWeather", {
          lat: coordinates.lat,
          lng: coordinates.lng
        });
      })
      .catch(function() {
        this.$store.dispatch("getWeather", {
          lat: 51.51062085840897,
          lng: -0.12035208720763535
        });
      });

    this.$store.dispatch("getTopNews", { filter: "pageSize=6&" });

    this.$store.dispatch("getRates", {
      currentRate: "USD",
      exchangeName: "EUR",
      rateAmount: 100
    });
  },
  methods: {
    ...mapActions(["getWeather", "getRates", "getNewsForHome", "getTopNews"])
  }
};
</script>

<style scoped>
#app {
  /* min-height: 100vh;
  background-color: #052962; */
}
</style>