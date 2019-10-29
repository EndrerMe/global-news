<template>
  <div class="header-wrap">
    <div class="header-content">
      <div class="top-menu-wrap">
        <div class="container">
          <b-navbar class="top-menu" toggleable="md" type="dark" variant="info">
            
            <b-nav class="mobile-top-menu">
              <b-navbar-toggle target="nav-collapse" @click="toggleMobileSideMenu()"></b-navbar-toggle>
              <b-nav-item class="mobile-logo-wrap">
                <img src="../../../assets/images/logo.svg" alt="logo" />
              </b-nav-item>
              <b-nav-item class="mobnile-search-wrap">
                <font-awesome-icon icon="search" class="fa-lg" />
              </b-nav-item>
            </b-nav>

            <div
                id="nav-collapse"
                class="showTest"
                v-bind:class="{ sideMenuActive: isShowSideMenu }"
              >
                <div class="sub-wrap">
                  <b-navbar-nav class="wide-menu">
                    <b-nav-item class="close-link-wrap">
                      <div class="close-wrap" @click="toggleMobileSideMenu()">
                        <a href="#"></a>
                      </div>
                    </b-nav-item>
                    <b-nav-item href="#" class="logo-wrap">
                      <img src="../../../assets/images/logo.svg" alt="logo" />
                    </b-nav-item>
                    <b-nav-item href="#" class="current-date">
                      <span>October 8, 2019</span>
                      <span>Tuesday</span>
                    </b-nav-item>
                    <b-nav-item href="#" class="converter-wrap" @click='toggleConverterModal()'>
                      <span>
                        <span>Currency Converter</span>
                        <font-awesome-icon icon="caret-down" />
                      </span>
                    </b-nav-item>
                    <b-nav-item href="#" class="weather-wrap" @click='toggleWeatherModal()'>
                      <span class="weather-content">
                        <span>
                          <img src="../../../assets/images/cloud.svg" alt="cloud" />
                        </span>
                        <span class="weather-value">
                          + 9
                          <span class="celsius-value">&#8451;</span>
                        </span>
                        <span class="weather-dropdown-arrow">
                          <font-awesome-icon icon="caret-down" />
                        </span>
                        <p>Glasgow</p>
                      </span>
                    </b-nav-item>
                    <b-nav-item href="#" class="search-wrap">
                      <font-awesome-icon icon="search" class="fa-lg" />
                      <font-awesome-icon icon="bell" class="fa-lg" />
                    </b-nav-item>
                  </b-navbar-nav>
                  <b-navbar-nav class="mobile-side-menu">
                    <b-nav-item class="close-link-wrap">
                      <div class="close-wrap" @click="toggleMobileSideMenu()">
                        <a class="close-button" href="#"></a>
                      </div>
                    </b-nav-item>
                    <b-nav-item href="#" class="wrap">
                      <div class="top-side-wrap">
                        <span class="sub-item">
                          Currency Converter
                          <font-awesome-icon icon="caret-down" />
                        </span>
                        <span class="sub-item">
                          Weather
                          <font-awesome-icon icon="caret-down" />
                        </span>
                      </div>
                    </b-nav-item>
                    <b-nav-item href="#">
                      <div class="bottom-side-wrap">
                        <div class="sub-item date">
                          <span>October 8, 2019</span>
                          <span>Tuesday</span>
                        </div>
                        <div class="sub-item">
                          <button>Subscribe Us</button>
                        </div>
                      </div>
                    </b-nav-item>
                  </b-navbar-nav>
                </div>
              </div>

              <subscribeDesctop></subscribeDesctop>
              <weatherDesctop :isShowWeatherModal='isShowWeatherModal' :isShowConverter='isShowConverter'></weatherDesctop>
          </b-navbar>
        </div>
      </div>

      <navigationDesctop></navigationDesctop>

    </div>
  </div>
</template>

<script>
import weatherDesctop from './../../components/weather';
import subscribeDesctop from './../../components/subscribe';
import navigationDesctop from './../../components/navigation';

export default {
    name: 'HeaderDesctop',
    components: {
      weatherDesctop,
      subscribeDesctop,
      navigationDesctop
    },
    data() {
        return {
            isShowSideMenu: false,
            isShowWeatherModal: false,
            isShowConverter: false,
        }
    },
    methods: {
        toggleMobileSideMenu() {
            this.isShowSideMenu = !this.isShowSideMenu;
        },

        toggleWeatherModal() {
          this.isShowWeatherModal = !this.isShowWeatherModal;
        },

        toggleConverterModal() {
          this.isShowConverter = !this.isShowConverter;
        }
    }
}
</script>

