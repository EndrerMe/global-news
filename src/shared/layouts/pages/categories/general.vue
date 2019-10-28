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
                  <b-navbar-nav class="wide-menu">
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
                  <b-navbar-nav class="mobile-side-menu">
                    <b-nav-item class="close-link-wrap">
                      <div class="close-wrap">
                        <a href="#"></a>
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
              </b-collapse>
            </b-navbar>
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
      <!-- Top title -->
      <div class="main-title-wrap">
        <span class="text">General</span>
      </div>

      <!-- Top-box with 4 images -->
      <div class="top-box-preview row">
        <div class="left-side col-md-6 box-item">
          <div class="hover-link">
            <button>Read More</button>
          </div>
          <div class="gradient"></div>
          <div class="image-box">
            <img src="../../../../assets/images/entertainment/img-1.png" />
          </div>
          <div class="title-wrap">
            <span class="title">
              <p>YouTuber Jessica Kellgren-Fozard:</p>
              <p>"It's OK not to be OK"</p>
            </span>
          </div>
        </div>
        <div class="right-side col-md-6">
          <div class="image-wrap right-side-top">
            <div class="box-item">
              <div class="hover-link">
                <button>Read More</button>
              </div>
              <div class="gradient"></div>
              <div class="image-box">
                <img src="../../../../assets/images/entertainment/img-2.png" />
              </div>
              <div class="title-wrap">
                <span class="title">
                  <p>Nobel Prize for Literature to name</p>
                  <p>two winners after scandal-hit year</p>
                </span>
              </div>
            </div>
          </div>
          <div class="right-side-bottom row">
            <div class="image-wrap col-md-6 col-sm-6 box-item">
              <div class="hover-link">
                <button>Read More</button>
              </div>
              <div class="gradient"></div>
              <div class="image-box">
                <img src="../../../../assets/images/entertainment/img-3.png" />
              </div>
              <div class="title-wrap">
                <span class="title">
                  <p>Rihanna wouldn't "sell out" for</p>
                  <p>halftime Superbowl show</p>
                </span>
              </div>
            </div>
            <div class="image-wrap col-md-6 col-sm-6 box-item">
              <div class="hover-link">
                <button>Read More</button>
              </div>
              <div class="gradient"></div>
              <div class="image-box">
                <img src="../../../../assets/images/entertainment/img-4.png" />
              </div>
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

      <!-- All News -->
      <b-card-group deck row>
        <div class="col-md-4">
          <b-card class="mb-2 new-card">
            <div class="image-wrap">
              <div class="gradient"></div>
              <b-card-img
                :src="
                  require('../../../../assets/images/entertainment/img-5.png')
                "
              ></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>How tech changed the way</p>
                  <p>DreamWorks animates</p>
                </span>
              </div>
            </div>
            <div class="text-wrap">
              <b-card-text>
                DreamWorks Animation has made blockbusters ranging from Shrek to
                Kung Fu Panda and How to Train Your Dragon. As...
              </b-card-text>
            </div>
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
              <b-card-img
                :src="
                  require('../../../../assets/images/entertainment/img-6.png')
                "
              ></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Five Star: Making Rain or Shine was "an ordeal",</p>
                  <p>says Doris Pearson</p>
                </span>
              </div>
            </div>
            <div class="text-wrap">
              <b-card-text>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat...
              </b-card-text>
            </div>
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
              <b-card-img
                :src="
                  require('../../../../assets/images/entertainment/img-7.png')
                "
              ></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Rapper Jack Grange says music</p>
                  <p>releases ADHD "anger"</p>
                </span>
              </div>
            </div>
            <div class="text-wrap">
              <b-card-text>
                A teenage rap artist says performing music has helped him come to
                terms with his ADHD and release his "inside anger".
                Eighteen...
              </b-card-text>
            </div>
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
              <b-card-img
                :src="
                  require('../../../../assets/images/entertainment/img-8.png')
                "
              ></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>His Dark Materials: Behind the scenes of the TV</p>
                  <p>adaptation</p>
                </span>
              </div>
            </div>
            <div class="text-wrap">
              <b-card-text>
                Ahead of the eight-part dramatisation of the first of Philip
                Pullman's best-selling His Dark Materials novels, the
                BBC's...
              </b-card-text>
            </div>
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
              <b-card-img
                :src="
                  require('../../../../assets/images/entertainment/img-9.png')
                "
              ></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Elton John:</p>
                  <p>"I still want my dad's approval"</p>
                </span>
              </div>
            </div>
            <div class="text-wrap">
              <b-card-text>
                He may have started out singing cover versions on cheap
                compilation albums, but Elton John went on to become
                the...
              </b-card-text>
            </div>
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
              <b-card-img
                :src="
                  require('../../../../assets/images/entertainment/img-10.png')
                "
              ></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Brit winner Finley Quaye sentenced for bar</p>
                  <p>manager attack</p>
                </span>
              </div>
            </div>
            <div class="text-wrap">
              <b-card-text>
                A Brit Award-winning musician has been ordered to carry out 200
                hours of unpaid work for punching a bar manager
                and...
              </b-card-text>
            </div>
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
              <b-card-img
                :src="
                  require('../../../../assets/images/entertainment/img-11.png')
                "
              ></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Booker Prize: Margaret Atwood and Bernardine</p>
                  <p>Evaristo share award</p>
                </span>
              </div>
            </div>
            <div class="text-wrap">
              <b-card-text>
                Ahead of the eight-part dramatisation of the first of Philip
                Pullman's best-selling His Dark Materials novels, the
                BBC's...
              </b-card-text>
            </div>
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
              <b-card-img
                :src="
                  require('../../../../assets/images/entertainment/img-12.png')
                "
              ></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Pharrell says he's "embarrassed" by</p>
                  <p>Blurred Lines lyrics</p>
                </span>
              </div>
            </div>
            <div class="text-wrap">
              <b-card-text>
                He may have started out singing cover versions on cheap
                compilation albums, but Elton John went on to become
                the...
              </b-card-text>
            </div>
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
              <b-card-img
                :src="
                  require('../../../../assets/images/entertainment/img-13.png')
                "
              ></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>John le Carré:</p>
                  <p>"Politicians love chaos - it gives them authority"</p>
                </span>
              </div>
            </div>
            <div class="text-wrap">
              <b-card-text>
                A Brit Award-winning musician has been ordered to carry out 200
                hours of unpaid work for punching a bar manager
                and...
              </b-card-text>
            </div>
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
              <b-card-img
                :src="
                  require('../../../../assets/images/entertainment/img-14.png')
                "
              ></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Russian rappers battle police</p>
                  <p>over protests</p>
                </span>
              </div>
            </div>

            <div class="text-wrap">
              <b-card-text>
                Ahead of the eight-part dramatisation of the first of Philip
                Pullman's best-selling His Dark Materials novels, the
                BBC's...
              </b-card-text>
            </div>
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
              <b-card-img
                :src="
                  require('../../../../assets/images/entertainment/img-15.png')
                "
              ></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Bill Turnbull backs cannabis for medicinal</p>
                  <p>use ahead of cancer doc</p>
                </span>
              </div>
            </div>
            <div class="text-wrap">
              <b-card-text>
                He may have started out singing cover versions on cheap
                compilation albums, but Elton John went on to become
                the...
              </b-card-text>
            </div>
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
              <b-card-img
                :src="
                  require('../../../../assets/images/entertainment/img-13.png')
                "
              ></b-card-img>
              <div class="title-wrap">
                <span class="title">
                  <p>Billy Connolly: 'Nothing else will keep you going</p>
                  <p>like laughter'</p>
                </span>
              </div>
            </div>
            <div class="text-wrap">
              <b-card-text>
                A Brit Award-winning musician has been ordered to carry out 200
                hours of unpaid work for punching a bar manager
                and...
              </b-card-text>
            </div>
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
  .main-title-wrap span {
    font-size: 24px !important;
    letter-spacing: 8px !important;
  }
  .main-title-wrap span::before {
    height: 27px !important;
    width: 95px !important;
  }
}
@media (max-width: 767px) {
  .main-title-wrap span {
    font-size: 24px !important;
  }
}
@media (max-width: 499px) {
  .main-title-wrap span {
    font-size: 20px !important;
    letter-spacing: 6px !important;
  }
  .main-title-wrap span::before {
    height: 21px !important;
    width: 94px !important;
  }
}
@media (max-width: 375px) {
  .main-title-wrap span {
    font-size: 16px !important;
    letter-spacing: 5px !important;
  }
  .main-title-wrap span::before {
    height: 16px !important;
    width: 92px !important;
  }
}
</style>

