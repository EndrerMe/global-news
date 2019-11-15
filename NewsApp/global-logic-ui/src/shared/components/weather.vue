<template>
  <div>
    <div class="weather-main-wrap" v-if="isShowWeatherModalProps">
      <div class="weather-search-wrap">
        <div class="close-wrap" @click="closeWeatherModal()">
          <a href="#"></a>
        </div>
        <div class="temp-value-wrap">
          <div class="text-wrap">
            <span>
              Weather in 
            </span>
          </div>
        </div>
        <div class="error-message" v-if='isShowErroeMessage'>
          <span>Location is incorrect. Please, try again.</span>
          <span>
            <img src="@/assets/images/close-error.png" @click='closeErrorMessage()'>
          </span>
        </div>
        <div class="seacrh-country-wrap">
          <div class="country-wrap">
            <input :value="userCity" v-on:input="changecountry($event)" @click='toggleHint()'/>
              <ul class="location-dropdown" v-if='isShowCityHint'>
                <li class="hidden-elem" v-for='city of probablyCityList' :key='city.lat + city.lng' @click='getWeather(city.name)'>
                  <span>{{ city.name }}, {{ city.country }}</span>
                </li>
              </ul>
          </div>
          <div class="button-wrap" @click="getWeather()">
            <button href="#">Search</button>
          </div>
        </div>
        <div class="clouds">
          <span>{{ currentWeather }}</span>
          <span class="icon">
            <img :src="currentWeatherImg" alt="cloud" />
          </span>
        </div>
        <div class="temp-value-wrap">
          <span class="value">{{ temp }}</span>
          <span class="temp-symbol-wrap">
            <span class="temp-symbol">
              <span class="mode" v-bind:class="{ active: isCelsius }" @click='changeTemp("c")'>
                <span class="degree"></span>
                C
              </span>
              <span class="mode" v-bind:class="{ active: !isCelsius }" @click='changeTemp("f")'>F</span>
            </span>
          </span>
        </div>
      </div>
      <div class="links-wrap">
        <a href="#" @click="showWeatherMap()">Weather Map</a>
        <a href="#" @click="showMoreWeather()">More</a>
      </div>
    </div>
    <converterDesctop :isShowConverterProps="isShowConverterProps"></converterDesctop>
  </div>
</template>

<script>
// Vendors
import { mapGetters, mapActions } from "vuex";
import _ from "lodash";
// Components
import converterDesctop from "@/shared/components/converter";
// Services
import weatherService from "@/shared/services/weather.service";
// Events
import EventBus from "@/eventBus";
// Json
import cities from 'cities.json';