<style scoped>
.sideMenuActive {
  visibility: visible !important;
  width: 82% !important;
  transition: all 0.2s;
}
#nav-collapse {
  width: 0;
}
#nav-collapse .sub-wrap .mobile-side-menu .nav-item .top-side-wrap {
  display: flex;
  flex-direction: column;
}
#nav-collapse .sub-wrap .mobile-side-menu .nav-item a .top-side-wrap .sub-item {
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  margin-top: 20px;
}
#nav-collapse
  .sub-wrap
  .mobile-side-menu
  .nav-item
  a
  .top-side-wrap
  .sub-item
  svg {
  color: rgb(248, 198, 26);
}
#nav-collapse .sub-wrap .mobile-side-menu .nav-item a .bottom-side-wrap {
  padding-bottom: 20px;
}
#nav-collapse
  .sub-wrap
  .mobile-side-menu
  .nav-item
  a
  .bottom-side-wrap
  .sub-item.date {
  padding-bottom: 35px;
}
#nav-collapse
  .sub-wrap
  .mobile-side-menu
  .nav-item
  a
  .bottom-side-wrap
  .sub-item {
  display: flex;
  flex-direction: column;
  padding: 0 15px;
}
#nav-collapse .sub-wrap .mobile-side-menu .nav-item a .bottom-side-wrap button {
  text-transform: none;
  background: #f8c61a;
  border: none;
  height: 30px;
  color: #052962;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1px;
}
.top-menu-wrap #nav-collapse .close-link-wrap {
  display: none;
  position: absolute;
}
.top-menu-wrap #nav-collapse .close-wrap a {
  position: absolute;
  width: 30px !important;
  height: 30px;
  top: -44px;
  right: 30px;
}
.top-menu-wrap #nav-collapse .close-wrap a::after {
  position: absolute;
  content: "";
  width: 30px;
  height: 2px;
  background-color: rgb(248, 198, 26);
  top: 14px;
  right: 0px;
  transform: rotate(-45deg);
}
.top-menu-wrap #nav-collapse .close-wrap a::before {
  position: absolute;
  content: "";
  width: 30px;
  height: 2px;
  background-color: rgb(248, 198, 26);
  top: 14px;
  right: 0px;
  transform: rotate(45deg);
}
.top-menu-wrap .mobile-top-menu {
  display: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.top-menu-wrap .mobile-top-menu .navbar-toggler {
  border: none;
}
.top-menu-wrap .mobile-top-menu .mobnile-search-wrap svg {
  color: rgb(248, 198, 26);
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
#nav-collapse .sub-wrap .mobile-side-menu {
  display: none;
}
#nav-collapse .sub-wrap .mobile-side-menu .nav-item.wrap {
  border-top: 1px solid #6d6d6d;
}

@media (max-width: 767px) {
  .bottom-menu-wrap {
    height: unset !important;
  }
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
  #nav-collapse .sub-wrap .mobile-side-menu {
    display: flex;
    height: 100%;
  }
  #nav-collapse .sub-wrap .mobile-side-menu .nav-item {
    display: flex;
    width: 100%;
  }
  #nav-collapse .sub-wrap .mobile-side-menu .nav-item a {
    width: 100%;
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
@media (max-width: 1199px) {
  .bottom-menu-wrap .bottom-menu li a {
    font-size: 22px;
  }
}
@media (max-width: 991px) {
  .bottom-menu-wrap .bottom-menu li a {
    font-size: 15px !important;
  }
  .carousel-caption .slide-title span {
    font-size: 28px;
  }
  .top-menu-wrap .navbar-collapse .search-wrap a svg {
    margin: 0 10px;
  }
  .top-menu-wrap .navbar-collapse .search-wrap {
    margin-left: 10px;
  }
}
@media (max-width: 767px) {
  .bottom-menu-wrap .bottom-menu {
    flex-wrap: unset;
  }
  .bottom-menu-wrap .box-menu {
    overflow: scroll !important;
    display: flex;
  }
}
/* Header */
@media (max-width: 1139px) {
  .bottom-menu-wrap .bottom-menu li a {
    font-size: 18px;
  }
  .bottom-menu-wrap {
    height: 100px;
  }
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
.top-menu-wrap .wide-menu li a svg {
  margin: 0 20px;
  color: rgb(248, 198, 26);
}
.top-menu-wrap .wide-menu li.weather-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
}
.top-menu-wrap .wide-menu li.weather-wrap .weather-dropdown-arrow {
  position: absolute;
  top: 25px;
  right: -46px;
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
.top-menu-wrap .navbar-nav li .nav-item {
  color: #f9f9f9;
}
.top-menu-wrap .navbar {
  background-color: #052962 !important;
  padding: 9px 0;
}
.top-menu-wrap .navbar-brand {
  padding: 0;
}
.top-menu-wrap .wide-menu .current-date a {
  display: flex;
  flex-direction: column;
}
.top-menu-wrap .weather-value {
  font-family: "Semibold";
  font-size: 28px;
}
.top-menu-wrap .weather-value .celsius-value {
  font-size: 20px;
  position: absolute;
}

@media (min-width: 768px) {
  .modile-side-weather-wrap {
    display: none;
  }
  #nav-collapse {
    width: 100%;
  }
}
@media (max-width: 767px) {
  #nav-collapse {
    visibility: hidden;
    position: absolute;
    background: #052962;
    z-index: 9999;
    top: 0px;
    left: 0;
    bottom: 0;
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
}
</style>