<style scoped>
/* Pagination */
@media (max-width: 374px) {
  .pagination-wrap button {
    width: 25px !important;
    height: 25px !important;
  }
}
/* Top-box with 4 images*/
@media (max-width: 1199px) {
  .top-box-preview .title-wrap {
    bottom: 15px !important;
  }

  .top-box-preview .left-side .title-wrap span {
    font-size: 20px !important;
  }

  .top-box-preview .right-side-top .title-wrap span,
  .top-box-preview .right-side-bottom .title-wrap span {
    font-size: 15px !important;
  }
}

@media (max-width: 1139px) {
  .top-box-preview .left-side .title-wrap span {
    font-size: 20px !important;
  }

  .top-box-preview .right-side-top .title-wrap span,
  .top-box-preview .right-side-bottom .title-wrap span {
    font-size: 10px !important;
  }
}

@media (max-width: 992px) {
  .top-box-preview .title-wrap span {
    font-size: 12px !important;
  }
  .top-box-preview .title-wrap {
    left: 30px !important;
    bottom: 15px !important;
  }
}

@media (max-width: 767px) {
  .left-side .title-wrap {
    max-width: 85%;
  }
  .right-side-top {
    margin: 10px 0;
  }
  .top-box-preview {
    margin-bottom: 20px !important;
    margin-top: 20px !important;
  }

  .top-box-preview .title-wrap {
    left: 40px !important;
  }

  .top-box-preview .title-wrap span {
    font-size: 20px !important;
  }
}

