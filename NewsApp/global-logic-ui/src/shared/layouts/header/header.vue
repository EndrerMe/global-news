<template>
  <div class="header-wrap" v-if="getWeatherData.main">
    <div class="header-content">
      <div class="top-menu-wrap">
        <div class="container">
          <b-navbar class="top-menu" toggleable="md" type="dark" variant="info">
            <b-nav class="mobile-top-menu">
              <!-- Side Menu -->
              <mobileMenu 
              :isShowSideMenu='isShowSideMenu'
              @toggleMobileSideMenu='toggleMobileSideMenu'></mobileMenu>
              <!-- end -->
              <b-nav-item class="mobile-menu-button">
                <b-navbar-toggle  target="mobile-side-menu-wrap" @click="toggleMobileSideMenu()"></b-navbar-toggle>
              </b-nav-item>
              <b-nav-item class="mobile-logo-wrap" @click="goToHomePage()">
                <img src="@/assets/images/logo.svg" alt="logo" />
              </b-nav-item>
              <li class="mobile-search-wrap">
                    <div class="input-wrap">
                      <input
                        id="mobile-search-input"
                        class="mobile-search-input"
                        v-on:input="searchBytitle($event)"
                        v-model="searchValue"
                      />
                      <label for="mobile-search-input" class="icon-wrap">
                        <font-awesome-icon icon="search" class="fa-lg" />
                      </label>
                    </div>
              </li>
            </b-nav>
            <div id="nav-collapse">
              <div class="sub-wrap">
                <b-navbar-nav class="wide-menu">
                  <b-nav-item href="#" class="logo-wrap" @click="goToHomePage()">
                    <img src="@/assets/images/logo.svg" alt="logo" />
                  </b-nav-item>
                  <b-nav-item href="#" class="current-date">
                    <span>{{currentDate.day}} {{currentDate.month}}, {{currentDate.year}}</span>
                    <span>{{currentDate.weekDay}}</span>
                  </b-nav-item>
                  <li class="converter-wrap nav-item">
                    <a class="converter-span" @click="toggleConverterModal()">
                      <span>Currency Converter</span>
                      <font-awesome-icon icon="caret-down" />
                    </a>
                    <converterDesctop :isShowConverterProps="isShowConverterProps"></converterDesctop>
                  </li>
                  <li class="nav-item weather-wrap">
                    <div class="weather-content" @click="toggleWeatherModal()">
                      <div class="top-part">
                        <div class="weather-icon">
                          <img :src="currentWeatherImg" alt />
                        </div>
                        <div class="weather-value-wrap">
                          <div class="weather-value">{{ temp }}</div>

                          <div class="temp-symbol-wrap">
                            <div class="temp-symbol">
                              <span class="degree"></span>

                              <span class="mode" v-bind:class="{ active: isCelsius }">C</span>
                              <span class="mode" v-bind:class="{ active: !isCelsius }">F</span>
                            </div>
                          </div>
                        </div>

                        <span class="weather-dropdown-arrow">
                          <font-awesome-icon icon="caret-down" />
                        </span>
                      </div>
                      <div class="location-name">
                        <p>{{ location }}</p>
                      </div>
                    </div>
                    <weatherDesctop
                      @closeWeatherModal="toggleWeatherModal"
                      :isShowWeatherModalProps="isShowWeatherModalProps"
                    ></weatherDesctop>
                  </li>
                  <li class="nav-item search-wrap">
                    <div class="input-wrap">
                      <label for="search-input" class="icon-wrap">
                        <font-awesome-icon icon="search" class="fa-lg" />
                      </label>
                      <input
                        id="search-input"
                        class="search-input"
                        v-on:input="searchBytitle($event)"
                        v-model="searchValue"
                      />
                    </div>
                    <div class="bell active" @click="showSubscribeFullFun()">
                      <a href="#">
                        <font-awesome-icon icon="bell" class="fa-lg" />
                      </a>
                    </div>
                    <subscribeDesctop :showSubscribeFull="showSubscribeFull"></subscribeDesctop>
                  </li>
                </b-navbar-nav>
              </div>
            </div>
          </b-navbar>
          <moreWeather
            :weatherData="currentWeatherData"
            :isShowMoreWeather="isShowMoreWeather"
            :isWeatherMap="false"
          ></moreWeather>
        </div>
      </div>
      <navigationDesctop v-if='isShowNavigation'></navigationDesctop>
    </div>
  </div>
