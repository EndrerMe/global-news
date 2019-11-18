<template>
  <div class="col-md-6">
    <b-card class="mb-2 new-card">
      <div class="image-wrap">
        <div class="gradient"></div>

        <vue-load-image>
        <b-card-img slot="image" :src="news.urlToImage"></b-card-img>

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
            <rect x="0" y="0" width="4" height="20" fill="#F8C61A">
              <animate
                attributeName="opacity"
                attributeType="XML"
                values="1; .2; 1"
                begin="0s"
                dur="1s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="7" y="0" width="4" height="20" fill="#F8C61A">
              <animate
                attributeName="opacity"
                attributeType="XML"
                values="1; .2; 1"
                begin="0.2s"
                dur="1s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="14" y="0" width="4" height="20" fill="#F8C61A">
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

        <div class="gradient"></div>
        <div class="title-wrap">
          <span class="title">
            <p>{{ news.title }}</p>
          </span>
        </div>
      </div>
      <div class="text-wrap">
        <b-card-text>{{ news.description }}</b-card-text>
      </div>
      <div class="card-footer">
        <span>left</span>
        <span>right</span>
      </div>
    </b-card>
  </div>
</template>

<script>
import VueLoadImage from 'vue-load-image';

export default {
  props: ["news"],
  name: "cardSearchResult",
  components: {
    'vue-load-image': VueLoadImage,
  }
};
</script>

<style scoped>
.new-card .image-wrap svg{
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
}
.new-card {
  border: none !important;
  margin-bottom: 50px !important;
}
.new-card .image-wrap img {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: unset !important;
}
.new-card .image-wrap {
  position: relative;
  padding-bottom: 100%;
  width: 100%;
  height: 0;
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
.new-card .image-wrap .title-wrap {
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
.new-card .image-wrap .title-wrap .title p {
  margin: 0;
}
.new-card .text-wrap {
  padding-bottom: 10px;
  height: 80px;
  text-align: start;
}
.new-card .text-wrap p {
  max-height: 70px;
  overflow: hidden;
  padding: 20px 0 13px 0;
  text-align: start;
  border: none;
  font-family: "Poppins-Regular";
  font-size: 16px;
}
.new-card .card-body{
  padding: 0 !important;
}
.new-card .card-footer{
  background: transparent;
    text-align: start;
    padding-left: 0;
    padding-right: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border-top: 1px solid #b3abab;
    font-size: 14px;
    font-family: "Poppins-Regular";
}

/* Media */
@media (max-width: 1139px) {
  .new-card .image-wrap .title-wrap,
  .new-card .text-wrap p{
    font-size: 12px;
    max-height: 55px;
  }
  .new-card .card-footer{
    font-size: 10px;
  }
  .new-card .text-wrap{
    height: 70px;
  }
  .new-card{
    margin-bottom: 25px !important;
  }
  .new-card .text-wrap p{
    padding: 16px 0 13px 0;
  }
  .new-card .text-wrap {
    height: 60px;
  }
}
@media (max-width:767px) {
  .new-card .text-wrap p{
    padding: 12px 0 13px 0;
  }
  .new-card{
    margin-bottom: 15px !important;
  }
    .new-card .image-wrap .title-wrap,
  .new-card .text-wrap p{
    font-size: 20px;
    max-height: 70px;
  }
  .new-card .text-wrap {
    height: 80px;
  }
  .new-card .card-footer{
    font-size: 14px;
  }
}
</style>