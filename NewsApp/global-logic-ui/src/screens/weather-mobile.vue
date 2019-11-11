<template>
  <div>
    <div class="modile-side-weather-wrap">
      <div class="mobile-weather-main-wrap">
        <div class="title-wrap section-elem">
          <span>Weather</span>
        </div>
        <div class="location-wrap section-elem">
          <span>{{ location }}</span>
        </div>
        <div class="weather-data-wrap section-elem">
          <div class="clouds">
            <span class="icon">
              <img :src="currentWeatherImg" alt="cloud" />
            </span>
            <span class="cloud-state">{{ currentWeather }}</span>
          </div>
          <div class="temp-value-wrap">
            <span class="temp-value">{{ temp }}</span>
            <span class="temp-symbol-wrap">
              <span class="temp-symbol">
                <span class="degreeMode" :class='{active : isCelsius}' @click='changeTemp("c")'>
                  <span class="degree"></span>
                  C
                </span>
                <span class="faringateMode" :class='{active : !isCelsius}' @click='changeTemp("f")'>F</span>
              </span>
            </span>
          </div>
        </div>
        <div class="seacrh-country-wrap section-elem">
          <div class="text-wrap">
            <p>
              Show weather in
              <span class="search-result">London</span> ?
            </p>
          </div>
          <div class="country-wrap">
            <input :value="userCity" v-on:input="changecountry($event)" @click='hideCityList()'/>
              <ul class="location-dropdown" v-if='isShowCityHint'>
                <li class="hidden-elem" v-for='city of probablyCityList' :key='city.lat + city.lng' @click='getWeather(city.name)'>
                  <span>{{ city.name }}, {{ city.country }}</span>
                </li>
              </ul>
          </div>
          <div class="button-wrap">
            <button href="#">Search</button>
          </div>
        </div>
        <div class="links-wrap">
          
          <div class="mobile-weather-details-wrap">
            <div class="links-wrap">
              <div class="left-link">
                <a href="#" @click='showMobileMore()'>
                  More
                  <font-awesome-icon icon="caret-down" />
                </a>
              </div>
              <div class="right-link">
                <a href="#" @click='goToWeatherMap()'>Weather Map</a>
              </div>
            </div>
            <div class="sides-wrap" v-if='isShowMoreMobile'>
              <div class="left-side">
                <div class="temp-info-wrap">
                  <div class="temp-value-wrap info-elem">
                    <p>
                      <span class="switch">Show weather in :</span>
                      <span class="temp-symbol">
                        <span v-bind:class="{ active: !isCelsius }" @click='changeTemp("f")'>F</span>
                        <span class="degreeMode" v-bind:class="{ active: isCelsius }" @click='changeTemp("c")'>
                          <span class="degree"></span>
                          C
                        </span>
                      </span>
                    </p>
                    <p>Place : {{ location }}</p>
                  </div>
                  <div class="show-info-wrap info-elem">
                    <p>
                      Min Temperature :
                      <span class="temp-value">
                        {{ currentWeatherData.main.temp_min }}
                        <span class="temp-val-symbol"></span>
                      </span>
                    </p>
                    <p>
                      Max Temperature :
                      <span class="temp-value">
                        {{ currentWeatherData.main.temp_max }}
                        <span class="temp-val-symbol"></span>
                      </span>
                    </p>
                    <p>
                      Temperature :
                      <span class="temp-value">
                        {{ temp }}
                        <span class="temp-val-symbol"></span>
                      </span>
                    </p>
                  </div>
                  <div class="additional-info info-elem">
                    <p class>
                      Humidity :
                      <span class="value">{{ currentWeatherData.main.humidity }}</span>
                    </p>
                    <p class>
                      Wind Speed :
                      <span class="value">{{ currentWeatherData.wind.speed }}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="right-side">
                <div class="wrap">
                  <span class="icon-wrap">
                    <img :src="currentWeatherImg" alt="cloud" />
                  </span>
                  <span class="text">{{ currentWeather }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import cities from 'cities.json';
import _ from "lodash";

export default {
  name: "weatherMobile",
  computed: mapGetters(["getWeatherData"]),
  data() {
    return {
      currentWeatherData: null,
      isShowMoreMobile: false,
      userCity: 'London',
      temp: "",
      location: "",
      date: "",
      currentWeather: null,
      currentWeatherImg: null,
      isCelsius: true,
      isShowCityHint: false,
      isShowErroeMessage: false,
      probablyCityList: [],
    }
  },
  methods: {
    ...mapActions(["getWeatherByCountry"]),

    hideCityList() {
      if (this.probablyCityList.length > 0) {
        this.isShowCityHint = !this.isShowCityHint;
      }
    },

    showMobileMore() {
      this.isShowMoreMobile = !this.isShowMoreMobile;
    },

    goToWeatherMap() {
      const data = this.currentWeatherData;
      this.$router.push({name: "weatherMap", params: { data }});
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

        console.log(res)
      }
    }, 1000),

    changeTemp(temp) {
      if (temp === 'f' && this.isCelsius) {
        this.isCelsius = false;
        this.currentWeatherData.main.temp_min = this.currentWeatherData.main.temp_min * 1.8 + 32;
        this.currentWeatherData.main.temp_min = Math.round(this.currentWeatherData.main.temp_min);
        this.currentWeatherData.main.temp_min = this.currentWeatherData.main.temp_min + '';
        this.currentWeatherData.main.temp_min = this.currentWeatherData.main.temp_min.split(".")[0];

        this.currentWeatherData.main.temp_max = this.currentWeatherData.main.temp_max * 1.8 + 32;
        this.currentWeatherData.main.temp_max = Math.round(this.currentWeatherData.main.temp_max);
        this.currentWeatherData.main.temp_max = this.currentWeatherData.main.temp_max + '';
        this.currentWeatherData.main.temp_max = this.currentWeatherData.main.temp_max.split(".")[0];

        this.temp = this.temp * 1.8 + 32;
        this.temp = Math.round(this.temp);
        this.temp = this.temp + '';
        this.temp = this.temp.split(".")[0];
      } else if (temp === 'c' && !this.isCelsius) {
        this.isCelsius = true;
        this.currentWeatherData.main.temp_min = (this.currentWeatherData.main.temp_min - 32) / 1.8;
        this.currentWeatherData.main.temp_min = Math.round(this.currentWeatherData.main.temp_min);
        this.currentWeatherData.main.temp_min = this.currentWeatherData.main.temp_min + '';
        this.currentWeatherData.main.temp_min = this.currentWeatherData.main.temp_min.split(".")[0];

        this.currentWeatherData.main.temp_max = (this.currentWeatherData.main.temp_max - 32) / 1.8;
        this.currentWeatherData.main.temp_max = Math.round(this.currentWeatherData.main.temp_max);
        this.currentWeatherData.main.temp_max = this.currentWeatherData.main.temp_max + '';
        this.currentWeatherData.main.temp_max = this.currentWeatherData.main.temp_max.split(".")[0];

        this.temp = (this.temp - 32) / 1.8;
        this.temp = Math.round(this.temp);
        this.temp = this.temp + '';
        this.temp = this.temp.split(".")[0];
      }
    },
  },
  created() {
    if (this.getWeatherData.main) {
      this.currentWeatherData = this.getWeatherData;
    } else {
      this.currentWeatherData = JSON.parse(localStorage.getItem("currentWeather"));
    }

    this.temp = this.currentWeatherData.main.temp;
    this.temp = this.temp + "";
    this.temp = this.temp.split(".")[0];
    this.location = this.currentWeatherData.name;
    this.currentWeather = this.currentWeatherData.weather[0].description;
    this.currentWeather = this.currentWeather.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    this.date = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/");
    this.currentWeatherImg = `http://openweathermap.org/img/wn/${this.currentWeatherData.weather[0].icon}@2x.png`;
  }
};
</script>

