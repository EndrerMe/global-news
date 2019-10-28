<template>
    <div>
    <div class="dark-screen"></div>
    <!-- Header -->
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
                    <b-nav-item href="#" class="converter-wrap">
                      <span>
                        <span>Currency Converter</span>
                        <font-awesome-icon icon="caret-down" />
                      </span>
                    </b-nav-item>
                    <b-nav-item href="#" class="weather-wrap">
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
            </b-navbar>

            <div class="modile-side-weather-wrap">
              <div class="mobile-weather-main-wrap">
                <div class="title-wrap section-elem">
                  <span>Weather</span>
                </div>
                <div class="location-wrap section-elem">
                  <span>Glasgow</span>
                </div>

                <div class="weather-data-wrap">
                  <div class="clouds">
                    <span class="icon">
                      <img src="../../../assets/images/cloud.svg" alt="cloud" />
                    </span>
                    <span class="cloud-state">Broken Clouds</span>
                  </div>

                  <div class="temp-value-wrap">
                    <span class="temp-value">+9</span>
                    <span class="temp-symbol">
                      <span class="activeMode active">&#8451;</span>
                      <span class="activeMode">F</span>
                    </span>
                  </div>
                </div>

                <div class="seacrh-country-wrap">
                  <div class="text-wrap">
                    <p>
                      Did you mean
                      <span class="serch-result">London</span> ?
                    </p>
                  </div>

                  <div class="country-wrap">
                    <span>Lond</span>
                  </div>
                  <div class="button-wrap">
                    <button href="#">Search</button>
                  </div>
                </div>

                <div class="links-wrap">
                  <!-- Weater Details -->
                  <div class="mobile-weather-details-wrap">
                    <div class="links-wrap">
                      <div class="left-link">
                        <a href="#">
                          More
                          <font-awesome-icon icon="caret-down" />
                        </a>
                      </div>
                      <div class="right-link">
                        <a href="#">Weather Map</a>
                      </div>
                    </div>

                    <div class="sides-wrap">
                      <div class="left-side">
                        <div class="temp-info-wrap">
                          <div class="temp-value-wrap info-elem">
                            <p>
                              <span class="cwitch">Show weather in :</span>
                              <span class="temp-symbol">
                                <span>F</span>
                                <span>&#8451;</span>
                              </span>
                            </p>
                            <p>Place : London</p>
                          </div>
                          <div class="show-info-wrap info-elem">
                            <p>
                              Min Temperature :
                              <span class="temp-value">
                                14
                                <span class="temp-val-symbol"></span>
                              </span>
                            </p>
                            <p>
                              Max Temperature :
                              <span class="temp-value">
                                14
                                <span class="temp-val-symbol"></span>
                              </span>
                            </p>
                            <p>
                              Temperature :
                              <span class="temp-value">
                                14
                                <span class="temp-val-symbol"></span>
                              </span>
                            </p>
                          </div>
                          <div class="additional-info info-elem">
                            <p class>
                              Humidity :
                              <span class="value">28</span>
                            </p>
                            <p class>
                              Wind Speed :
                              <span class="value">3</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="right-side">
                        <div class="wrap">
                          <span class="icon-wrap">
                            <img src="../../../assets/images/cloud.svg" alt="cloud" />
                          </span>
                          <span class="text">Broken Clouds</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Weater Map Mobile  -->
              <div class="mobile-weather-details-wrap" style="display:none">
                <div class="sides-wrap">
                  <div class="weather-map left-side">
                    <div class="temp-info-wrap">
                      <div class="temp-value-wrap info-elem">
                        <p>
                          <span class="cwitch">Show weather in :</span>
                          <span class="temp-symbol">
                            <span>F</span>
                            <span>&#8451;</span>
                          </span>
                        </p>
                        <p>Place : London</p>
                      </div>
                      <div class="show-info-wrap info-elem">
                        <p>
                          Min Temperature :
                          <span class="temp-value">
                            14
                            <span class="temp-val-symbol"></span>
                          </span>
                        </p>
                        <p>
                          Max Temperature :
                          <span class="temp-value">
                            14
                            <span class="temp-val-symbol"></span>
                          </span>
                        </p>
                        <p>
                          Temperature :
                          <span class="temp-value">
                            14
                            <span class="temp-val-symbol"></span>
                          </span>
                        </p>
                      </div>
                      <div class="additional-info info-elem">
                        <p class>
                          Humidity :
                          <span class="value">28</span>
                        </p>
                        <p class>
                          Wind Speed :
                          <span class="value">3</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right-side">
                    <div class="wrap">
                      <span class="icon-wrap">
                        <img src="../../../assets/images/cloud.svg" alt="cloud" />
                      </span>
                      <span class="text">Broken Clouds</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Subscribe Prompt Mobile-->

              <div class="mobile-notify-prompt-wrap" style="display:none">
                <div class="close-wrap">
                  <a class="close-button" href="#"></a>
                </div>

                <div class="text-wrap">
                  <p>You subscribe on</p>
                  <p class="dropdown">
                    <span>All News</span>
                    <span class="wropdown-arrow">
                      <font-awesome-icon icon="caret-down" />
                    </span>
                  </p>
                </div>
                <div class="send-email-wrap">
                  <div class="email-wrap">
                    <span>E-mail</span>
                  </div>
                  <div class="button-wrap">
                    <button href="#">Subscribe</button>
                  </div>
                </div>
              </div>

              <!-- Mobile footer -->
              <footer>
                <div class="container content">
                  <div class="content-wrap">
                    <div class="left-item">
                      <img src="../../../assets/images/logo.svg" alt="logo" />
                    </div>
                    <div class="center-item">
                      <span class="text">Copyright © 2019 Global New. All rights reserved</span>
                    </div>
                    <div class="right-item">
                      <button>Subscribe Us</button>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
        <div class="bottom-menu-wrap">
          <div class="container">
            <div class="box-menu">
              <b-nav class="bottom-menu">
                <b-nav-item>
                  <router-link class="link" :to="{ name: `business` }">Business</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="link" :to="{ name: `entertainment` }">Entertainment</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="link" :to="{ name: `general` }">General</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="link" :to="{ name: `health` }">Health</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="link" :to="{ name: `science` }">Science</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="link" :to="{ name: `sport` }">Sport</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="link" :to="{ name: `technology` }">Technology</router-link>
                </b-nav-item>
              </b-nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            isShowSideMenu: false,
        }
    },
    methods: {
        toggleMobileSideMenu() {
            this.isShowSideMenu = !this.isShowSideMenu;
        },
    }
}
</script>

