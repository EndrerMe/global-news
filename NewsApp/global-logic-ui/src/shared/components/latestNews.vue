<template>
  <b-card class="latest-news" header-tag="header">
    <div class="title-wrap">
      <span class="text">Latest News</span>
    </div>
    <div class="item-wrap" v-for="news of latestNews" :key="news.title">
      <div class="image-wrap">
        <vue-load-image>
          <img slot=image :src="news.urlToImage" />
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
        <span class="category-wrap entertainment">{{ category }}</span>
      </div>
      <div class="description-wrap">
        <span>{{ news.title }}</span>
      </div>
    </div>
  </b-card>
</template>

<script>
// Vendors
import VueLoadImage from 'vue-load-image'

export default {
  props: ["latestNews", 'category'],
  name: "latestNews",
  components: {
    'vue-load-image': VueLoadImage,
  },
};
</script>

<style scoped>
svg path,
svg rect {
  fill: #ff6700;
}
.latest-news {
  border: none;
}
.latest-news .card-body {
  padding: 0;
}
.latest-news .item-wrap .image-wrap {
  height: 309px;
  position: relative;
}
.latest-news .item-wrap .image-wrap .vue-load-image{
  height: 100%;
}

.latest-news .item-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  justify-content: space-between;
}
.latest-news .card-body .title-wrap span {
  display: block;
  font-family: 'Amiri-Bold';
  font-size: 32px;
}
.latest-news .card-body .title-wrap::after {
  content: "";
  width: 50%;
  height: 2px;
  background-color: #052962;
  display: inline-block;
  margin-bottom: 4px;
}
.latest-news .title-wrap {
  position: relative;
  text-align: start;
  padding: 30px 0;
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
  max-height: 55px;
  display: inline-block;
  overflow: hidden;
}

/* Media */
@media (max-width: 1520px) {
  .latest-news .card-body .title-wrap::after{
    width: 45%;
  }
}
@media (max-width: 1400px) {
  .latest-news .card-body .title-wrap::after{
    width: 40%;
  }
}
@media (max-width: 1400px) {
  .latest-news .card-body .title-wrap::after{
    width: 35%;
  }
}
@media (max-width: 1200px) {
  .latest-news .card-body .title-wrap::after{
    width: 30%;
  }
}
@media (max-width: 1139px) {
  .latest-news .text {
    font-size: 22px !important;
  }
  .latest-news .description-wrap span {
    font-size: 16px !important;
    max-height: 50px;
  }
  .latest-news .description-wrap {
    padding-bottom: 15px !important;
  }
  .latest-news .card-body .title-wrap::after{
    width: 35%;
  }
  .latest-news .title-wrap {
    position: relative;
    text-align: start;
    padding: 20px 0;
  }
  .latest-news .item-wrap .image-wrap{
    height: 167px;
  }
  .card-wrap .latest-news{
    padding-left: 0;
    padding-right: 0;
  }
}
@media (max-width: 842px) {
  .card-wrap .latest-news{
    padding-right: 15px;
  }
}
@media (max-width: 795px) {
  .latest-news .card-body .title-wrap::after{
    width: 31%;
  }
}
@media (max-width: 767px) {
  .latest-news .card-body .title-wrap span {
    font-size: 18px !important;
  }
  .latest-news .title-wrap {
    padding: 30px 0;
  }
  .latest-news .item-wrap .category-wrap{
    font-size: 12px;
  }
  .latest-news .description-wrap span{
    font-size: 14px !important;
  }
  .latest-news .card-body .title-wrap::after{
    margin-left: unset;
    width: 80%;
  }
  .card-wrap .latest-news{
    padding-left: 15px;
  }
  .card-wrap .latest-news{
    max-width: unset !important; 
  }
  .latest-news .item-wrap .image-wrap{
    height: unset;
  }
  .card-wrap .latest-news .card-body {
    border-top: 1px solid #ebebeb ;
  }
}
@media (max-width: 690px) {
  .latest-news .text {
    font-size: 16px !important;
  }
  .latest-news .card-body .title-wrap::after{
    margin-left: unset;
    width: 75%;
  }
}
@media (max-width: 610px) {
  .latest-news .text {
    font-size: 14px !important;
  }
}
@media (max-width: 590px) {
  .latest-news .card-body .title-wrap::after{
    margin-left: unset;
    width: 70%;
  }
}
@media (max-width: 500px) {
  .latest-news .card-body .title-wrap::after{
    margin-left: unset;
    width: 65%;
  }
}
@media (max-width: 575px) {
  .latest-news {
    max-width: unset !important;
  }
}
@media (max-width: 420px) {
  .latest-news .card-body .title-wrap::after{
    margin-left: unset;
    width: 60%;
  }
}
@media (max-width: 375px) {
  .latest-news .card-body .title-wrap::after{
    margin-left: unset;
    width: 55%;
  }
}
@media (max-width: 350px) {
  .latest-news .card-body .title-wrap::after{
    margin-left: unset;
    width: 50%;
  }
}
</style>