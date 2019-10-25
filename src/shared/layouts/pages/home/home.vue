
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
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-nav-item class="mobile-logo-wrap">
                  <img src="../../../../assets/images/logo.svg" alt="logo" />
                </b-nav-item>
                <b-nav-item class="mobnile-search-wrap">
                  <font-awesome-icon icon="search" class="fa-lg" />
                </b-nav-item>
              </b-nav>

              <b-collapse id="nav-collapse" is-nav>
                <div class="sub-wrap">
                  <b-navbar-nav>
                    <b-nav-item class="close-link-wrap">
                      <div class="close-wrap">
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
                </div>
              </b-collapse>
            </b-navbar>
          </div>
        </div>
        <div class="bottom-menu-wrap">
          <div class="container">
            <div>
              <b-nav class="bottom-menu">
                <b-nav-item>
                  <router-link class="link" :to="{name: `business`}">Business</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="link" :to="{name: `entertainment`}">Entertainment</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="link" :to="{name: `general`}">General</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="link" :to="{name: `health`}">Health</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="link" :to="{name: `science`}">Science</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="link" :to="{name: `sport`}">Sport</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="link" :to="{name: `technology`}">Technology</router-link>
                </b-nav-item>
              </b-nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Slider -->
    <div class="container content">
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
        <div class="title-wrap">
          <span class="title-text">Business</span>
        </div>
        <b-card-group deck row>
          <div class="col-md-4">
            <b-card class="card mb-2 new-card">
              <b-card-img :src="require('../../../../assets/images/business/img-1.png')"></b-card-img>
              <b-card-text>A mobile version of video game Call of Duty has been downloaded more than 100 million times in its first week...</b-card-text>
              <template v-slot:footer>
                <small class="text-muted">6 min ago</small>
                <small class="text-muted">bbc.com</small>
              </template>
            </b-card>
          </div>

          <div class="col-md-4">
            <b-card class="mb-2 new-card">
              <b-card-img :src="require('../../../../assets/images/business/img-2.png')"></b-card-img>
              <b-card-text>All 555 Thomas Cook shops are to be bought by rival Hays Travel in a move that could save up to 2,500 jobs. The independent...</b-card-text>
              <template v-slot:footer>
                <small class="text-muted">Yestesday</small>
                <small class="text-muted">sourcelink.com</small>
              </template>
            </b-card>
          </div>

          <div class="col-md-4">
            <b-card class="mb-2 new-card">
              <b-card-img :src="require('../../../../assets/images/business/img-3.png')"></b-card-img>
              <b-card-text>Goldman Sachs will review its involvement in the planned stock market listing of Chinese artificial intelligence firm Megvii...</b-card-text>
              <template v-slot:footer>
                <small class="text-muted">October 10, 2019</small>
                <small class="text-muted">sourcelink.com</small>
              </template>
            </b-card>
          </div>
        </b-card-group>
      </div>
      <!-- Entertainmenet -->
      <div class="entertainment-wrap">
        <div class="title-wrap">
          <span class="title-text">Entertainment</span>
        </div>
        <b-card-group deck>
          <div class="col-md-4">
            <b-card class="mb-2 new-card">
              <b-card-img :src="require('../../../../assets/images/business/img-4.png')"></b-card-img>
              <b-card-text>On World Mental Health Day, a disabled presenter shares her simple secrets of happiness. Jessica Kellgren-Fozard gets a...</b-card-text>
              <template v-slot:footer>
                <small class="text-muted">6 min ago</small>
                <small class="text-muted">bbc.com</small>
              </template>
            </b-card>
          </div>

          <div class="col-md-4">
            <b-card class="mb-2 new-card">
              <b-card-img :src="require('../../../../assets/images/business/img-5.png')"></b-card-img>
              <b-card-text>The Nobel Prize for Literature is set to be awarded on Thursday. Twice. The Handmaid's Tale author Margaret Atwood, fellow...</b-card-text>
              <template v-slot:footer>
                <small class="text-muted">Yestesday</small>
                <small class="text-muted">sourcelink.com</small>
              </template>
            </b-card>
          </div>
          <div class="col-md-4">
            <b-card class="mb-2 new-card">
              <b-card-img :src="require('../../../../assets/images/business/img-6.png')"></b-card-img>
              <b-card-text>Rihanna's confirmed she turned down the Superbowl halftime show to support Colin Kaepernick. The former San Francisco...</b-card-text>
              <template v-slot:footer>
                <small class="text-muted">October 10, 2019</small>
                <small class="text-muted">sourcelink.com</small>
              </template>
            </b-card>
          </div>
        </b-card-group>
      </div>
      <!-- Science -->
      <div class="science-wrap">
        <div class="title-wrap">
          <span class="title-text">Science</span>
        </div>
        <b-card-group deck>
          <div class="col-md-4">
            <b-card class="mb-2 new-card">
              <b-card-img :src="require('../../../../assets/images/business/img-7.png')"></b-card-img>
              <b-card-text>Culling badgers drives them to roam further afield, allowing them to disperse tuberculosis over a larger area, new...</b-card-text>
              <template v-slot:footer>
                <small class="text-muted">6 min ago</small>
                <small class="text-muted">bbc.com</small>
              </template>
            </b-card>
          </div>
          <div class="col-md-4">
            <b-card class="mb-2 new-card">
              <b-card-img :src="require('../../../../assets/images/business/img-8.png')"></b-card-img>
              <b-card-text>Three scientists have been awarded the 2019 Nobel Prize in Physics for "ground-breaking" discoveries about the Universe...</b-card-text>
              <template v-slot:footer>
                <small class="text-muted">Yestesday</small>
                <small class="text-muted">sourcelink.com</small>
              </template>
            </b-card>
          </div>
          <div class="col-md-4">
            <b-card class="mb-2 new-card">
              <b-card-img :src="require('../../../../assets/images/business/img-9.png')"></b-card-img>
              <b-card-text>Antarctica's Emperor penguins could be in real difficulty come 2100 if the climate warms as expected. Experts say the birds...</b-card-text>
              <template v-slot:footer>
                <small class="text-muted">October 10, 2019</small>
                <small class="text-muted">sourcelink.com</small>
              </template>
            </b-card>
          </div>
        </b-card-group>
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