<style scoped>
 /* Scroll */
/* ::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  background: #959aa0;
}
::-webkit-scrollbar-thumb {
  background: #052962;
  border-radius: 10px;
} */
/* end */

/* Custom Drop Down */
.modile-side-weather-wrap .country-wrap{
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
  max-height: 112px;
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
/* end */

.mobile-weather-main-wrap .temp-value-wrap .temp-symbol-wrap {
  display: block;
  text-align: start;
  position: relative;
  min-width: 60px;
}
.mobile-weather-main-wrap
  .temp-info-wrap
  .temp-value-wrap
  .temp-symbol-wrap
  .faringateMode {
  margin-left: 5px;
}
.mobile-weather-main-wrap .temp-info-wrap .temp-symbol .active {
  color: #f8c61a;
  margin-left: 18px;
}
.mobile-weather-main-wrap
  .temp-info-wrap
  .temp-symbol
  .degreeMode
  .degree::before {
  content: "";
  width: 5px;
  height: 5px;
  border: 1px solid #f8c61a;
  position: absolute;
  border-radius: 10px;
  top: 3px;
  left: 21px;
}
.weaterDetailsHidden {
  height: 300px;
  transition: all 1s;
}
.mobile-weather-details-wrap .right-side .wrap {
  display: flex;
  flex-direction: column;
}
.mobile-weather-details-wrap .right-side {
  color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: calc((100% - 276px));
}
.mobile-weather-details-wrap .right-side .text {
  white-space: nowrap;
}
.mobile-weather-details-wrap .right-side .icon-wrap img {
  width: 35px;
}
.temp-info-wrap .additional-info {
  text-align: start;
}
.temp-info-wrap .info-elem {
  margin-top: 20px;
  font-size: 13px;
  font-weight: bold;
}
.mobile-weather-details-wrap .show-info-wrap {
  text-align: start;
}
.mobile-weather-details-wrap .show-info-wrap .temp-value {
  margin-left: 6px;
}

.mobile-weather-details-wrap .show-info-wrap .temp-val-symbol {
  position: relative;
  margin-left: 5px;
}
.mobile-weather-details-wrap .show-info-wrap .temp-val-symbol::before {
  content: "";
  width: 5px;
  height: 5px;
  position: absolute;
  border: 1px solid #a09f9f;
  border-radius: 10px;
}
.mobile-weather-details-wrap .temp-symbol {
  position: relative;
  margin-left: 10px;
}
.mobile-weather-details-wrap .temp-symbol::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 15px;
  background-color: white;
  left: 14px;
  top: 1px;
}
.mobile-weather-details-wrap .temp-value-wrap {
  text-align: start;
}
.mobile-weather-details-wrap .temp-info-wrap p {
  margin-bottom: 5px;
}
.mobile-weather-details-wrap .temp-info-wrap {
  color: #f9f9f9;
  font-family: "Poppins-Light";
}
.mobile-weather-details-wrap .sides-wrap {
  display: flex;
}
.mobile-weather-details-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #052962;
  z-index: 999;
}
.mobile-weather-details-wrap .close-wrap a {
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  top: 24px;
  right: 23px;
}
.mobile-weather-details-wrap .close-wrap a::before {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 7px;
  right: 0px;
  transform: rotate(45deg);
}
.mobile-weather-details-wrap .close-wrap a::after {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 7px;
  right: 0px;
  transform: rotate(-45deg);
}
.mobile-weather-main-wrap {
  padding: 0 15px 40px 15px;
}
.mobile-weather-main-wrap .section-elem {
  display: flex;
  justify-content: center;
  color: white;
  font-family: "Poppins-Regular";
}
.mobile-weather-main-wrap .title-wrap {
  padding: 22px 0;
}
.mobile-weather-main-wrap .location-wrap {
  padding-top: 15px;
}
.mobile-weather-main-wrap .links-wrap {
  display: flex;
  justify-content: space-between;
  margin: 12px 0 5px 0;
  font-family: "Poppins-Regular";
}
.mobile-weather-main-wrap .links-wrap a {
  color: #f8c61a;
  text-decoration: none;
}
.mobile-weather-main-wrap .links-wrap a svg {
  width: 7px;
}
.mobile-weather-main-wrap .seacrh-country-wrap {
  display: inline-flex;
  flex-direction: column;
  margin-top: 45px;
  width: 100%;
}
.mobile-weather-main-wrap .seacrh-country-wrap .search-result {
  color: rgb(248, 198, 26) !important;
}
.mobile-weather-main-wrap .weather-data-wrap .button-wrap {
  margin-top: 23px;
}
.mobile-weather-main-wrap .country-wrap input {
  color: #eaeaea;
  display: block;
  width: 100%;
  text-align: start;
  background: transparent;
  border: none;
  border-bottom: 2px solid #83aeff;
}
.mobile-weather-main-wrap .button-wrap {
  margin-top: 15px;
}
.mobile-weather-main-wrap .button-wrap button {
  width: 100%;
  height: 35px;
  background-color: #f8c61a;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #052962;

}
.mobile-weather-main-wrap .weather-data-wrap {
  display: flex;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}