<style scoped>
.bottom-menu-wrap {
  height: 120px;
  display: flex;
  align-items: center;
}
.top-menu-wrap {
  background-color: #052962;
}
.bottom-menu {
  background-color: unset !important;
  justify-content: center !important;
}

.bottom-menu li a a {
  color: #3f3f3f;
  font-size: 26px;
  font-weight: bold;
  text-decoration: none;
}

.bottom-menu li a:hover {
  color: #f8c61a !important;
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
@media (max-width: 1199px) {
  .bottom-menu ul li a span {
    font-size: 23px;
  }
}
@media (max-width: 991px) {
  .bottom-menu ul li a span {
    font-size: 17px;
  }

  /* .bottom-menu li a a{
    font-size:12px !important;
  } */
}

.modile-side-weather-wrap {
  overflow: scroll;
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
  margin-top: 15px;
  font-size: 13px;
  font-weight: bold;
}
.mobile-weather-details-wrap .show-info-wrap {
  text-align: start;
}
.mobile-weather-details-wrap .show-info-wrap .temp-val-symbol {
  position: relative;
  margin-left: 5px;
}
.mobile-weather-details-wrap .show-info-wrap .temp-val-symbol::before {
  content: "";
  width: 7px;
  height: 7px;
  position: absolute;
  border: 1px solid #a09f9f;
  border-radius: 10px;
}
.mobile-weather-details-wrap .temp-symbol span {
  margin: 0 7px;
}
.mobile-weather-details-wrap .temp-symbol {
  position: relative;
}

.mobile-weather-details-wrap .temp-symbol::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 16px;
  background-color: white;
  left: 22px;
  top: 0px;
}
.mobile-weather-details-wrap .temp-value-wrap {
  text-align: start;
}

.mobile-weather-details-wrap .temp-info-wrap p {
  margin-bottom: 3px;
}
.mobile-weather-details-wrap .temp-info-wrap {
  color: #f9f9f9;
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

/* Weather */
.mobile-weather-main-wrap {
  padding: 0 15px 40px 15px;
}
.mobile-weather-main-wrap .section-elem {
  display: flex;
  justify-content: center;
  color: white;
}
.mobile-weather-main-wrap .title-wrap {
  padding: 30px 0;
}
.mobile-weather-main-wrap .location-wrap {
  color: white;
}
.mobile-weather-main-wrap .links-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
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
.mobile-weather-main-wrap .seacrh-country-wrap .serch-result {
  color: rgb(248, 198, 26) !important;
}
.mobile-weather-main-wrap .seacrh-country-wrap .text-wrap {
  color: white;
}
.mobile-weather-main-wrap .weather-data-wrap .button-wrap {
  margin-top: 23px;
}
.mobile-weather-main-wrap .country-wrap span {
  color: #eaeaea;
  display: block;
  width: 100%;
  border-bottom: 1px solid;
  text-align: start;
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
  letter-spacing: 1px;
}
.mobile-weather-main-wrap .weather-data-wrap {
  display: flex;
  color: #d6d6d6;
  display: flex;
  justify-content: center;
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
  padding-right: 55px;
}
.mobile-weather-main-wrap .weather-data-wrap .temp-value-wrap .temp-value {
  font-size: 38px;
}
.mobile-weather-main-wrap .weather-data-wrap .temp-value-wrap .temp-symbol {
  position: absolute;
  top: 0;
  font-size: 26px;
  left: 32px;
}
.mobile-weather-main-wrap
  .weather-data-wrap
  .temp-value-wrap
  .temp-symbol
  .activeMode.active {
  color: rgb(248, 198, 26);
}
.mobile-weather-main-wrap
  .weather-data-wrap
  .temp-value-wrap
  .temp-symbol
  span {
  margin: 0 8px;
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
  left: 42px;
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
  position: absolute;
  top: 58px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #052962;
  z-index: 999;
  border-top: 1px solid;
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

</style>