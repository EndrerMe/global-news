
<template>
  <div>
    <!-- Header -->
    <div class="header-wrap">
      <div class="header-content">
        <div class="top-menu-wrap">
          <div class="container">
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
      <div class="card-wrap">
        <b-card-group deck>
          <b-card class="new-info" header-tag="header">
            <div class="title-wrap">
              <span class="text">Rihanna wouldn't "sell out" For halftime show</span>
            </div>

            <b-card-img :src="require('../../../../assets/images/new-info/img-1.png')"></b-card-img>

            <b-card-text>
              <span>6 min ago</span>
              <span>sourcelink.com</span>
            </b-card-text>

            <div class="description-wrap">
              <p>
                Rihanna's confirmed she turned down the Superbowl halftime show to support Colin Kaepernick.
                The former San Francisco 49ers quarterback was dropped from the NFL for protesting social
                injustice
                <span
                  class="blue-text"
                >by kneeling during the national anthem</span>. In this month's cover story with Vogue magazine,
                Rihanna said she did it to take a stand.
              </p>
              <p>
                <span
                  class="bold-text"
                >"I couldn't dare do that. Who gains from that? Not my people. I just couldn't be a sellout."</span>
              </p>
              <p>
                <span
                  class="bold-text"
                >"I couldn't be an enabler. There's things within that organization that I do not agree with at all, and</span>
              </p>
              <p>
                <span class="bold-text">I was not about to go and be of service to them in any way."</span>
              </p>
              <p>
                It was widely rumoured she was offered the controversial February 2019 halftime show, which
                draws in audiences of up to 100m, but this is the first time Rihanna's talked about why she
                <span
                  class="blue-text"
                >
                  refused
                  to appear.
                </span>
              </p>
              <p>
                Cardi B and Pink, also reportedly rejected the NFL's offer to perform at the Atlanta event - in a show
                of solidarity with Kaepernick - and it was eventually headlined by Maroon 5, Travis Scott and Big
                Boi. It's not the only politics Rihanna gets into during the interview. She also opens up about gun
                violence in America.
              </p>
              <p>
                <span class="bold-text">"It is devastating," she says.</span>
              </p>
              <p>
                "People are being murdered by war weapons that they legally purchase. This is just not normal.
                That should never, ever be normal."
              </p>
              <p>
                On her personal life, which she generally avoids discussing, Rihanna confirms she's in a
                relationship. Her rumoured boyfriend is the the Saudi businessman Hassan Jameel.
              </p>
              <p>
                <span class="bold-text">
                  "Yeah, I'm dating," she says. "I'm actually in an exclusive relationship for quite some time, and it's
                  going really well, so I'm happy."
                </span>
              </p>
              <p>
                She is, of course, keen to talk about her fashion brand, Fenty - named after her real name Robyn
                Rihanna Fenty. The 31-year-old says she made it a rule that she had to love and wear all of Fenty
                Maison herself - the high-end fashion line she founded with Louis Vuitton earlier this year. She also
                reveals that she inspires herself - she is her own muse.
              </p>
              <p>
                <span
                  class="bold-text"
                >"I'm not the face of my brand, but I am the muse, and my DNA has to run all the way through it,"</span>
                she says.
              </p>
            </div>

            <div class="social-networks-wrap">
              <div class="icons-wrap">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.212"
                    height="18.424"
                    viewBox="0 0 9.212 18.424"
                  >
                    <path
                      id="Path_22"
                      data-name="Path 22"
                      d="M133.758,6.333V4.03a1.152,1.152,0,0,1,1.152-1.152h1.152V0h-2.3A3.454,3.454,0,0,0,130.3,3.455V6.333H128V9.212h2.3v9.212h3.455V9.212h2.3l1.152-2.879Z"
                      transform="translate(-128)"
                      fill
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    id="linkedin"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.424"
                    height="17.838"
                    viewBox="0 0 18.424 17.838"
                  >
                    <g id="Group_38" data-name="Group 38" transform="translate(0 5.171)">
                      <g id="Group_37" data-name="Group 37">
                        <rect
                          id="Rectangle_26"
                          data-name="Rectangle 26"
                          width="4.12"
                          height="12.667"
                          fill
                        />
                      </g>
                    </g>
                    <g id="Group_40" data-name="Group 40" transform="translate(5.758 5.171)">
                      <g id="Group_39" data-name="Group 39">
                        <path
                          id="Path_23"
                          data-name="Path 23"
                          d="M169.585,160.149c-.044-.014-.085-.029-.131-.041s-.111-.023-.167-.032a3.692,3.692,0,0,0-.739-.075,5.725,5.725,0,0,0-4.428,2.422V160H160v12.667h4.12v-6.909s3.114-4.337,4.428-1.152v8.061h4.119v-8.548A4.108,4.108,0,0,0,169.585,160.149Z"
                          transform="translate(-160 -160)"
                          fill
                        />
                      </g>
                    </g>
                    <g id="Group_42" data-name="Group 42" transform="translate(0.223 0)">
                      <g id="Group_41" data-name="Group 41">
                        <circle
                          id="Ellipse_12"
                          data-name="Ellipse 12"
                          cx="1.94"
                          cy="1.94"
                          r="1.94"
                          fill
                        />
                      </g>
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.209"
                    height="15.607"
                    viewBox="0 0 19.209 15.607"
                  >
                    <path
                      id="Path_24"
                      data-name="Path 24"
                      d="M19.209,49.848a8.21,8.21,0,0,1-2.269.622,3.916,3.916,0,0,0,1.732-2.177,7.87,7.87,0,0,1-2.5.953,3.938,3.938,0,0,0-6.812,2.693,4.055,4.055,0,0,0,.091.9,11.146,11.146,0,0,1-8.117-4.119,3.939,3.939,0,0,0,1.21,5.263A3.889,3.889,0,0,1,.768,53.5v.043a3.956,3.956,0,0,0,3.155,3.869,3.931,3.931,0,0,1-1.032.13,3.482,3.482,0,0,1-.746-.067,3.975,3.975,0,0,0,3.68,2.743,7.913,7.913,0,0,1-4.883,1.68A7.376,7.376,0,0,1,0,61.84a11.086,11.086,0,0,0,6.041,1.767A11.131,11.131,0,0,0,17.249,52.4c0-.174-.006-.342-.014-.509A7.856,7.856,0,0,0,19.209,49.848Z"
                      transform="translate(0 -48)"
                      fill
                    />
                  </svg>
                </a>
              </div>
            </div>
          </b-card>

          <!-- Latest News -->
          <b-card class="latest-news" header-tag="header">
            <div class="title-wrap">
              <span class="text">Latest News</span>
            </div>
            <div class="item-wrap">
              <div class="image-wrap">
                <img src="../../../../assets/images/new-info/img-2.png" />
              </div>
              <div class="description-wrap">
                <span>Nobel Prize for Literature to name two winners after scandal-hit year</span>
              </div>
            </div>
            <div class="item-wrap">
              <div class="image-wrap">
                <img src="../../../../assets/images/new-info/img-3.png" />
              </div>
              <div class="description-wrap">
                <span>Goldman Sachs reviews role in Chinese tech firm Megvii</span>
              </div>
            </div>
            <div class="item-wrap">
              <div class="image-wrap">
                <img src="../../../../assets/images/new-info/img-4.png" />
              </div>
              <div class="description-wrap">
                <span>Badger culls risk increased spread of TB to cattle, study finds</span>
              </div>
            </div>
          </b-card>
        </b-card-group>
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

