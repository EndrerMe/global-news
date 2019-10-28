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
                  <img src="../../../../assets/images/logo.svg" alt="logo" />
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
                      <img src="../../../../assets/images/logo.svg" alt="logo" />
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
                          <img src="../../../../assets/images/cloud.svg" alt="cloud" />
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


                  <!-- Subscribe -->

                <div class="subscribe-prompt-wrap"  v-wow="{ 'animation-name': 'bounceInRight','animation-duration': '1s', 'animation-delay':'3s' }">
      <div class="close-wrap">
        <a href="#"></a>
      </div>
      <div class="text-wrap">
        <span>Do you want to receive more news ?</span>
      </div>
      <div class="button-wrap">
        <button href="#">Subscribe Us</button>
      </div>
    </div>



            </b-navbar>
            <!-- Mobile Side Weather -->
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
                      <img src="../../../../assets/images/cloud.svg" alt="cloud" />
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
                  <!-- Mobile Weater Details -->
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
                            <img src="../../../../assets/images/cloud.svg" alt="cloud" />
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
                        <img src="../../../../assets/images/cloud.svg" alt="cloud" />
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
                      <img src="../../../../assets/images/logo.svg" alt="logo" />
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
    <div class="container content">
      <!-- Slider -->

      <div class="slider-wrap">
        <b-carousel
          id="carousel-1"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
        >
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
            <div class="slide-title">
              <span>White House vows to boycott impeachment</span>
            </div>
          </b-carousel-slide>
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <div class="slide-title">
              <span>Second Slide</span>
            </div>
          </b-carousel-slide>
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
            <div class="slide-title">
              <span>Third Slide</span>
            </div>
          </b-carousel-slide>
        </b-carousel>
      </div>
      <!-- Business -->
      <div class="business-wrap">
        <div class="title-wrap" data-aos="fade-right" data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
         >
          <span class="title-text" >Business</span>
        </div>
        <slick ref="slick" :options="slickOptions">
          <div class="card-wrap">
            <b-card class="card mb-2 new-card col-md-12">
              <b-card-img :src="require('../../../../assets/images/business/img-1.png')"></b-card-img>
              <b-card-text>
                A mobile version of video game Call of Duty has been downloaded
                more than 100 million times in its first week...
              </b-card-text>
              <template v-slot:footer>
                <small class="text-muted">6 min ago</small>
                <small class="text-muted">bbc.com</small>
              </template>
            </b-card>
          </div>
          <div class="card-wrap">
            <b-card class="mb-2 new-card col-md-12">
              <b-card-img :src="require('../../../../assets/images/business/img-2.png')"></b-card-img>
              <b-card-text>
                All 555 Thomas Cook shops are to be bought by rival Hays Travel
                in a move that could save up to 2,500 jobs. The
                independent...
              </b-card-text>
              <template v-slot:footer>
                <small class="text-muted">Yestesday</small>
                <small class="text-muted">sourcelink.com</small>
              </template>
            </b-card>
          </div>
          <div class="card-wrap">
            <b-card class="mb-2 new-card col-md-12">
              <b-card-img :src="require('../../../../assets/images/business/img-3.png')"></b-card-img>
              <b-card-text>
                Goldman Sachs will review its involvement in the planned stock
                market listing of Chinese artificial intelligence firm
                Megvii...
              </b-card-text>
              <template v-slot:footer>
                <small class="text-muted">October 10, 2019</small>
                <small class="text-muted">sourcelink.com</small>
              </template>
            </b-card>
          </div>
        </slick>
      </div>
      <!-- Entertainmenet -->
      <div class="entertainment-wrap" >

        <div class="title-wrap" data-aos="fade-right" data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
         >

          <span class="title-text" >Entertainment</span>
        </div>
        <slick ref="slick" :options="slickOptions">
          <div class="card-wrap">
            <b-card class="mb-2 new-card">
              <b-card-img :src="require('../../../../assets/images/business/img-4.png')"></b-card-img>
              <b-card-text>
                On World Mental Health Day, a disabled presenter shares her
                simple secrets of happiness. Jessica Kellgren-Fozard gets
                a...
              </b-card-text>
              <template v-slot:footer>
                <small class="text-muted">6 min ago</small>
                <small class="text-muted">bbc.com</small>
              </template>
            </b-card>
          </div>
          <div class="card-wrap">
            <b-card class="mb-2 new-card">
              <b-card-img :src="require('../../../../assets/images/business/img-5.png')"></b-card-img>
              <b-card-text>
                The Nobel Prize for Literature is set to be awarded on
                Thursday. Twice. The Handmaid's Tale author Margaret Atwood,
                fellow...
              </b-card-text>
              <template v-slot:footer>
                <small class="text-muted">Yestesday</small>
                <small class="text-muted">sourcelink.com</small>
              </template>
            </b-card>
          </div>
          <div class="card-wrap">
            <b-card class="mb-2 new-card">
              <b-card-img :src="require('../../../../assets/images/business/img-6.png')"></b-card-img>
              <b-card-text>
                Rihanna's confirmed she turned down the Superbowl halftime show
                to support Colin Kaepernick. The former San
                Francisco...
              </b-card-text>
              <template v-slot:footer>
                <small class="text-muted">October 10, 2019</small>
                <small class="text-muted">sourcelink.com</small>
              </template>
            </b-card>
          </div>
        </slick>
      </div>
      <!-- Science -->
      <div class="science-wrap" data-aos="fade-right" data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
         >
        <div class="title-wrap">
          <span class="title-text">Science</span>
        </div>
        <slick ref="slick" :options="slickOptions">
          <div class="card-wrap">
            <b-card class="mb-2 new-card">
              <b-card-img :src="require('../../../../assets/images/business/img-7.png')"></b-card-img>
              <b-card-text>
                Culling badgers drives them to roam further afield, allowing
                them to disperse tuberculosis over a larger area,
                new...
              </b-card-text>
              <template v-slot:footer>
                <small class="text-muted">6 min ago</small>
                <small class="text-muted">bbc.com</small>
              </template>
            </b-card>
          </div>
          <div class="card-wrap">
            <b-card class="mb-2 new-card">
              <b-card-img :src="require('../../../../assets/images/business/img-8.png')"></b-card-img>
              <b-card-text>
                Three scientists have been awarded the 2019 Nobel Prize in
                Physics for "ground-breaking" discoveries about the
                Universe...
              </b-card-text>
              <template v-slot:footer>
                <small class="text-muted">Yestesday</small>
                <small class="text-muted">sourcelink.com</small>
              </template>
            </b-card>
          </div>
          <div class="card-wrap">
            <b-card class="mb-2 new-card">
              <b-card-img :src="require('../../../../assets/images/business/img-9.png')"></b-card-img>
              <b-card-text>
                Antarctica's Emperor penguins could be in real difficulty come
                2100 if the climate warms as expected. Experts say the
                birds...
              </b-card-text>
              <template v-slot:footer>
                <small class="text-muted">October 10, 2019</small>
                <small class="text-muted">sourcelink.com</small>
              </template>
            </b-card>
          </div>
        </slick>
      </div>
    </div>
    <!-- Footer -->
    <footer>
      <div class="container content">
        <div class="content-wrap">
          <div class="left-item">
            <img src="../../../../assets/images/logo.svg" alt="logo" />
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
</template>

