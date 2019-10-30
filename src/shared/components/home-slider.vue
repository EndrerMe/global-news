<template>
    <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
    >
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
        <div class="slide-title">
            <span>White House vows to boycott impeachment</span>
        </div>
        </b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <div class="slide-title">
            <span>Second Slide</span>
        </div>
        </b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
        <div class="slide-title">
            <span>Third Slide</span>
        </div>
        </b-carousel-slide>
    </b-carousel>
</template>

<script>
export default {
    name: 'homeSlider'
}
</script>

<style scoped>
@media (max-width: 1199px) {
  .carousel-caption .slide-title span {
    font-size: 34px;
  }
}
@media (max-width: 767px) {
  .carousel-caption .slide-title span {
    font-size: 24px !important;
  }
}
@media (max-width: 575px) {
  .carousel-caption .slide-title span {
    font-size: 20px !important;
  }
}

.carousel-caption {
  position: absolute;
  right: unset !important;
  bottom: 22% !important;
  left: 30px !important;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
}
.carousel-caption .slide-title {
  max-width: 400px;
}
.carousel-caption .slide-title span {
  font-size: 40px;
}
.carousel-indicators {
  display: flex;
  align-items: center;
}
.carousel-indicators li {
  width: 7px !important;
  height: 7px !important;
  margin-right: 10px !important;
  margin-left: 10px !important;
  opacity: 0.7 !important;
  cursor: pointer;
  background-color: #f8c61a !important;
  background-clip: unset !important;
  border-radius: 10px;
  border-top: unset !important;
  border-bottom: unset !important;
}
.carousel-indicators .active {
  width: 12px !important;
  height: 12px !important;
}
.carousel-control-prev span,
.carousel-control-next span {
  display: none;
}
.carousel-control-prev,
.carousel-control-next {
  background: #453333;
  width: 50px !important;
  height: 50px !important;
  bottom: unset !important;
  top: 35px !important;
}
.carousel .carousel-control-prev {
  right: 100px !important;
  left: unset !important;
}
.carousel .carousel-control-next {
  right: 35px !important;
}
.carousel .carousel-control-prev::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  border-left: 2px solod red;
  border-top: 2px solod red;
  border-bottom: 3px solid;
  border-left: 3px solid;
  transform: rotate(45deg);
  left: 19px;
}
.carousel .carousel-control-next::after {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  border-left: 2px solod red;
  border-top: 2px solod red;
  border-bottom: 3px solid;
  border-left: 3px solid;
  transform: rotate(223deg);
  left: 12px;
}
</style>