<style scoped>
/* Social */
.card-wrap .new-info .social-networks-wrap {
  position: relative;
  margin-top: 90px;
}
.card-wrap .new-info .social-networks-wrap .icons-wrap {
  display: flex;
  justify-content: flex-end;
}
.card-wrap .new-info .social-networks-wrap a {
  width: 46px;
  height: 46px;
  display: block;
  border: 2px solid #052962;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
}
.card-wrap .new-info .social-networks-wrap a svg {
  fill: #052962;
}
.card-wrap .new-info .social-networks-wrap a:hover {
  background-color: #052962;
}
.card-wrap .new-info .social-networks-wrap a:hover svg {
  fill: #f8c61a;
}



/* Common */
.card.new-info,
.card.latest-news {
  border: none;
}
.card-wrap .new-info {
  max-width: 65%;
}
.card-wrap .latest-news {
  max-width: 31%;
}
.card-wrap .new-info .card-body,
.card-wrap .latest-news .card-body {
  padding: 0;
}
.blue-text {
  color: blue;
}
.bold-text {
  font-weight: bold;
}


/* New Info */
.card-wrap .new-info .title-wrap {
  text-align: start;
  padding: 37px 0;
}
.card-wrap .new-info .title-wrap .text {
  font-size: 32px;
  color: #3f3f3f;
  font-weight: bold;
  text-transform: uppercase;
}

.card-wrap .new-info .card-text {
  display: flex;
  justify-content: space-between;
  color: #c3c3c3;
  font-size: 18px;
  padding-top: 25px;
}


.card-wrap .new-info .description-wrap {
  text-align: start;
  margin-top: 34px;
  max-width: 1082px;
  font-size: 22px;
    border-bottom: none;

}

/* Latest News */
.card-wrap .latest-news .title-wrap {
  position: relative;
  text-align: start;
  padding: 37px 0;
}
.card-wrap .latest-news .title-wrap::before {
  content: "";
  width: 53%;
  height: 2px;
  background-color: #052962;
  position: absolute;
  top: 56px;
  right: 0px;
}
.card-wrap .latest-news .title-wrap .text {
  font-size: 32px;
  color: #052962;
  font-weight: bold;
  text-transform: uppercase;
}

.card-wrap .latest-news .item-wrap img {
  width: 100%;
}
.card-wrap .latest-news .description-wrap {
  text-align: start;
  max-width: 526px;
  padding-top: 15px;
  color: black;
  padding-bottom: 27px;
  border-bottom: none;
}
.card-wrap .latest-news .description-wrap span {
  font-size: 20px;
  font-weight: bold;
}
</style>

<style>
/* Content */
.container.content {
  max-width: 1638px;
}
.main-wrap {
  display: flex;
  justify-content: space-between;
}

/* Header */
.header-wrap .top-menu-wrap .container {
  max-width: 1638px !important;
  padding-right: unset !important;
  padding-left: unset !important;
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

/* Footer */
/* footer {
  background-color: #052962;
  margin-top: 72px;
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