<script>
import Slick from "vue-slick";

export default {
  components: { 
    Slick 
  },
  data() {
    return {
      isShowSideMenu: false,
      slickOptions: {
        slidesToShow: 1,
        infinite: true,
        accessibility: true,
        adaptiveHeight: true,
        arrows: true,
        dots: true,
        draggable: true,
        edgeFriction: 0.3,
        swipe: true
      }
    };
  },
  methods: {
    toggleMobileSideMenu() {
      this.isShowSideMenu = !this.isShowSideMenu;
    },
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$refs.slick.reSlick();
    }
  },
};
</script>

<style>
@import "../../../../../node_modules/slick-carousel/slick/slick.css";

#app{
  overflow:hidden;
}

/* Subscribe */
.subscribe-prompt-wrap {
  width: 381px;
  padding-bottom: 40px;
  border: 1px solid;
  position: absolute;
  right: -15px;
  top: 102px;
  background-color: #052962;
  z-index: 999;
}

.subscribe-prompt-wrap .close-wrap a {
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  top: 24px;
  right: 23px;
}
.subscribe-prompt-wrap .close-wrap a::before {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 7px;
  right: 0px;
  transform: rotate(45deg);
}

.subscribe-prompt-wrap .close-wrap a::after {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 7px;
  right: 0px;
  transform: rotate(-45deg);
}

