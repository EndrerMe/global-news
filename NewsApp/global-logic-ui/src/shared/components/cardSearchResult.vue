<template>
  <div class="col-md-6">
    <b-card class="mb-2 new-card">
      <div class="image-wrap">
        <div class="gradient"></div>
        <b-card-img slot="image" :src="news.urlToImage"></b-card-img>
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
export default {
  props: ["news"],
  name: "cardSearchResult"
};
</script>

<style scoped>
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
@media (max-width:767px) {
  .new-card .text-wrap p{
    max-height: 60px;
    padding: 12px 0 13px 0;
  }
  .new-card .text-wrap{
    height: 70px;
  }
  .new-card{
    margin-bottom: 15px !important;
  }
}
</style>