<template>
  <b-card class="latest-news" header-tag="header">
    <div class="title-wrap">
      <span class="text">Latest News</span>
    </div>
    <div class="item-wrap" v-for="news of latestNews" :key="news.title">
      <div class="image-wrap">
        <img :src="news.urlToImage" />
        <span class="category-wrap entertainment">{{ category }}</span>
      </div>
      <div class="description-wrap">
        <span>{{ news.title }}</span>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  props: ["latestNews", 'category'],
  name: "latestNews"
};
</script>

<style scoped>
@media (max-width: 1139px) {
  .latest-news .text {
    font-size: 22px !important;
  }
  .latest-news .description-wrap span {
    font-size: 16px !important;
  }
  .latest-news .description-wrap {
    padding-bottom: 15px !important;
  }
}
@media (max-width: 812px) {
  .latest-news .text {
    font-size: 18px !important;
  }
}
@media (max-width: 690px) {
  .latest-news .text {
    font-size: 16px !important;
  }
}
@media (max-width: 610px) {
  .latest-news .text {
    font-size: 14px !important;
  }
}
@media (max-width: 575px) {
  .latest-news {
    max-width: unset !important;
  }
}
.latest-news {
  border: none;
}
.latest-news .card-body {
  padding: 0;
}
.latest-news .item-wrap .image-wrap {
  position: relative;
}
.latest-news .item-wrap img {
  width: 100%;
}
.latest-news .item-wrap .category-wrap {
  position: absolute;
  font-size: 14px;
  font-family: "Poppins-Medium";
  color: white;
  padding-left: 37px;
  left: 0px;
  bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 4px;
}
.latest-news .item-wrap .category-wrap.entertainment::before {
  content: "";
  width: 3px;
  height: 20px;
  background-color: #ff995e;
  position: absolute;
  left: 22px;
}
.latest-news .item-wrap .category-wrap.business::before {
  content: "";
  width: 3px;
  height: 20px;
  background-color: #c710a2;
  position: absolute;
  left: 22px;
}
.latest-news .item-wrap .category-wrap.science::before {
  content: "";
  width: 3px;
  height: 20px;
  background-color: #10c7ba;
  position: absolute;
  left: 22px;
}
.latest-news .card-body .title-wrap {
  display: flex;
  align-items: center;
}
.latest-news .card-body .title-wrap span {
  display: block;
}
.latest-news .card-body .title-wrap::after {
  content: "";
  width: 32%;
  height: 2px;
  background-color: #052962;
  display: inline-block;
  margin-left: 15px;
}
.latest-news .title-wrap {
  position: relative;
  text-align: start;
  padding: 37px 0;
}
.latest-news .title-wrap .text {
  font-size: 32px;
  color: #052962;
  font-weight: bold;
  text-transform: uppercase;
}
.latest-news .item-wrap img {
  width: 100%;
}
.latest-news .description-wrap {
  text-align: start;
  max-width: 526px;
  padding-top: 13px;
  color: black;
  padding-bottom: 27px;
  border-bottom: none;
}
.latest-news .description-wrap span {
  font-size: 20px;
  font-family: "Amiri-Bold";
  max-height: 51px;
  display: inline-block;
  overflow: hidden;
}
</style>