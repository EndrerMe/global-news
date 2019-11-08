<template>
    <div
    id="mobile-side-menu-wrap"
    class="mobile-side-menu-wrap"
    v-bind:class="{ sideMenuActive: isShowSideMenu }"
    >
        <b-navbar-nav id="mobile-side-menu" class="mobile-side-menu"
        >
            <b-nav-item class="close-link-wrap">
            <div class="close-wrap" @click="toggleMobileSideMenu()">
                <a class="close-button" href="#"></a>
            </div>
            </b-nav-item>
            <b-nav-item href="#" class="wrap">
            <div class="top-side-wrap">
                <span class="sub-item" v-bind:class="{ 'show-sub-item': isShowSideMenu }">
                Currency Converter
                <font-awesome-icon icon="caret-down" />
                </span>
                <span class="sub-item" @click='goToWeather()' v-bind:class="{ 'show-sub-item': isShowSideMenu }">
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
                <button @click="showSubscribeFullFun()">Subscribe Us</button>
                </div>
            </div>
            </b-nav-item>
        </b-navbar-nav>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'mobileMenu',
    computed: mapGetters(["getWeatherData"]),
    props: ['isShowSideMenu'],
    methods: {
        ...mapActions([
            'getWeatherByCountry'
        ]),

        toggleMobileSideMenu() {
            this.$emit('toggleMobileSideMenu', {state: false})
        },

        goToWeather() {
            this.$router.push({name: "weather-mobile"});
            this.$emit('toggleMobileSideMenu', {state: false})
        }
    }
}
</script>

<style scoped>
.mobile-side-menu-wrap .nav-item a .top-side-wrap .sub-item {
  display: flex;
  opacity: 0;
  justify-content: space-between;
  padding: 0 15px;
  margin-top: 20px;
}
.show-sub-item {
  opacity: 1 !important;
  transition: opacity 0.5s;
}

.sideMenuActive {
  visibility: visible !important;
  width: 82% !important;
  transition: all 0.2s;
}

.mobile-side-menu-wrap{
  visibility: hidden;
}

.mobile-side-menu-wrap .mobile-side-menu {
  /* display: none; */
  padding-top: 57px;
}

.mobile-side-menu-wrap .mobile-side-menu .nav-item.wrap {
  border-top: 1px solid #6d6d6d;
}

.mobile-side-menu-wrap .mobile-side-menu .nav-item a .bottom-side-wrap button:hover {
  background: #ffe076;
}

.mobile-side-menu-wrap
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

.mobile-side-menu-wrap
  .mobile-side-menu
  .nav-item
  a
  .bottom-side-wrap
  .sub-item {
  display: flex;
  flex-direction: column;
  padding: 0 15px;
}

.mobile-side-menu-wrap
  .nav-item
  a
  .bottom-side-wrap
  .sub-item.date {
  padding-bottom: 35px;
}

.mobile-side-menu-wrap .nav-item a .bottom-side-wrap {
  padding-bottom: 20px;
}

.mobile-side-menu-wrap
  .nav-item
  a
  .top-side-wrap
  .sub-item
  svg {
  color: rgb(248, 198, 26);
  transform: rotate(-90deg);
}

.mobile-side-menu-wrap .nav-item a .top-side-wrap .sub-item {
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  margin-top: 20px;
}

.mobile-side-menu-wrap .close-link-wrap {
  display: none;
  position: absolute;
}

.mobile-side-menu-wrap .close-link-wrap .close-wrap a {
  position: absolute;
  width: 30px !important;
  height: 30px;
  top: -44px;
  right: 30px;
}

.mobile-side-menu-wrap .close-link-wrap .close-wrap a::after {
  position: absolute;
  content: "";
  width: 30px;
  height: 2px;
  background-color: rgb(248, 198, 26);
  top: 14px;
  right: 0px;
  transform: rotate(-45deg);
}

.mobile-side-menu-wrap .close-link-wrap .close-wrap a::before {
  position: absolute;
  content: "";
  width: 30px;
  height: 2px;
  background-color: rgb(248, 198, 26);
  top: 14px;
  right: 0px;
  transform: rotate(45deg);
}

.mobile-side-menu-wrap .mobile-side-menu {
    display: flex;
    height: 100%;
}

.mobile-side-menu-wrap .mobile-side-menu .nav-item {
    display: flex;
    width: 100%;
    font-family: "Poppins-Regular";
}

.mobile-side-menu-wrap .mobile-side-menu .nav-item a {
    width: 100%;
}

@media (max-width: 767px) {
  .mobile-side-menu-wrap {
    position: absolute;
    background: #052962;
    z-index: 9999;
    top: 0px;
    left: 0;
    bottom: 0;
  }
}
</style>