export default {
  props: ["isShowWeatherModalProps", "isShowConverterProps"],
  name: "weatherDesctop",
  components: {
    converterDesctop,
  },
  computed: mapGetters(["getWeatherData"]),
  data() {
    return {
      isShowErroeMessage: false,
      probablyCityList: [],
      isShowCityHint: false,
      currentWeatherData: null,
      userCity: "London",
      temp: "",
      location: "",
      date: "",
      coordinates: null,
      isCelsius: true,
      currentWeather: null,
      currentWeatherImg: null,
      isShowMoreWeather: false,
    };
  },
  methods: {
    closeErrorMessage() {
      this.isShowErroeMessage = false;
    },
    
    ...mapActions([
      'getWeatherByCountry'
    ]),

    toggleHint() {
      if (this.probablyCityList && this.userCity !== 'Error') {
        this.isShowCityHint = !this.isShowCityHint;
      }
    },

    closeWeatherModal() {
      this.$emit("closeWeatherModal", false);
    },

    showMoreWeather() {
      const weather = this.currentWeatherData;
      EventBus.$emit("toggleMoreWeather", { state: true, weatherData: weather });
    },

    showWeatherMap() {
      let data = this.weatherData;
      this.$emit("closeWeatherModal", false);
      this.$router.push({ name: "weatherMap", params: { data } });
    },

    changecountry: _.debounce(function(event) {
      const value = event.target.value;
      this.userCity = value;
      if (value.length > 2) {
        const res = cities.filter(city => {
          return city.name.match(value)
        })
        if (res.length > 0) {
          this.isShowCityHint = true;
          this.isShowErroeMessage = false;
          this.probablyCityList = res;
        } else {
          this.isShowCityHint = false;
          this.isShowErroeMessage = true;
        }
      }
    }, 1000),

    getWeather(city) { 

      if (city) {
        this.userCity = city;
        this.isShowCityHint = false;
      }

      weatherService.getWeatherByCountry(this.userCity).then(res => {
        res.data.weather[0].description = res.data.weather[0].description.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
        this.currentWeatherData = res.data;
        this.temp = res.data.main.temp;
        this.temp = this.temp + "";
        this.temp = this.temp.split(".")[0];
        this.userCity = res.data.name;
        this.location = this.userCity;
        EventBus.$emit('changeWeatherCity', {city: this.location});
        this.currentWeatherImg = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
        this.currentWeather = res.data.weather[0].description;
      });
    },

    changeTemp(temp) {
      if (temp === 'f' && this.isCelsius) {
        this.isCelsius = false;
        this.temp = this.temp * 1.8 + 32;
        this.temp = Math.round(this.temp);
        this.temp = this.temp + '';
        this.temp = this.temp.split(".")[0];

        EventBus.$emit('changeWeatherAndType', {type: 'f', temp: this.temp});

      } else if (temp === 'c' && !this.isCelsius) {
        this.isCelsius = true;
        this.temp = (this.temp - 32) / 1.8;
        this.temp = Math.round(this.temp);
        this.temp = this.temp + '';
        this.temp = this.temp.split(".")[0];

        EventBus.$emit('changeWeatherAndType', {type: 'с', temp: this.temp});
      }
    },
  },
  mounted() {
    if (this.getWeatherData) {
      this.currentWeatherData = this.getWeatherData;
      this.temp = this.getWeatherData.main.temp;
      this.temp = this.temp + "";
      this.temp = this.temp.split(".")[0];
      this.location = this.getWeatherData.name;
      this.currentWeather = this.getWeatherData.weather[0].description;
      this.currentWeather = this.currentWeather.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
      this.date = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      this.currentWeatherImg = `http://openweathermap.org/img/wn/${this.getWeatherData.weather[0].icon}@2x.png`;
    }
  },
  // watch: {
  //   getWeatherData: function(newVal) {
  //     this.currentWeatherData = newVal;
  //     this.temp = newVal.main.temp;
  //     this.temp = this.temp + "";
  //     this.temp = this.temp.split(".")[0];
  //     this.location = newVal.name;
  //     this.currentWeather = newVal.weather[0].description;
  //     this.date = new Date()
  //       .toJSON()
  //       .slice(0, 10)
  //       .replace(/-/g, "/");
  //     this.currentWeatherImg = `http://openweathermap.org/img/wn/${newVal.weather[0].icon}@2x.png`;
  //   }
  // }
};
</script>

<style scoped>
/* Scroll */
::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  background: #959aa0;
}
::-webkit-scrollbar-thumb {
  background: #052962;
  border-radius: 10px;
}
/* end */
 
/* Custom Drop Down */
.weather-search-wrap .country-wrap{
  position: relative;
}
.seacrh-country-wrap .location-dropdown {
  width: 100%;
  position: absolute;
  list-style: none;
  padding-left: 0;
  z-index: 99999;
  top: 31px;
  font-family: 'Poppins-Bold';
  max-height: 85px;
  overflow: auto;
}
.seacrh-country-wrap .location-dropdown li {
  display: flex;
  width: 100%;
  background: white;
  padding: 0 10px;
}
.seacrh-country-wrap .location-dropdown li:hover {
  background: #f8c61a;
  cursor: pointer;
}
.seacrh-country-wrap .location-dropdown li span {
  color: #3f3f3f;
  font-size: 16px;
  padding: 2px 0;
  border:none;
}
.seacrh-country-wrap .city-message-wrap{
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
}
.seacrh-country-wrap .city-message-wrap .city-message{
  font-family: "Amiri-Bold";
  font-size: 12px;
  color:#daa901;
}