</template>

<script>
// Vendors
import { mapGetters, mapActions } from "vuex";
import _ from "lodash";
// Components
import weatherDesctop from "@/shared/components/weather";
import subscribeDesctop from "@/shared/components/subscribe";
import navigationDesctop from "@/shared/components/navigation";
import converterDesctop from "@/shared/components/converter";
import moreWeather from "@/shared/components/more-weather";
import mobileMenu from '@/shared/components/mobile-menu';
// Events
import EventBus from "@/eventBus";

export default {
  name: "HeaderDesctop",
  components: {
    weatherDesctop,
    subscribeDesctop,
    navigationDesctop,
    converterDesctop,
    moreWeather,
    mobileMenu,
  },
  computed: mapGetters(["getWeatherData", "getSearchRes"]),
  data() {
    return {
      isShowNavigation: true,
      isCelsius: true,
      searchValue: "",
      currentWeatherData: null,
      isShowSideMenu: false,
      isShowWeatherModalProps: false,
      isShowMoreWeather: false,
      isShowConverterProps: false,
      showSubscribeFull: false,
      temp: "",
      location: "",
      currentWeatherImg: "",
      weekdays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      date: "",
      currentDate: {
        day: "",
        weekDay: "",
        month: "",
        year: ""
      },
      windowWidth: null,
      windowHeight: null,
      isSearchRes: false,
      isMobile: false,
      isPageWithoutNav: false,
    };
  },
  methods: {
    ...mapActions(["search"]),

    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
      if (this.windowWidth <= 767) {
        if (this.isSearchRes) {
          this.isShowNavigation = false;
        }
      } else {
        if (!this.isPageWithoutNav) {
          this.isShowNavigation = true
        }
      }
    },

    getWindowHeight() {
      this.windowHeight = document.documentElement.clientHeight;
    },

    toggleMobileSideMenu() {
      this.isShowSideMenu = !this.isShowSideMenu;
    },

    toggleWeatherModal() {
      this.isShowWeatherModalProps = !this.isShowWeatherModalProps;
    },

    toggleConverterModal() {
      this.isShowConverterProps = !this.isShowConverterProps;
    },

    showSubscribeFullFun() {
      EventBus.$emit("ShowSubscribe");
    },

    goToHomePage() {
      this.$router.push({ name: "Home" });
    },

    changeTemplateWeather(weather) {
      this.temp = weather.main.temp;
      this.temp = this.temp + "";
      this.temp = this.temp.split(".")[0];
      this.location = weather.name;
      this.currentWeatherImg = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    },

    searchBytitle: _.debounce(function(event) {
      this.searchValue = event.target.value;
      const value = event.target.value;
      if (this.searchValue.length > 0) {
        const searchData = { value: value, page: 1 };
        this.search(searchData).then(res => {
          let news = [];
          let totalRes = res.totalResults;
          for (let i = 0; i < res.articles.length; i++) {
            if (res.articles[i].urlToImage && res.articles[i].title && res.articles[i].description) {
              news.push(res.articles[i]);
            } else {
              continue;
            }
          }
          const data = {news: news, searchValue: value, totalRes: totalRes};
          this.searchValue = '';
          localStorage.setItem('currentSearch', JSON.stringify(data));
          this.$router.push({name: "search-results", params: data});
        });
        // newsService.searchByTitle(this.searchValue).then((res) => {
        //     this.currentNews = res.data.articles;
        //     this.isLoaderShow = false;
        //     if (this.currentNews.length === 0) {
        //         this.isNothingFind = true;
        //     }
        //     this.isOverRequest = false;
        // }, (err) => {
        //     if (err) {
        //         this.isOverRequest = true;
        //         this.isLoaderShow = false;
        //     }
        // })
      }
    }, 1000)
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowHeight);

      this.getWindowWidth()
      this.getWindowHeight()
    })

    if (this.$router.history.current.name === 'weather-mobile' || this.$router.history.current.name === 'converter-mobile') {
      this.isShowNavigation = false;
    }

    EventBus.$on("closeConverterModal", () => {
      this.isShowConverterProps = !this.isShowConverterProps;
    });

    EventBus.$on("changeWeatherCity", data => {
      console.log(data);
      this.location = data.city;
    });

    EventBus.$on("changeWeatherAndType", data => {
      this.temp = data.temp;

      if (data.type === "f") {
        this.isCelsius = false;
      } else {
        this.isCelsius = true;
      }
    });

    EventBus.$on("toggleMoreWeather", state => {
      this.currentWeatherData = state.weatherData;
      this.isShowMoreWeather = state.state;
    });

    if (this.getWeatherData.main) {
      this.changeTemplateWeather(this.getWeatherData);
    }

    this.date = new Date();
    this.currentDate.day = this.date.getDate();
    this.currentDate.weekDay = this.weekdays[this.date.getDay()];
    this.currentDate.month = this.months[this.date.getMonth()];
    this.currentDate.year = this.date.getFullYear();
  },
  watch: {
    getWeatherData: function(newVal) {
      this.changeTemplateWeather(newVal);
    },

    $route (to) {
      if (to.name === 'weather-mobile' || to.name === 'converter-mobile') {
        this.isPageWithoutNav = true;
        this.isShowNavigation = false;
      } else if (to.name === 'search-results') {
        this.isSearchRes = true;
        if (this.windowWidth <= 767) {
          this.isShowNavigation = false;
        }
      }
    }
  }
};
</script>