<style scoped>
/* Header */
.top-menu-wrap #nav-collapse .close-link-wrap {
  display: none;
}
.top-menu-wrap #nav-collapse .close-wrap a {
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  top: 24px;
  right: 23px;
}
.top-menu-wrap #nav-collapse .close-wrap a::before {
  position: absolute;
  content: "";
  width: 30px;
  height: 2px;
  background-color: rgb(248, 198, 26);
  top: 7px;
  right: 0px;
  transform: rotate(45deg);
}

.top-menu-wrap #nav-collapse .close-wrap a::after {
  position: absolute;
  content: "";
  width: 30px;
  height: 2px;
  background-color: rgb(248, 198, 26);
  top: 7px;
  right: 0px;
  transform: rotate(-45deg);
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

@media (max-width: 767px) {
  .top-menu-wrap .mobile-top-menu {
    display: flex;
  }

  #nav-collapse {
    width: 60%;
    position: absolute;
    background: #052962;
    z-index: 9999;
    top: 0px;
    left: 0;
    bottom: 0;
  }

  #nav-collapse .sub-wrap {
    margin-top: 74px;
    border-top: 1px solid #585858;
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

  #nav-collapse .weather-content {
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
    overflow: scroll !important;
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
@media (max-width: 991px) {
  .business-wrap .title-wrap .title-text,
  .entertainment-wrap .title-wrap .title-text,
  .science-wrap .title-wrap .title-text {
    font-size: 22px;
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

/* Content */
.container.content {
  max-width: 1638px;
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

/* Content */
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

/* Content */
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

/* Content */
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
.header-wrap .top-menu-wrap .container {
  max-width: 1638px !important;
}
.top-menu-wrap .navbar {
  background-color: #052962 !important;
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

.bottom-menu ul li a :hover {
  color: #f8c61a;
}

.top-menu-wrap .navbar-nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-menu-wrap .navbar-nav li a svg {
  margin: 0 20px;
  color: rgb(248, 198, 26);
}
.top-menu-wrap .navbar-nav li.weather-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
}
.top-menu-wrap .navbar-nav li.weather-wrap .weather-dropdown-arrow {
  position: absolute;
  top: 25px;
  right: -46px;
}
.top-menu-wrap .navbar-nav li.weather-wrap p {
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
  padding: 17px;
}
.top-menu-wrap .navbar-brand {
  padding: 0;
}
.top-menu-wrap .current-date a {
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

<style>
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
  footer .right-item button {
    width: 185px !important;
    height: 35px;
    font-size: 12px;
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
  footer .right-item button {
    width: 98% !important;
  }
  footer .content-wrap .left-item {
    padding: 20px 0;
  }
  footer .content-wrap .center-item {
    padding: 20px 0;
  }
}
</style>