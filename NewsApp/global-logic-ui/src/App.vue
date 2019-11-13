<template>
  <div id="app">
    <loader :isShowLoader="isShowLoader"></loader>
    <div class="app-main-content">
      <HeaderDesctop></HeaderDesctop>
      <router-view />
    </div>
    <Footer class="footer-wrap"></Footer>
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
// Vendors
import { mapActions, mapGetters } from "vuex";
// Layouts
import HeaderDesctop from "@/shared/layouts/header/header";
import Footer from "@/shared/layouts/footer/footer";
// Compoents
import loader from "@/shared/components/loader";
// Events
import EventBus from "@/eventBus";

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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (max-width: 767px) {
  .footer-wrap {
    flex-grow: 1;
    background-color: #052962;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}
</style>