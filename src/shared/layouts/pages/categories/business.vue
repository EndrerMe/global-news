<template>
  <div>
    <!-- Header -->
    <div class="header-wrap">
      <div class="header-content">
        <div class="top-menu-wrap">
          <div class="container content">
            <b-navbar class="top-menu" toggleable="md" type="dark" variant="info">
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item href="#">
                    <img src="../../../../assets/images/logo.svg" alt="logo" />
                  </b-nav-item>
                  <b-nav-item href="#" class="current-date">
                    <span>October 8, 2019</span>
                    <span>Tuesday</span>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <span>
                      Currency Converter
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
                  <b-nav-item href="#">
                    <font-awesome-icon icon="search" class="fa-lg" />
                    <font-awesome-icon icon="bell" class="fa-lg" />
                  </b-nav-item>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </div>
        <div class="bottom-menu-wrap">
          <div class="container">
            <b-navbar class="bottom-menu" toggleable="md" type="dark" variant="info">
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item href="#" class="current-date">
                    <span>Business</span>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <span>Entertainment</span>
                  </b-nav-item>
                  <b-nav-item href="#" class="weather-wrap">
                    <span>General</span>
                  </b-nav-item>
                  <b-nav-item href="#" class="weather-wrap">
                    <span>Health</span>
                  </b-nav-item>
                  <b-nav-item href="#" class="weather-wrap">
                    <span>Science</span>
                  </b-nav-item>

                  <b-nav-item href="#" class="weather-wrap">
                    <span>Sport</span>
                  </b-nav-item>
                  <b-nav-item href="#" class="weather-wrap">
                    <span>Technology</span>
                  </b-nav-item>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </div>
      </div>
    </div>
    <div class="container content">
      <!-- Top title -->
      <div class="main-title-wrap">
        <span class="text">Business</span>
      </div>

      <!-- Top-box with 4 images -->
      <div class="top-box-preview row">
        <div class="left-side col-md-6">
          <div class="gradient"></div>
          <img src="../../../../assets/images/entertainment/img-1.png" />
          <div class="title-wrap">
            <span class="title">
              <p>YouTuber Jessica Kellgren-Fozard:</p>
              <p>"It's OK not to be OK"</p>
            </span>
          </div>
        </div>
        <div class="right-side col-md-6">
          <div class="image-wrap right-side-top">
            <div class="gradient"></div>
            <img src="../../../../assets/images/entertainment/img-2.png" />

            <div class="title-wrap">
              <span class="title">
                <p>Nobel Prize for Literature to name</p>
                <p>two winners after scandal-hit year</p>
              </span>
            </div>
          </div>
          <div class="right-side-bottom row">
            <div class="image-wrap col-md-6">
              <div class="gradient"></div>
              <img src="../../../../assets/images/entertainment/img-3.png" />
              <div class="title-wrap">
                <span class="title">
                  <p>Rihanna wouldn't "sell out" for</p>
                  <p>halftime Superbowl show</p>
                </span>
              </div>
            </div>
            <div class="image-wrap col-md-6">
              <div class="gradient"></div>
              <img src="../../../../assets/images/entertainment/img-4.png" />
              <div class="title-wrap">
                <span class="title">
                  <p>Sesame Street to cover opioid</p>
                  <p>addiction with new muppet Karli</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Posts -->
      <b-card-group deck row>
        <div class="col-md-4">
          <b-card class="mb-2 new-card">
            <div class="image-wrap">
              <div class="gradient"></div>
              <b-card-img :src="require('../../../../assets/images/entertainment/img-5.png')"></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>How tech changed the way</p>
                  <p>DreamWorks animates</p>
                </span>
              </div>
            </div>
            <b-card-text>DreamWorks Animation has made blockbusters ranging from Shrek to Kung Fu Panda and How to Train Your Dragon. As...</b-card-text>
            <template v-slot:footer>
              <small class="text-muted">6 min ago</small>
              <small class="text-muted">bbc.com</small>
            </template>
          </b-card>
        </div>

        <div class="col-md-4">
          <b-card class="mb-2 new-card">
            <div class="image-wrap">
              <div class="gradient"></div>
              <b-card-img :src="require('../../../../assets/images/entertainment/img-6.png')"></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Five Star: Making Rain or Shine was "an ordeal",</p>
                  <p>says Doris Pearson</p>
                </span>
              </div>
            </div>

            <b-card-text>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat...</b-card-text>
            <template v-slot:footer>
              <small class="text-muted">Yestesday</small>
              <small class="text-muted">sourcelink.com</small>
            </template>
          </b-card>
        </div>

        <div class="col-md-4">
          <b-card class="mb-2 new-card">
            <div class="image-wrap">
              <div class="gradient"></div>
              <b-card-img :src="require('../../../../assets/images/entertainment/img-7.png')"></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Rapper Jack Grange says music</p>
                  <p>releases ADHD "anger"</p>
                </span>
              </div>
            </div>

            <b-card-text>A teenage rap artist says performing music has helped him come to terms with his ADHD and release his "inside anger". Eighteen...</b-card-text>
            <template v-slot:footer>
              <small class="text-muted">October 10, 2019</small>
              <small class="text-muted">sourcelink.com</small>
            </template>
          </b-card>
        </div>
      </b-card-group>

      <b-card-group deck row>
        <div class="col-md-4">
          <b-card class="mb-2 new-card">
            <div class="image-wrap">
              <div class="gradient"></div>
              <b-card-img :src="require('../../../../assets/images/entertainment/img-8.png')"></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>His Dark Materials: Behind the scenes of the TV</p>
                  <p>adaptation</p>
                </span>
              </div>
            </div>

            <b-card-text>Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's...</b-card-text>
            <template v-slot:footer>
              <small class="text-muted">6 min ago</small>
              <small class="text-muted">bbc.com</small>
            </template>
          </b-card>
        </div>

        <div class="col-md-4">
          <b-card class="mb-2 new-card">
            <div class="image-wrap">
              <div class="gradient"></div>
              <b-card-img :src="require('../../../../assets/images/entertainment/img-9.png')"></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Elton John:</p>
                  <p>"I still want my dad's approval"</p>
                </span>
              </div>
            </div>

            <b-card-text>He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the...</b-card-text>
            <template v-slot:footer>
              <small class="text-muted">Yestesday</small>
              <small class="text-muted">sourcelink.com</small>
            </template>
          </b-card>
        </div>

        <div class="col-md-4">
          <b-card class="mb-2 new-card">
            <div class="image-wrap">
              <div class="gradient"></div>
              <b-card-img :src="require('../../../../assets/images/entertainment/img-10.png')"></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Brit winner Finley Quaye sentenced for bar</p>
                  <p>manager attack</p>
                </span>
              </div>
            </div>

            <b-card-text>A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and...</b-card-text>
            <template v-slot:footer>
              <small class="text-muted">October 10, 2019</small>
              <small class="text-muted">sourcelink.com</small>
            </template>
          </b-card>
        </div>
      </b-card-group>

      <b-card-group deck row>
        <div class="col-md-4">
          <b-card class="mb-2 new-card">
            <div class="image-wrap">
              <div class="gradient"></div>
              <b-card-img :src="require('../../../../assets/images/entertainment/img-11.png')"></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Booker Prize: Margaret Atwood and Bernardine</p>
                  <p>Evaristo share award</p>
                </span>
              </div>
            </div>

            <b-card-text>Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's...</b-card-text>
            <template v-slot:footer>
              <small class="text-muted">6 min ago</small>
              <small class="text-muted">bbc.com</small>
            </template>
          </b-card>
        </div>

        <div class="col-md-4">
          <b-card class="mb-2 new-card">
            <div class="image-wrap">
              <div class="gradient"></div>
              <b-card-img :src="require('../../../../assets/images/entertainment/img-12.png')"></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Pharrell says he's "embarrassed" by</p>
                  <p>Blurred Lines lyrics</p>
                </span>
              </div>
            </div>

            <b-card-text>He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the...</b-card-text>
            <template v-slot:footer>
              <small class="text-muted">Yestesday</small>
              <small class="text-muted">sourcelink.com</small>
            </template>
          </b-card>
        </div>

        <div class="col-md-4">
          <b-card class="mb-2 new-card">
            <div class="image-wrap">
              <div class="gradient"></div>
              <b-card-img :src="require('../../../../assets/images/entertainment/img-13.png')"></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>John le Carré:</p>
                  <p>"Politicians love chaos - it gives them authority"</p>
                </span>
              </div>
            </div>

            <b-card-text>A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and...</b-card-text>
            <template v-slot:footer>
              <small class="text-muted">October 10, 2019</small>
              <small class="text-muted">sourcelink.com</small>
            </template>
          </b-card>
        </div>
      </b-card-group>

      <b-card-group deck row>
        <div class="col-md-4">
          <b-card class="mb-2 new-card">
            <div class="image-wrap">
              <div class="gradient"></div>
              <b-card-img :src="require('../../../../assets/images/entertainment/img-14.png')"></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Russian rappers battle police</p>
                  <p>over protests</p>
                </span>
              </div>
            </div>

            <b-card-text>Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's...</b-card-text>
            <template v-slot:footer>
              <small class="text-muted">6 min ago</small>
              <small class="text-muted">bbc.com</small>
            </template>
          </b-card>
        </div>

        <div class="col-md-4">
          <b-card class="mb-2 new-card">
            <div class="image-wrap">
              <div class="gradient"></div>
              <b-card-img :src="require('../../../../assets/images/entertainment/img-15.png')"></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Bill Turnbull backs cannabis for medicinal</p>
                  <p>use ahead of cancer doc</p>
                </span>
              </div>
            </div>

            <b-card-text>He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the...</b-card-text>
            <template v-slot:footer>
              <small class="text-muted">Yestesday</small>
              <small class="text-muted">sourcelink.com</small>
            </template>
          </b-card>
        </div>

        <div class="col-md-4">
          <b-card class="mb-2 new-card">
            <div class="image-wrap">
              <div class="gradient"></div>
              <b-card-img :src="require('../../../../assets/images/entertainment/img-13.png')"></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Billy Connolly: 'Nothing else will keep you going</p>
                  <p>like laughter'</p>
                </span>
              </div>
            </div>

            <b-card-text>A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and...</b-card-text>
            <template v-slot:footer>
              <small class="text-muted">October 10, 2019</small>
              <small class="text-muted">sourcelink.com</small>
            </template>
          </b-card>
        </div>
      </b-card-group>

      <div class="pagination-wrap">
        <button class="double-arrow-left"></button>
        <button class="arrow-left"></button>

        <div class="numbers-wrap">
          <button href="#" class="page-number">
            <span class="value">1</span>
          </button>
          <button href="#" class="page-number active">
            <span class="value">2</span>
          </button>
          <button href="#" class="page-number">
            <span class="value">3</span>
          </button>

          <div class="separator-wrap">
            <span class="separator">...</span>
          </div>

          <button href="#" class="page-number">
            <span class="value">16</span>
          </button>
        </div>

        <button href="#" class="arrow-right"></button>
        <button href="#" class="double-arrow-right"></button>
      </div>
    </div>
    <!-- Footer -->
    <!-- <footer>
      <div class="container content">
        <div class="content">
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
    </footer> -->
  </div>