.mobile-weather-main-wrap .weather-data-wrap .clouds {
  display: flex;
  flex-direction: column;
}
.mobile-weather-main-wrap .weather-data-wrap .clouds .cloud-state {
  margin-top: 5px;
}
.mobile-weather-main-wrap .weather-data-wrap .temp-value-wrap {
  display: flex;
  align-items: center;
  color: white;
  font-size: 32px;
  font-family: initial;
  position: relative;
}
.mobile-weather-main-wrap .weather-data-wrap .temp-value-wrap .temp-value {
  font-size: 38px;
  font-family: "SegoeUIRegular";
}
.mobile-weather-main-wrap .weather-data-wrap .temp-value-wrap .temp-symbol {
  position: absolute;
  top: -26px;
  font-size: 26px;
  left: 5px;
  font-family: "Poppins-Light";
}
.mobile-weather-main-wrap
  .weather-data-wrap
  .temp-value-wrap
  .temp-symbol
  .degreeMode::before {
  content: "";
  width: 5px;
  height: 5px;
  border: 1px solid white;
  position: absolute;
  border-radius: 10px;
  top: 10px;
  left: -3px;
}
.mobile-weather-main-wrap
  .weather-data-wrap
  .temp-value-wrap
  .temp-symbol
  .faringateMode {
  margin-left: 6px;
}
.mobile-weather-main-wrap
  .weather-data-wrap
  .temp-value-wrap
  .temp-symbol
  .active {
  color: rgb(248, 198, 26);
}
.mobile-weather-main-wrap
  .weather-data-wrap
  .temp-value-wrap
  .temp-symbol
  span.degree {
  margin: 0 2px;
}
.mobile-weather-main-wrap
  .weather-data-wrap
  .temp-value-wrap
  .temp-symbol::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 22px;
  background-color: white;
  left: 29px;
  top: 8px;
}
.mobile-weather-main-wrap .weather-data-wrap .clouds img {
  width: 70px;
}
.mobile-weather-main-wrap .weather-data-wrap .text-wrap p.dropdown {
  font-size: 32px;
  font-family: initial;
}
.mobile-weather-main-wrap .weather-data-wrap .button-wrap button {
  width: 100%;
  height: 35px;
  background-color: #f8c61a;
  border: none;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.mobile-weather-main-wrap .weather-data-wrap .button-wrap button:hover {
  background-color: #ffe076;
}
.mobile-weather-main-wrap.weather-data-wrap .button-wrap button:hover {
  background-color: #ffe076;
}
.modile-side-weather-wrap {
  background-color: #052962;
  z-index: 999;
  border-top: 1px solid #436f9c;
  overflow: scroll;
}
</style>
