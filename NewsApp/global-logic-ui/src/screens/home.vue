<template>
  <div>
    <div class="dark-screen"></div>
    <!-- Header -->

    <div class="container content">
      <!-- Slider -->

      <div class="slider-wrap">
        <homeSlider :slidesNews='getTopNewsFromState'></homeSlider>
      </div>
      <!-- <cardHome :sendedNews='businessNewsHome' :category="'business'" :title="'business'" :titleBorder="'c710a2'"></cardHome>
      <cardHome :key='entertainmentNews.title' :sendedNews='entertainmentNewsHome' :category="'entertainment'" :title="'entertainment'" :titleBorder="'ff995e'"></cardHome>
      <cardHome :sendedNews='scienceNewsHome' :category="'science'" :title="'science'" :titleBorder="'10c7ba'"></cardHome> -->
      <cardHome :sendedNews='businessNewsHome' :title="'Business'" :category="'business'" :titleBorder="'c710a2'"></cardHome>
      <cardHome :sendedNews='entertainmentNewsHome' :title="'Entertainment'" :category="'entertainment'" :titleBorder="'FF995E'"></cardHome>
      <cardHome :sendedNews='scienceNewsHome' :title="'Science'" :category="'science'" :titleBorder="'10c7ba'"></cardHome>
    </div>
  </div>
</template>

<script>
// Vendors
import {mapGetters, mapState } from 'vuex'
// Components
import cardHome from '@/shared/components/cardHome';
import homeSlider from '@/shared/components/home-slider';
// Services
import newsService from '@/shared/services/news.service';

export default {
  components: { 
    cardHome,
    homeSlider
  },
  computed: {
    ...mapGetters(['getTopNewsFromState', 'getNewsFromState']),
    ...mapState({
      newsHome: (state) => {
        this.currentNews = state.news.newsHome;
      },
    }),
  },
  name: "Home",
  data() {
    return {
      currentNews: [],
      isShowSideMenu: false,
      slidesNews: [],
      entertainmentNewsHome: [],
      scienceNewsHome: [],
      businessNewsHome: [],
    };
  },
  beforeCreate() {
    newsService.getData('entertainment', 1).then((res) => {
      let newsCol = 3;
      for (let i = 0; i < newsCol; i++) {
        if (res.data.articles[i].urlToImage) {
          this.entertainmentNewsHome.push(res.data.articles[i]);
        } else {
          newsCol += 1;
          continue;
        }
      }
      this.entertainmentNewsHome[1].isCenter = true;
    })
    newsService.getData('science', 1).then((res) => {
      let newsCol = 3;
      for (let i = 0; i < newsCol; i++) {
        if (res.data.articles[i].urlToImage) {
          this.scienceNewsHome.push(res.data.articles[i]);
        } else {
          newsCol += 1;
          continue;
        }
      }
      this.scienceNewsHome[1].isCenter = true;
    })
    newsService.getData('business', 1).then((res) => {
      let newsCol = 3;
      for (let i = 0; i < newsCol; i++) {
        if (res.data.articles[i].urlToImage) {
          this.businessNewsHome.push(res.data.articles[i]);
        } else {
          newsCol += 1;
          continue;
        }
      }
      this.businessNewsHome[1].isCenter = true;
    })
  },
  created() {
    this.$store.subscribe((mutation, state) => {    
      this.currentNews = state.news.newsHome;
    })
  },
  mounted () {
    this.currentNews = this.getNewsFromState;
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
    },
  },
};
</script>

<style>
@import "./../../node_modules/slick-carousel/slick/slick.css";

/* Slick Slider */
.slider-wrap{
  padding-bottom: 30px;
}
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
/* Slider Media */
@media (max-width: 767px) {
  .slick-slider button.slick-next{
    right: -5px !important;
  }
  .slick-slider button.slick-prev{
    right: 30px !important;
  }
}
</style>

<style scoped>
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

/* Header */
.top-menu-wrap {
  background-color: #052962;
}
.top-menu-wrap .navbar-nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

/* Media */
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
