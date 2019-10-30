<template>
  <div class="business-wrap">
    <div
      class="title-wrap"
      data-aos="fade-right"
      v-bind:style="titleBorder ? {borderLeft: '5px solid #' + titleBorder} : {}"
    >
      <span class="title-text">{{ title }}</span>
    </div>
    <slick ref="slick" :options="slickOptions" class="slick" v-if="sendedNews.length"
          data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
>
      <div
        class="card-wrap"
        v-for="news of sendedNews"
        v-bind:key="news.title"
        @click="goToCurrentNews(news)"
      >
        <b-card class="mb-2 new-card new-card col-md-12" :title='news.title'>
          <b-card-img class="card-image" :src="news.urlToImage"></b-card-img>
          <b-card-text>{{ news.description }}</b-card-text>
          <template v-slot:footer>
            <small class="text-muted">6 min ago</small>
            <small class="text-muted">bbc.com</small>
          </template>
        </b-card>
      </div>

       <!-- <div class="card-wrap">
            <b-card
              class="mb-2 new-card"
              title="Badger culls risk increased spread of TB to cattle, study finds"
            >
              <b-card-img :src="require('../../assets/images/business/img-7.png')"></b-card-img>
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
            <b-card
              class="mb-2 new-card"
              title="Nobel physics prize: 'Ground-breaking' win 
for planets and Big Bang"
            >
              <b-card-img :src="require('../../assets/images/business/img-8.png')"></b-card-img>
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
            <b-card
              class="mb-2 new-card"
              title="Climate change: Emperor penguin 'needs greater protection'"
            >
              <b-card-img :src="require('../../assets/images/business/img-9.png')"></b-card-img>
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
          </div> -->
    </slick>
  </div>
</template>

<script>
import Slick from "vue-slick";

export default {
  components: {
    Slick
  },
  name: "card",
  props: ["sendedNews", "title", "titleBorder"],
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        infinite: true,
        accessibility: true,
        adaptiveHeight: true,
        arrows: true,
        dots: true,
        draggable: true,
        edgeFriction: 0.3,
        swipe: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
      }
    };
  },
  created() {},
  methods: {
    goToCurrentNews(news) {
      this.$router.push({ name: "news-info", params: { news } });
    }
  }
};
</script>

<style scoped>
@import "../../../node_modules/slick-carousel/slick/slick.css";

@media (max-width: 1199px) {
  .business-wrap .title-wrap .title-text,
  .entertainment-wrap .title-wrap .title-text,
  .science-wrap .title-wrap .title-text {
    font-size: 28px !important;
  }
}
@media (max-width: 1139px) {
  .business-wrap .title-wrap .title-text,
  .entertainment-wrap .title-wrap .title-text,
  .science-wrap .title-wrap .title-text {
    font-size: 20px !important;
  }
  .card-image-wrap {
  height: 150px !important;
}

.new-card .card-body {
  /* height: 230px !important; */
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
.card-image-wrap {
  height: 330px;
}

.card-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-text-wrap {
  padding-bottom: 10px;
}
.card-text {
  padding: 19px 0 10px 0;
  max-height: 70px;
  overflow: hidden;
  border-bottom: none;
}
.card-footer {
  padding: 15px 0 0 0 !important;
  background-color: unset !important;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #b3abab;
}
.new-card {
  margin: 0 auto !important;
  max-width: 526px !important;
  border: none !important;
  padding-bottom: 15px;
}

.new-card .card-body {
  padding: 0 !important;
  height: 408px;
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
</style>