<style>
@import "./../../../assets/css/fonts.css";

/* Bootstrap menu button color */
.top-menu-wrap .mobile-top-menu .navbar-toggler .navbar-toggler-icon{
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(248, 198, 26, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E") !important;
}

</style>

<style scoped>
/* mobile side */
.mobile-top-menu .mobile-side-menu-wrap {
  visibility: hidden;
  width: 0;
}
.mobile-top-menu .mobile-side-menu-wrap .close-link-wrap {
  display: none;
  position: absolute;
}
.mobile-top-menu .mobile-side-menu-wrap .close-link-wrap .close-wrap a {
  position: absolute;
  width: 30px !important;
  height: 30px;
  top: -44px;
  right: 30px;
}
.mobile-top-menu .mobile-side-menu-wrap .close-link-wrap .close-wrap a::after {
  position: absolute;
  content: "";
  width: 30px;
  height: 2px;
  background-color: rgb(248, 198, 26);
  top: 14px;
  right: 0px;
  transform: rotate(-45deg);
}
.mobile-top-menu .mobile-side-menu-wrap .close-link-wrap .close-wrap a::before {
  position: absolute;
  content: "";
  width: 30px;
  height: 2px;
  background-color: rgb(248, 198, 26);
  top: 14px;
  right: 0px;
  transform: rotate(45deg);
}
.sideMenuActive {
  visibility: visible !important;
  width: 82% !important;
  transition: all 0.2s;
}

/* end */
.top-menu-wrap .wide-menu .weather-content .top-part {
  display: flex;
}
.top-menu-wrap .wide-menu .weather-content .top-part .weather-value-wrap {
  display: flex;
  align-items: center;
}
.top-menu-wrap
  .wide-menu
  .weather-content
  .top-part
  .weather-value-wrap
  .temp-symbol-wrap {
  position: relative;
}
.top-menu-wrap
  .wide-menu
  .weather-content
  .top-part
  .weather-value-wrap
  .temp-symbol-wrap
  .temp-symbol {
  position: absolute;
  font-size: 20px;
  top: -22px;
  left: 10px;
}
.top-menu-wrap
  .wide-menu
  .weather-content
  .top-part
  .weather-value-wrap
  .temp-symbol-wrap
  .temp-symbol
  .mode {
  display: none;
}
.top-menu-wrap
  .wide-menu
  .weather-content
  .top-part
  .weather-value-wrap
  .temp-symbol-wrap
  .temp-symbol
  .mode.active {
  display: block;
}
.top-menu-wrap
  .wide-menu
  .weather-content
  .top-part
  .weather-value-wrap
  .temp-symbol-wrap
  .temp-symbol
  .degree::before {
  content: "";
  width: 6px;
  height: 6px;
  border: 1px solid white;
  position: absolute;
  border-radius: 10px;
  top: 6px;
  left: -7px;
}
.converter-wrap a:hover {
  cursor: default;
}
.converter-wrap .converter-span:hover {
  cursor: pointer;
}
.top-menu-wrap .mobile-top-menu {
  display: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.top-menu-wrap .mobile-top-menu li{
  width: 33.3%;
}
.top-menu-wrap .mobile-top-menu li a{
 padding:0;
}
.top-menu-wrap .mobile-top-menu li.mobile-menu-button a{
  text-align: start;
}
.top-menu-wrap .mobile-top-menu .navbar-toggler {
  border: none;
  padding: 0;
}
.top-menu-wrap .mobile-top-menu .mobile-search-wrap svg {
  color: rgb(248, 198, 26);
}
.top-menu-wrap .mobile-top-menu .mobile-search-wrap .input-wrap{
  position: relative;
  display: flex;
  justify-content: space-between;
}
.top-menu-wrap .mobile-top-menu .mobile-search-wrap .input-wrap .icon-wrap{
  right: 16px;
  top: 5px; 
  margin-bottom: 0;
}
.top-menu-wrap .mobile-top-menu .mobile-search-wrap .input-wrap .mobile-search-input:focus {
  border-bottom: 2px solid rgb(248, 198, 26);
}
.top-menu-wrap .mobile-top-menu .mobile-search-wrap .input-wrap .mobile-search-input{
  outline: none;
  background: transparent;
  color: white;
  border: none;
  width: 55%;
  padding: 0 5px 3px 5px;
  border-bottom: 2px solid transparent; 
  padding: 0;
  margin-left: 34%;
}
.top-menu-wrap .mobile-top-menu .mobile-logo-wrap a {
  padding: 0;
}
.top-menu-wrap .mobile-top-menu .mobile-logo-wrap img {
  width: 90px;
}
#nav-collapse .sub-wrap {
  width: 100%;
}
#nav-collapse .sub-wrap .wide-menu {
  font-family: "Poppins-Regular";
  height: 100px;
}
#nav-collapse .sub-wrap .wide-menu .converter-wrap {
  position: relative;
}
#nav-collapse .sub-wrap .wide-menu .converter-wrap svg {
  margin-left: 7px;
}
#nav-collapse .sub-wrap .wide-menu .search-wrap .bell.active {
  height: 100%;
  transform: rotate(0deg);
  animation-name: rotate-bell;
  animation-delay: 0.5s;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-direction: alternate;
  transform-origin: 50% 0%;
  animation-timing-function: ease-in-out;
}
#nav-collapse .sub-wrap .wide-menu .search-wrap {
  display: flex;
  text-align: start;
}
#nav-collapse .sub-wrap .wide-menu .search-wrap a {
  position: relative;
}
#nav-collapse .sub-wrap .wide-menu .search-wrap .input-wrap {
  position: relative;
}
#nav-collapse .sub-wrap .wide-menu .search-wrap .icon-wrap {
  position: absolute;
  right: 41px;
  top: 2px;
}
#nav-collapse .sub-wrap .wide-menu .search-wrap .search-input {
  background: transparent;
  color: white;
  border: none;
  width: 70%;
  padding: 0 5px 3px 5px;
  border-bottom: 2px solid transparent;
}
#nav-collapse .sub-wrap .wide-menu .search-wrap .search-input:focus {
  border-bottom: 2px solid rgb(248, 198, 26);
}
.top-menu-wrap {
  background-color: #052962;
}
.top-menu-wrap .navbar-nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-menu-wrap .wide-menu li a svg,
#nav-collapse .sub-wrap .wide-menu .search-wrap .icon-wrap svg {
  color: rgb(248, 198, 26);
}
.top-menu-wrap .wide-menu li.weather-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
}
.top-menu-wrap .navbar-nav .wide-menu li.weather-wrap p {
  margin-bottom: 0;
}
.top-menu-wrap .navbar-nav li .nav-link {
  padding: 0 !important;
}
.top-menu-wrap .navbar-nav li a span {
  color: #f9f9f9;
}
.top-menu-wrap .navbar-nav li a {
  color: #f9f9f9;
}
.top-menu-wrap .navbar-nav li.nav-item.weather-wrap {
  color: #f9f9f9;
  height: 100%;
}
.top-menu-wrap .navbar {
  background-color: #052962 !important;
  padding: 0;
}
.top-menu-wrap .navbar-brand {
  padding: 0;
}
.top-menu-wrap .wide-menu .current-date a {
  display: flex;
  flex-direction: column;
  cursor: default;
}
.top-menu-wrap .wide-menu .nav-item .weather-content {
  position: relative;
}
.top-menu-wrap .wide-menu .nav-item .weather-content .weather-icon img {
  width: 70px;
}
.top-menu-wrap .wide-menu li.weather-wrap .weather-dropdown-arrow {
  position: absolute;
  top: 40px;
  right: -55px;
  color: rgb(248, 198, 26);
}
.top-menu-wrap .wide-menu li.weather-wrap .location-name {
  text-align: end;
}
.top-menu-wrap .weather-value {
  font-family: "Poppins-Regular";
  font-size: 28px;
}

