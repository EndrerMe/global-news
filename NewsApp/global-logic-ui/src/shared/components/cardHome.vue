<template>
  <div class="business-wrap">
    <div
      class="title-wrap"
      v-bind:style="titleBorder ? {borderLeft: '5px solid #' + titleBorder} : {}"
    >
      <span class="title-text">{{ title }}</span>
    </div>
    <slick
      ref="slick"
      :options="slickOptions"
      class="slick"
      v-if="sendedNews.length"
      @init="test2($event)"
    >
      <div
        class="card-wrap"
        v-for="news of sendedNews"
        v-bind:class="{ 'center-element': news.isCenter }"
        v-bind:key="news.title"
        @click="goToCurrentNews(news)"
      >
        <b-card class="mb-2 new-card new-card col-md-12">
          <div class="image-wrap">
            <b-card-title>{{ news.title }}</b-card-title>
            <div class="gradient"></div>
            <vue-load-image>
              <b-card-img slot="image" class="card-image" :src="news.urlToImage"></b-card-img>
              <svg
                slot="preloader"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="54px"
                height="80px"
                viewBox="0 0 24 30"
                style="enable-background:new 0 0 50 50;"
                xml:space="preserve"
              >
                <rect x="0" y="0" width="4" height="20" fill="#333">
                  <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="1; .2; 1"
                    begin="0s"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="7" y="0" width="4" height="20" fill="#333">
                  <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="1; .2; 1"
                    begin="0.2s"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="14" y="0" width="4" height="20" fill="#333">
                  <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="1; .2; 1"
                    begin="0.4s"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
              <div slot="error">error message</div>
            </vue-load-image>
          </div>

          <div class="card-text-wrap">
            <b-card-text>{{ news.description }}</b-card-text>
          </div>

          <template v-slot:footer>
            <small class="text-muted">{{ news.publishedAt | moment("from", "now") }}</small>
            <small class="text-muted">{{ news.source.name }}</small>
          </template>
        </b-card>
      </div>
    </slick>
  </div>
</template>

<script>
import Slick from "vue-slick";
import { mapActions } from "vuex";
import VueLoadImage from "vue-load-image";

export default {
  components: {
    Slick,
    "vue-load-image": VueLoadImage
  },
  name: "cardHome",
  props: ["sendedNews", "title", "category", "titleBorder"],
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
      isCenterSlide: false,
      slickOptions: {
        slidesToShow: 3,
        infinite: true,
        accessibility: true,
        adaptiveHeight: false,
        arrows: true,
        dots: true,
        draggable: true,
        edgeFriction: 0.3,
        swipe: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },

    ...mapActions(["changeCurrentNews"]),

    goToCurrentNews(news) {
      let category = this.category;
      this.changeCurrentNews({ news: news, category: category });
      this.$router.push({
        name: "news-info",
        params: { news: news, category: category }
      });
    },

    test2(e) {
      if (this.window.width >= 767) {
        e.target.firstChild.firstChild.children[1].classList.add(
          "center-element"
        );
      } else {
        e.target.children[1].children[0].children[2].classList.add(
          "center-element"
        );
      }
    }
  }
};
</script>

<style>
.slick-slide.center-element {
  margin: 0 10px;
}
.slick-track {
  display: flex !important;
}
</style>

<style scoped>
@import "../../../node_modules/slick-carousel/slick/slick.css";

svg path,
svg rect {
  fill: #ff6700;
}

.new-card .gradient {
  position: absolute;
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
  z-index: 1;
}

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
.new-card .image-wrap {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
}

.new-card .image-wrap img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: unset !important;
}
.card-title {
  width: 92%;
  padding: 0;
  left: 50%;
  transform: translate(-50%);
  position: absolute;
  color: white;
  font-family: "Amiri-Bold";
  font-size: 20px;
  bottom: 5px;
  z-index: 2;
}
.card-text-wrap {
  padding: 20px 0 16px 0;
}
.card-text {
  padding: 0;
  height: 45px;
  overflow: hidden;
  border-bottom: none;
  font-family: "Poppins-Regular";
  font-size: 16px;
}
.card-footer {
  padding: 15px 0 0 0 !important;
  background-color: unset !important;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #b3abab;
  font-family: "Poppins-Regular";
  font-size: 14px;
}
.new-card {
  border: none !important;
  padding-bottom: 15px;
  padding-left: 0;
  padding-right: 0;
}

.new-card .card-body {
  padding: 0 !important;
}

.entertainment-wrap {
  margin-top: 60px;
  text-align: start;
}
.entertainment-wrap .title-wrap .title-text {
  display: block;
  font-size: 32px;
  font-family: "Poppins-Bold";
  text-transform: uppercase;
  letter-spacing: 10px;
  padding: 6px 30px;
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
@media (max-width: 1199px) {
  .business-wrap .title-wrap .title-text,
  .entertainment-wrap .title-wrap .title-text,
  .science-wrap .title-wrap .title-text {
    font-size: 28px !important;
  }
  .card-title {
    font-size: 16px !important;
  }
}
@media (max-width: 1139px) {
  .business-wrap .title-wrap .title-text,
  .entertainment-wrap .title-wrap .title-text,
  .science-wrap .title-wrap .title-text {
    font-size: 20px !important;
  }
  .image-wrap {
    height: 245px !important;
  }
  .card-title {
    font-size: 12px !important;
    bottom: 0;
  }
  .card-footer {
    font-size: 10px;
  }
  .card-text {
    font-size: 12px;
    height: 35px;
  }
  .card-text-wrap {
  padding: 18px 0 10px 0;
}
}
@media (max-width: 767px) {
  .business-wrap .title-wrap .title-text,
  .entertainment-wrap .title-wrap .title-text,
  .science-wrap .title-wrap .title-text {
    font-size: 16px !important;
  }
  .business-wrap,
  .entertainment-wrap,
  .science-wrap {
    margin-top: 30px !important;
  }
  .card-title {
    font-size: 16px !important;
  }
  .image-wrap {
    width: unset !important;
    height: 330px !important;
  }
  .slick-list {
    height: unset !important;
  }
  .card-wrap {
    display: flex !important;
    justify-content: center !important;
  }
  .new-card {
    padding-right: 0;
  }
  .new-card .image-wrap {
    padding-bottom: 0;
  }
}
@media (max-width: 575px) {
  .business-wrap .title-wrap .title-text,
  .entertainment-wrap .title-wrap .title-text,
  .science-wrap .title-wrap .title-text {
    font-size: 12px !important;
    letter-spacing: 5px !important;
  }
  .slick-slider {
    margin-top: 20px;
  }
}
@media (max-width: 450px) {
  .image-wrap {
    height: 250px !important;
  }
}
@media (max-width: 375px) {
  .image-wrap {
    height: 210px !important;
  }
}
</style>