<template>
  <div class="container">
    <div class="back-to-home" @click='goBack()'>
      <a href="#" class="back-to-home-button">
        <font-awesome-icon icon="angle-left" />
      </a>
    </div>

    <moreWeather
      :isShowMoreWeather="isShowMoreWeather"
      @closeMoreWeather="closeMoreWeather"
      :weatherData="weatherData"
      :isWeatherMap="true"
    ></moreWeather>
    <div id="map" class="map"></div>
  </div>
</template>

<script>
import { environment } from "./../../environment/environment";
import mapboxgl from "mapbox-gl";
import moreWeather from "./../../shared/components/more-weather";
import weatherService from "./../../shared/services/weather.service";

export default {
  props: ["data"],
  name: "weatherMap",
  components: {
    moreWeather
  },
  data() {
    return {
      map: mapboxgl.Map,
      isShowMoreWeather: false,
      weatherData: null
    };
  },
  mounted() {
    let that = this;
    mapboxgl.accessToken = environment.mapboxKey;
    this.$getLocation()
      .then(coordinates => {
        this.map = new mapboxgl.Map({
          container: "map", // container id
          style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
          center: [coordinates.lng, coordinates.lat], // starting position [lng, lat]
          zoom: 9 // starting zoom
        });

        this.map.on("click", function(e) {
          console.log(e);
          weatherService.getWeather(e.lngLat.lat, e.lngLat.lng).then(res => {
            that.weatherData = res.data;
            that.isShowMoreWeather = true;
          });
        });
      })
      .catch(function() {
        this.map = new mapboxgl.Map({
          container: "map", // container id
          style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
          center: [51.51062085840897, -0.12035208720763535], // starting position [lng, lat]
          zoom: 9 // starting zoom
        });

        this.map.on("click", function(e) {
          weatherService.getWeather(e.lngLat.lat, e.lngLat.lng).then(res => {
            that.weatherData = res.data;
            that.isShowMoreWeather = true;
          });
        });
      });
  },
  methods: {
    closeMoreWeather() {
      this.isShowMoreWeather = false;
    },

    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.back-to-home {
  position: fixed;
  font-size: 30px;
  left: 200px;
  top: 200px;
  z-index: 99999;
}
.back-to-home a {
  font-size: 100px;
  background-color: rgba(43, 44, 91, 0.4);
  background: rgba(43, 44, 91, 0.4);
  color: rgba(43, 44, 91, 0.4);
  padding: 0 35px;
}
.back-to-home a svg {
  color: white;
}

.map {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>