/* Media */
@media (max-width: 767px) {
  .bottom-menu {
    padding: 10px 0;
  }
  .top-menu-wrap .mobile-top-menu {
    display: flex;
  }
  #nav-collapse .sub-wrap {
    padding-top: 58px;
    height: 100%;
  }
  #nav-collapse .sub-wrap .wide-menu {
    display: none;
  }
  .top-menu-wrap #nav-collapse .close-link-wrap {
    display: block;
  }
  #nav-collapse .navbar-nav :nth-child(3) {
    order: 7;
  }
  #nav-collapse .navbar-nav svg.fa-caret-down {
    transform: rotate(-90deg);
  }
  #nav-collapse .weather-dropdown-arrow {
    position: unset;
  }
  .top-menu-wrap .top-menu {
    position: unset;
  }
  #nav-collapse .weather-content .wide-menu {
    display: flex;
  }
  #nav-collapse .navbar-nav {
    align-items: flex-start;
  }
}
@media (max-width: 1139px) {
  #nav-collapse .sub-wrap .wide-menu {
    font-size: 12px;
  }
  #nav-collapse .sub-wrap .wide-menu .search-wrap .icon-wrap{
    right: 32px;
  }
}
@media (max-width: 991px) {
  .carousel-caption .slide-title span {
    font-size: 28px;
  }
  .top-menu-wrap .navbar-collapse .search-wrap a svg {
    margin: 0 10px;
  }
}
@keyframes rotate-bell {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(30deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@media (min-width: 768px) {
  .modile-side-weather-wrap {
    display: none;
  }
  #nav-collapse {
    width: 100%;
  }
}
@media (min-width: 1140px) {
  .container {
    max-width: 1638px !important;
  }
}
@media (max-width: 1139px) {
  .container {
    max-width: 814px !important;
  }
  #nav-collapse .sub-wrap .wide-menu .search-wrap {
    margin-left: 55px;
  }
}
</style>