.subscribe-prompt-wrap .text-wrap {
  margin-top: 90px;
  padding: 0px 115px;
}
.subscribe-prompt-wrap .text-wrap span {
  color: #eaeaea;
}

.subscribe-prompt-wrap .button-wrap {
  margin-top: 37px;
}

.subscribe-prompt-wrap .button-wrap button {
  width: 242px;
  height: 48px;
  background-color: #f8c61a;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.subscribe-prompt-wrap .button-wrap button:hover {
  background-color: #ffe076;
}


/* Slick Slider */
.slick-slider {
  margin-top: 30px;
}
.slick-slider .slick-dots {
  display: none !important;
}
.slick-slider button.slick-prev,
.slick-slider button.slick-next:focus {
  outline: none;
}
.slick-slider button.slick-prev {
  position: absolute;
  top: -49px;
  right: 50px;
  color: transparent;
  background: transparent;
  border: none;
  width: 30px;
}
.slick-slider button.slick-prev::before {
  right: 8px;
  position: absolute;
  content: "";
  width: 10px;
  height: 10px;
  border-left: 2px solid #4e3535;
  border-bottom: 2px solid #4e3535;
  transform: rotate(45deg);
  top: 8px;
}
.slick-slider button.slick-next {
  position: absolute;
  top: -49px;
  right: 15px;
  color: transparent;
  background: transparent;
  border: none;
  width: 30px;
}
.slick-slider button.slick-next::before {
  position: absolute;
  content: "";
  width: 10px;
  height: 10px;
  border-right: 2px solid #4e3535;
  border-bottom: 2px solid #4e3535;
  transform: rotate(-45deg);
  top: 8px;
  left: 8px;
}
</style>

<style scoped>
/* Hide elements for mibile 
Subscribe : class = 'mobile-notify-prompt-wrap'
Dark Screen :  class = 'dark-screen'

Weather Menu : class = 'modile-side-weather-wrap'
*/

/* Notify */
.mobile-notify-prompt-wrap .text-wrap p {
  color: #eaeaea;
}
.mobile-notify-prompt-wrap .text-wrap p.dropdown {
  font-size: 22px;
  font-family: initial;
  margin-right: 10px;
  font-weight: bold;
}
.mobile-notify-prompt-wrap .send-email-wrap {
  display: inline-flex;
  flex-direction: column;
  margin-top: 10px;
}
.mobile-notify-prompt-wrap .button-wrap {
  margin-top: 23px;
}
.mobile-notify-prompt-wrap .email-wrap span {
  color: #eaeaea;
  display: block;
  width: 100%;
  border-bottom: 1px solid;
  text-align: start;
}
.mobile-notify-prompt-wrap .button-wrap button {
  width: 242px;
  height: 48px;
  background-color: #f8c61a;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.mobile-notify-prompt-wrap .button-wrap button:hover {
  background-color: #ffe076;
}
.mobile-notify-prompt-wrap {
  padding-bottom: 45px;
  border: 1px solid;
  background-color: #052962;
  z-index: 999;
}
.mobile-notify-prompt-wrap .close-wrap {
  position: relative;
}
.mobile-notify-prompt-wrap .close-wrap a {
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  top: 24px;
  right: 23px;
}
.mobile-notify-prompt-wrap .close-wrap a::before {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 8px;
  right: 2px;
  transform: rotate(45deg);
}
.mobile-notify-prompt-wrap .close-wrap a::after {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 8px;
  right: 2px;
  transform: rotate(-45deg);
}
.mobile-notify-prompt-wrap .text-wrap {
  margin-top: 50px;
  padding: 0px 90px;
  color: #f8c61a;
}
.mobile-notify-prompt-wrap .wropdown-arrow {
  margin-left: 10px;
  font-size: 20px;
  font-size: 14px;
}
.mobile-notify-prompt-wrap .text-wrap p {
  color: #eaeaea;
  margin-bottom: 2px;
}
.mobile-notify-prompt-wrap .send-email-wrap {
  display: inline-flex;
  flex-direction: column;
  margin-top: 10px;
}
.mobile-notify-prompt-wrap .button-wrap {
  margin-top: 10px;
}
.mobile-notify-prompt-wrap .email-wrap span {
  color: #eaeaea;
  display: block;
  width: 100%;
  border-bottom: 1px solid;
  text-align: start;
}
.mobile-notify-prompt-wrap .button-wrap button {
  height: 32px;
  background-color: #f8c61a;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.mobile-notify-prompt-wrap .button-wrap button:hover {
  background-color: #ffe076;
}

