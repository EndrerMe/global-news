<template>
  <div id="app">
    <HeaderDesctop></HeaderDesctop>
    <router-view/>
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
import HeaderDesctop from './shared/layouts/header/header';
import Footer from './shared/layouts/footer/footer';
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "app",
  components: {
    HeaderDesctop,
    Footer
  },
  computed: mapGetters(['getWeatherData']),
  data() {
    return {
      weatherData: null,
    }
  },
  async beforeMount () {
    this.$getLocation().then(coordinates => {
      this.getWeather({lat: coordinates.lat, lng: coordinates.lng})       
    }).catch(function () {
      this.getWeather({lat: 51.51062085840897, lng: -0.12035208720763535})  
    })

    this.getRates('USD', 'EUR');
  },
  methods: {
    ...mapActions([
      'getWeather',
      'getRates'
    ])
  }
};
</script>
