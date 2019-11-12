<template>
  <div class="col-md-4" @click="goToCurrentNews(news)">
    <b-card class="mb-2 new-card">
      <div class="image-wrap">
        <div class="gradient"></div>
        <vue-load-image>
          <b-card-img slot='image' :src="news.urlToImage"></b-card-img>
          <svg slot='preloader'
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
        <div class="title-wrap">
          <span class="title">
            <p>{{ news.title }}</p>
          </span>
        </div>
      </div>
      <div class="text-wrap">
        <b-card-text>{{ news.content }}</b-card-text>
      </div>
      <template v-slot:footer>
        <small class="text-muted">{{ news.publishedAt | moment("from", "now") }}</small>
        <small class="text-muted">{{ news.source.name }}</small>
      </template>
    </b-card>
  </div>
</template>

<script>
// Vendors
import { mapActions } from "vuex";
import VueLoadImage from 'vue-load-image';

export default {
  name: "cardCategory",
  props: ["news", "category"],
  components: {
    'vue-load-image': VueLoadImage,
  },
  methods: {
    ...mapActions(["changeCurrentNews"]),

    goToCurrentNews(news) {
      const category = this.category;
      this.changeCurrentNews({ news: news, category: category });
      this.$router.push({ name: "news-info", params: { news, category } });
    }
  }
};
</script>

<style scoped>
.new-card {
  border: none !important;
}
.new-card .text-wrap p {
  max-height: 70px;
  overflow: hidden;
}
.new-card .card-body {
  padding: 0 !important;
}
.new-card .image-wrap {
  position: relative;
  padding-bottom: 100%;
  width: 100%;
}
.new-card .image-wrap img {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: unset !important;
}
.new-card .gradient {
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
  z-index: 1;
}
.new-card .title-wrap {
  position: absolute;
  width: 92%;
  bottom: 10px;
  font-size: 20px;
  color: white;
  font-size: bold;
  text-align: start;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%);
  font-family: "Amiri-Bold";
  z-index: 2;
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
  border-top: 1px solid #b3abab;
  font-size: 14px;
  font-family: "Poppins-Regular";
}

.new-card .card-text {
  padding: 20px 0 13px 0;
  text-align: start;
  border: none;
  font-family: "Poppins-Regular";
  font-size: 16px;
}
.new-card .text-wrap {
  padding-bottom: 10px;
  height: 80px;
}
.card-deck {
  margin-bottom: 60px;
}
.card-deck .card {
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-bottom: 50px !important;
}

@media (max-width: 1139px) {
  .new-card .title-wrap {
    font-size: 12px !important;
  }
  .new-card .card-text {
    font-size: 12px;
    max-height: 56px !important;
  }
  .new-card .text-wrap {
    height: 65px !important;
  }
  .new-card .title-wrap {
    bottom: 10px;
  }
  .card-deck .card-footer {
    font-size: 10px;
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
@media (max-width: 600px) {
  .new-card .title-wrap {
    font-size: 20px !important;
  }
}
@media (max-width: 550px) {
  .new-card .title-wrap {
    font-size: 18px !important;
  }
}
@media (max-width: 419px) {
  .new-card .title-wrap {
    font-size: 14px !important;
  }
}
@media (max-width: 375px) {
  .new-card .title-wrap span {
    font-size: 12px !important;
  }
}

svg path,
svg rect {
  fill: #ff6700;
}
</style>