/* Weater Details */
.modile-side-weather-wrap {
  display: none;
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
</style>

<style scoped>
/* Header */

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

/* Common */
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
/* Slider */
@media (max-width: 1199px) {
  .carousel-caption .slide-title span {
    font-size: 34px;
  }
}
@media (max-width: 767px) {
  .carousel-caption .slide-title span {
    font-size: 24px !important;
  }
}
@media (max-width: 575px) {
  .carousel-caption .slide-title span {
    font-size: 20px !important;
  }
}
/* Content */
@media (max-width: 1199px) {
  .business-wrap .title-wrap .title-text,
  .entertainment-wrap .title-wrap .title-text,
  .science-wrap .title-wrap .title-text {
    font-size: 28px;
  }
}
@media (max-width: 1139px) {
  .business-wrap .title-wrap .title-text,
  .entertainment-wrap .title-wrap .title-text,
  .science-wrap .title-wrap .title-text {
    font-size: 20px;
  }
}
@media (max-width: 767px) {
  .business-wrap .title-wrap .title-text,
  .entertainment-wrap .title-wrap .title-text,
  .science-wrap .title-wrap .title-text {
    font-size: 16px;
  }
  .business-wrap,
  .entertainment-wrap,
  .science-wrap {
    margin-top: 30px;
  }
}
@media (max-width: 575px) {
  .business-wrap .title-wrap .title-text,
  .entertainment-wrap .title-wrap .title-text,
  .science-wrap .title-wrap .title-text {
    font-size: 12px;
    letter-spacing: 5px;
  }
  .slick-slider {
    margin-top: 20px;
  }
}
</style>

<style>
/* Common */
.dark-screen {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.5);
  z-index: 999999;
  display: none;
}

/* Slider */
.carousel-caption {
  position: absolute;
  right: unset !important;
  bottom: 22% !important;
  left: 30px !important;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
}
.carousel-caption .slide-title {
  max-width: 400px;
}
.carousel-caption .slide-title span {
  font-size: 40px;
}
.carousel-indicators {
  display: flex;
  align-items: center;
}
.carousel-indicators li {
  width: 7px !important;
  height: 7px !important;
  margin-right: 10px !important;
  margin-left: 10px !important;
  opacity: 0.7 !important;
  cursor: pointer;
  background-color: #f8c61a !important;
  background-clip: unset !important;
  border-radius: 10px;
  border-top: unset !important;
  border-bottom: unset !important;
}
.carousel-indicators .active {
  width: 12px !important;
  height: 12px !important;
}
.carousel-control-prev span,
.carousel-control-next span {
  display: none;
}
.carousel-control-prev,
.carousel-control-next {
  background: #453333;
  width: 50px !important;
  height: 50px !important;
  bottom: unset !important;
  top: 35px !important;
}
.carousel .carousel-control-prev {
  right: 100px !important;
  left: unset !important;
}
.carousel .carousel-control-next {
  right: 35px !important;
}
.carousel .carousel-control-prev::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  border-left: 2px solod red;
  border-top: 2px solod red;
  border-bottom: 3px solid;
  border-left: 3px solid;
  transform: rotate(45deg);
  left: 19px;
}
.carousel .carousel-control-next::after {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  border-left: 2px solod red;
  border-top: 2px solod red;
  border-bottom: 3px solid;
  border-left: 3px solid;
  transform: rotate(223deg);
  left: 12px;
}