</template>



<style>
/* Pagination */

.pagination-wrap .separator-wrap {
  display: inline-flex;
  vertical-align: top;
}

.pagination-wrap .separator-wrap .separator {
  margin-top: 5px;
}

.pagination-wrap .numbers-wrap .separator {
  font-size: 22px;
  font-weight: bold;
}

.pagination-wrap .numbers-wrap button {
  margin-top: 11px;
  margin-left: 5px;
  margin-right: 8px;
}

.pagination-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination-wrap button {
  background-color: unset;
}

.pagination-wrap .page-number {
  position: relative;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  color: #052962;
  width: 32px;
  height: 32px;
  border-radius: 25px;
  border: 1px solid transparent;
}

.pagination-wrap .page-number.active {
  background-color: #052962;
}
.pagination-wrap .page-number.active span {
  color: #f8c61a;
}

.pagination-wrap .page-number span {
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pagination-wrap .page-number:hover {
  border: 1px solid #052962;
}

.pagination-wrap .double-arrow-right {
  position: relative;
  padding: 0;
  display: inline-flex;
  border: none;
  width: 30px;
  height: 30px;
}

.pagination-wrap .double-arrow-right::before {
  padding: 0;
  display: inline-flex;
  border: none;
  content: "";
  width: 8px;
  height: 8px;
  border-right: 2px solid #052962;
  border-bottom: 2px solid #052962;
  transform: rotate(-45deg);
  position: absolute;
  right: 7px;
  top: 10px;
}

.pagination-wrap .double-arrow-right::after {
  padding: 0;
  display: inline-flex;
  border: none;
  content: "";
  width: 8px;
  height: 8px;
  border-right: 2px solid #052962;
  border-bottom: 2px solid #052962;
  transform: rotate(-45deg);
  position: absolute;
  right: 15px;
  top: 10px;
}

.pagination-wrap .double-arrow-left {
  position: relative;
  padding: 0;
  display: inline-flex;
  border: none;
  width: 30px;
  height: 30px;
}

.pagination-wrap .double-arrow-left::before {
  padding: 0;
  display: inline-flex;
  border: none;
  content: "";
  width: 8px;
  height: 8px;
  border-left: 2px solid #052962;
  border-bottom: 2px solid #052962;
  transform: rotate(45deg);
  position: absolute;
  left: 7px;
  top: 10px;
}

.pagination-wrap .double-arrow-left::after {
  padding: 0;
  display: inline-flex;
  border: none;
  content: "";
  width: 8px;
  height: 8px;
  border-left: 2px solid #052962;
  border-bottom: 2px solid #052962;
  transform: rotate(45deg);
  position: absolute;
  left: 15px;
  top: 10px;
}

.pagination-wrap .arrow-left {
  position: relative;
  padding: 0;
  display: inline-flex;
  border: none;
  width: 30px;
  height: 30px;
}

.pagination-wrap .arrow-left::before {
  padding: 0;
  display: inline-flex;
  border: none;
  content: "";
  width: 8px;
  height: 8px;
  border-left: 2px solid #052962;
  border-bottom: 2px solid #052962;
  transform: rotate(45deg);
  position: absolute;
  right: 8px;
  top: 10px;
}

.pagination-wrap .arrow-right {
  position: relative;
  padding: 0;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  border: none;
  width: 30px;
  height: 30px;
}

.pagination-wrap .arrow-right::before {
  padding: 0;
  display: inline-flex;
  border: none;
  content: "";
  width: 8px;
  height: 8px;
  border-right: 2px solid #052962;
  border-bottom: 2px solid #052962;
  transform: rotate(-45deg);
  position: absolute;
  left: 8px;
  top: 10px;
}
</style>

<style>
.new-card {
  /* margin: 0 !important; */
  border: none !important;
}

.new-card .card-body {
  padding: 0 !important;
}

.new-card .image-wrap {
  position: relative;
}

.card-deck {
  margin-bottom: 35px;
}

.card-deck .card-body .image-wrap .gradient {
  margin: 0;
}

.new-card .title-wrap {
  position: absolute;
  bottom: 10px;
  font-size: 20px;
  color: white;
  font-size: bold;
  text-align: start;
  left: 25px;
  bottom: 25px;
}
.new-card .title-wrap p {
  margin-bottom: 0;
}

.new-card .card-footer {
  background: transparent;
  text-align: start;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  justify-content: space-between;
}

.new-card .card-text {
  padding: 18px 0 13px 0;
  text-align: start;
}
</style>

<style scoped>
/* Top-box-preview */
.content .main-title-wrap .text {
  position: relative;
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 10px;
  padding-left: 86px;
}

.content .main-title-wrap .text::before {
  z-index: -1;
  position: absolute;
  content: "";
  width: 102px;
  height: 37px;
  background-color: #c710a2;
  left: 0;
  top: 0;
}

.content .top-box-preview {
  margin-top: 42px;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
}

.content .top-box-preview img {
  width: 100%;
}

.left-side {
  position: relative;
}

.right-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right-side .image-wrap {
  position: relative;
}
.right-side-bottom {
  display: flex;
  justify-content: space-between;
}

.right-side .right-side-top .title-wrap span,
.right-side .right-side-bottom .title-wrap span {
  font-size: 20px;
}

/* .posts-wrap .row {
  margin-right: 0;
  margin-left: 0;
  flex-wrap: unset;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
} */

.description-wrap {
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #d5d3d3;
}

.elem-wrap .image-wrap {
  position: relative;
}

.gradient {
  position: absolute;
  top: 0bott;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9416141456582633) 0%,
    rgba(255, 255, 255, 0) 30%
  );
  margin: 0 15px;
}

.top-box-preview .left-side {
  position: relative;
}
.top-box-preview .title-wrap {
  position: absolute;
  bottom: 25px;
  left: 25px;
}

.top-box-preview .title-wrap span {
  color: white;
  text-align: start;
  font-weight: bold;
  font-size: 32px;
}

.top-box-preview .title-wrap span p {
  margin-bottom: 5px;
}

.elem-wrap .image-wrap .title-wrap {
  position: absolute;
  bottom: 25px;
  left: 25px;
}

.elem-wrap .image-wrap .title-wrap span {
  color: white;
  text-align: start;
  font-weight: bold;
  font-size: 20px;
}

.elem-wrap .image-wrap .title-wrap span p {
  margin-bottom: 5px;
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
nav.bottom-menu {
  background-color: unset !important;
  margin: 0 auto;
  padding: 41px !important;
}
.bottom-menu button {
  background: black;
}
.bottom-menu ul li a span {
  color: #3f3f3f;
  font-size: 26px;
  font-weight: bold;
}
.bottom-menu-wrap .navbar-nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

/* Content */
.container.content {
  max-width: 1638px;
}

/* Footer */
/* footer {
  margin-top: 72px;
  background-color: #052962;
}
footer .content {
  width: 100%;
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
} */
</style>

