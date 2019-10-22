<template>
  <div class="header-wrap">
    <div class="header">
      <div class="header-content">
        <div class="top-menu-wrap">
          <div class="container">
            <b-navbar class="top-menu" toggleable="md" type="dark" variant="info">
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item href="#">
                    <img src="../../../assets/images/logo.svg" alt="logo" />
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
                    <span>Spotr</span>
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
  </div>
</template>

<style scoped>
.top-menu-wrap .navbar {
  background-color: #052962 !important;
}
.top-menu-wrap {
  background-color: #052962;
}
.top-menu-wrap .container {
  max-width: 1638px;
}
.bottom-menu {
  background-color: unset !important;
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
nav.bottom-menu {
  margin: 0 auto;
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
  margin: 0 15px;
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
</style>

<style scoped>
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