@media (max-width: 575px) {
  .top-box-preview .right-side-top .title-wrap span,
  .top-box-preview .right-side-bottom .title-wrap span {
    font-size: 22px !important;
  }

  .left-side .title-wrap {
    max-width: 76%;
  }

  .right-side-bottom .image-wrap {
    margin-bottom: 10px;
  }
}

@media (max-width: 450px) {
  .top-box-preview .right-side-top .title-wrap span,
  .top-box-preview .right-side-bottom .title-wrap span {
    font-size: 16px !important;
  }

  .top-box-preview .left-side .title-wrap span {
    font-size: 16px !important;
  }
}

@media (max-width: 350px) {
  .top-box-preview .right-side-top .title-wrap span,
  .top-box-preview .right-side-bottom .title-wrap span {
    font-size: 12px !important;
  }

  .top-box-preview .left-side .title-wrap span {
    font-size: 12px !important;
  }
}

@media (max-width: 419px) {
  .left-side .title-wrap span,
  .right-side-top .title-wrap span,
  .right-side-bottom .title-wrap span,
  .new-card .title-wrap span {
    font-size: 14px !important;
  }
}

.right-side-top .title-wrap {
  left: 30px !important;
  width: 85%;
}

.right-side-top .hover-link {
  right: 0 !important;
  left: 0 !important;
  z-index: 999;
}
.right-side-top .gradient {
  margin: 0;
}

.right-side-top .hover-link button {
  height: 15% !important;
}

.content .top-box-preview .hover-link button {
  opacity: 0;
  width: 65%;
  height: 10%;
  background-color: #f8c61a;
  border: none;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: #052962;
  letter-spacing: 2px;
  cursor: pointer;
  z-index: 999;
}
.content .top-box-preview .hover-link {
  z-index: 999;
  display: flex;
  visibility: hidden;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 15px;
  right: 15px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  background: rgba(0, 0, 0, 0.6);
  color: rgba(0, 0, 0, 0.6);
}

.content .top-box-preview .box-item:hover .hover-link {
  visibility: visible;
  z-index: 999;
  transition: all 0.5s;
}

.content .top-box-preview .box-item:hover .hover-link button {
  opacity: 1;
  transition: all 1s;
}

.content .top-box-preview .box-item:hover img {
  transform: scale(1.1);
  transition: transform 1s;
}

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
  background-color: #1BFE85;
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

.left-side .image-box,
.right-side .image-box,
.right-side-bottom .image-box {
  overflow: hidden;
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

.right-side .right-side-top .gradint {
  margin: 0;
}

.right-side .right-side-top .title-wrap span,
.right-side .right-side-bottom .title-wrap span {
  font-size: 20px;
}

.right-side .right-side-bottom .title-wrap {
  width: 76%;
}

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
  bottom: 30px;
  left: 50px;
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

.top-menu-wrap #nav-collapse .close-link-wrap {
  display: none;
  position: absolute;
}
.top-menu-wrap #nav-collapse .close-wrap a {
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  top: -45px;
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

#nav-collapse .sub-wrap .mobile-side-menu {
  display: none;
}

#nav-collapse .sub-wrap .mobile-side-menu .nav-item.wrap {
  border-top: 1px solid #6d6d6d;
}

@media (max-width: 1139px) {
  .bottom-menu-wrap .bottom-menu li a {
    font-size: 18px !important;
  }

  .bottom-menu-wrap {
    height: 100px;
  }
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

  #nav-collapse {
    width: 82%;
    position: absolute;
    background: #052962;
    z-index: 9999;
    top: 0px;
    left: 0;
    bottom: 0;
  }

  #nav-collapse .sub-wrap {
    padding-top: 74px;
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

  #nav-collapse .sub-wrap .mobile-side-menu .nav-item .top-side-wrap {
    display: flex;
    flex-direction: column;
  }

  #nav-collapse
    .sub-wrap
    .mobile-side-menu
    .nav-item
    a
    .top-side-wrap
    .sub-item {
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

  #nav-collapse
    .sub-wrap
    .mobile-side-menu
    .nav-item
    a
    .bottom-side-wrap
    button {
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

/* Content */
.container.content {
  max-width: 1638px;
}

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

<style scoped>
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

<style scoped>
/* All News */

.new-card {
  border: none !important;
}
.new-card .text-wrap p {
  max-block-size: 70px;
  overflow: hidden;
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
  border: none;
}
.new-card .text-wrap {
  border-bottom: 1px solid #b3abab;
  padding-bottom: 10px;
}
@media (max-width: 1199px) {
  .new-card .title-wrap {
    max-width: 86%;
  }
}
@media (max-width: 1139px) {
  .new-card .title-wrap {
    font-size: 12px !important;
  }
  .new-card .title-wrap {
    max-width: 78%;
  }
}
@media (max-width: 767px) {
  .new-card .title-wrap {
    font-size: 22px !important;
  }
  .new-card {
    margin-bottom: 30px !important;
  }
}
</style>