/* Common for Business, Entertainment, Science */
.elem-wrap {
  max-width: 526px;
}
.elem-wrap img {
  width: 100%;
}
.description-wrap {
  padding: 19px 0 10px 0;
  border-bottom: 2px solid #b3abab;
}
.creator-info {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
}
.description-wrap span {
  font-size: 16px;
  font-weight: bold;
}
.card-deck {
  margin-top: 30px;
}
.card-text {
  padding: 19px 0 10px 0;
  border-bottom: 2px solid #b3abab;
}
.card-footer {
  padding: 15px 0 0 0 !important;
  background-color: unset !important;
  display: flex;
  justify-content: space-between;
}
.new-card {
  margin: 0 auto !important;
  max-width: 526px !important;
  border: none !important;
}
.new-card img {
  width: 100%;
}

.new-card .card-body {
  padding: 0 !important;
}

/* Business */
.business-wrap {
  margin-top: 60px;
  text-align: start;
}
.business-wrap .title-wrap {
  border-left: 5px solid #c710a2;
}
.business-wrap .title-wrap .title-text {
  display: block;
  font-size: 32px;
  font-family: "Poppins";
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 10px;
  padding: 6px 30px;
}

/* Entertainment */
.entertainment-wrap {
  margin-top: 60px;
  text-align: start;
}
.entertainment-wrap .title-wrap {
  border-left: 5px solid #ff995e;
}
.entertainment-wrap .title-wrap .title-text {
  display: block;
  font-size: 32px;
  font-family: "Poppins";
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 10px;
  padding: 6px 30px;
}
/* Science */
.science-wrap {
  margin-top: 60px;
  text-align: start;
}
.science-wrap .title-wrap {
  border-left: 5px solid #10c7ba;
}
.science-wrap .title-wrap .title-text {
  display: block;
  font-size: 32px;
  font-family: "Poppins";
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 10px;
  padding: 6px 30px;
}
/* Header */
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
}
</style>

<style scoped>
/* Footer */
footer {
  background-color: #052962;
  margin-top: 72px;
}
footer .content-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
footer .left-item,
footer .right-item {
  margin: auto 0;
}
footer .center-item {
  display: flex;
}
footer .center-item .text {
  color: white;
  display: flex;
  align-items: flex-end;
  padding-bottom: 5px;
  font-size: 10px;
}
/* footer .right-item button {
  width: 98% !important;
  width: 185px !important;
  height: 35px;
  font-size: 12px;
} */
footer .right-item button:hover {
  background-color: #ffe076 !important;
}

footer .right-item button {
  width: 242px;
  height: 48px;
  background-color: #f8c61a;
  color: #052962;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 900;
  border: none;
  letter-spacing: 1px;
}
@media (max-width: 1199px) {
  footer .right-item button {
    width: 232px !important;
    height: 44px;
  }
}
@media (max-width: 991px) {
  footer .right-item button {
    width: 222px !important;
    height: 40px;
    font-size: 14px;
  }
}
@media (min-width: 768px) {
  footer .container.content {
    height: 100px;
  }
}
@media (max-width: 767px) {
  footer {
    margin-top: 0px;
  }
  footer img {
    width: 100px;
  }
  footer .content-wrap {
    flex-direction: column;
    height: unset !important;
  }
  footer .content-wrap .center-item {
    margin: 0 auto;
  }
  footer .content-wrap :nth-child(2) {
    order: 3;
  }
  footer .content-wrap .left-item {
    padding: 20px 0;
  }
  footer .content-wrap .center-item {
    padding: 20px 0;
  }
}
</style>