/* end */

/* Weather */
.error-message {
  display: flex;
  justify-content: space-around;
  /* width: 100%; */
  background-color: rgba(210, 55, 55, .5);
}
.error-message span {
  font-size: 12px;
  font-family: "Amiri-Bold";
}
.weather-main-wrap .temp-symbol .mode {
  position: relative;
}
.weather-main-wrap .temp-symbol .mode .degree::before {
  content: "";
  width: 8px;
  height: 8px;
  border: 1px solid white;
  position: absolute;
  border-radius: 10px;
  top: 6px;
  left: -4px;
}
.weather-main-wrap {
  position: absolute;
  width: 355px;
  right: -150px;
  top: 101px;
  background-color: #052962;
  padding-bottom: 20px;
  z-index: 99999;
  padding-bottom: 20px;
}
.weather-main-wrap .links-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 55px;
  padding: 0 25px;
}
.weather-main-wrap .links-wrap a {
  color: #f8c61a !important;
  text-decoration: none;
  font-family: "Poppins-Regular";
}
.weather-search-wrap {
  padding: 0 55px;
}
.weather-search-wrap .temp-value-wrap .temp-symbol {
  font-size: 26px !important;
}
.weather-search-wrap .temp-value-wrap {
  position: relative !important;
  color: white;
  font-weight: bold;
  position: relative;
  margin-top: 37px;
  font-family: "Poppins-SemiBold";
  display: flex;
  justify-content: center;
}
.weather-search-wrap .temp-value-wrap .temp-symbol-wrap {
  display: block;
  text-align: start;
  position: relative;
  min-width: 60px;
}
.weather-search-wrap .temp-value-wrap .temp-symbol-wrap .temp-symbol {
  position: absolute;
}
.weather-search-wrap
  .temp-value-wrap
  .temp-symbol-wrap
  .temp-symbol
  .mode.active {
  color: #f8c61a;
}
.weather-search-wrap .temp-value-wrap .value {
  display: block;
  text-align: end;
  font-size: 41px;
  font-family: "Poppins-SemiBold";
}
.weather-search-wrap .temp-value-wrap .temp-symbol span {
  margin: 0 3px;
}
.weather-search-wrap .temp-value-wrap .temp-symbol::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 21px;
  background-color: white;
  left: 34px;
  top: 8px;
}
.weather-search-wrap .clouds {
  margin-top: 40px;
  color: #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins-Regular";
}
.weather-search-wrap .clouds img {
  width: 90px;
}
.weather-search-wrap .close-wrap {
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  top: 24px;
  right: 23px;
}
.weather-search-wrap .close-wrap a {
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  top: 1px;
  right: 0px;
}
.weather-search-wrap .close-wrap a::before {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 8px;
  right: 2px;
  transform: rotate(45deg);
}
.weather-search-wrap .close-wrap a::after {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 8px;
  right: 2px;
  transform: rotate(-45deg);
}
.weather-search-wrap .text-wrap {
  margin-top: 40px;
  padding: 0;
  font-family: "Poppins-Regular";
}
.weather-search-wrap .text-wrap .search-result {
  color: #f8c61a;
}
.weather-search-wrap .text-wrap p.dropdown {
  font-size: 32px;
  font-family: initial;
}
.weather-search-wrap .button-wrap button {
  height: 48px;
  background-color: #f8c61a;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Poppins-SemiBold";
  width: 98%;
  color: #052962;
}
.weather-search-wrap .button-wrap button:hover {
  background-color: #ffe076;
}
.weather-search-wrap .seacrh-country-wrap {
  display: inline-flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
}
.weather-search-wrap .country-wrap{
  padding-bottom: 23px;
}
.weather-search-wrap .country-wrap input {
  color: #eaeaea;
  display: block;
  width: 100%;
  text-align: start;
  font-family: "Poppins-Regular";
  border: none;
  border-bottom: 1px solid;
  background: transparent;
  font-size: 18px;
  padding-left: 5px;
}
</style>