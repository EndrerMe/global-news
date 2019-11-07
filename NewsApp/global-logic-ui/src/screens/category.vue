<template>
  <div class="container content">
    <!-- Top title -->
    <div class="main-title-wrap">
      <span class="text">{{ category | titleToUpperCase }}</span>
    </div>

    <!-- Top-box with 4 images -->
    <div class="top-box-preview row">
      <div class="left-side col-md-6 box-item">
        <div class="hover-link">
          <button @click="goToCurrentNews(firstBlock)">Read More</button>
        </div>
        <div class="gradient"></div>
        <div class="image-box">
          <img :src="firstBlock.urlToImage" />
        </div>
        <div class="title-wrap">
          <span class="title">
            <p>{{firstBlock.title}}</p>
          </span>
        </div>
      </div>
      <div class="right-side col-md-6">
        <div class="image-wrap right-side-top">
          <div class="box-item">
            <div class="hover-link">
              <button @click="goToCurrentNews(secoundBlock)">Read More</button>
            </div>
            <div class="gradient"></div>
            <div class="image-box">
              <img :src="secoundBlock.urlToImage" />
            </div>
            <div class="title-wrap">
              <span class="title">
                <p>{{secoundBlock.title}}</p>
              </span>
            </div>
          </div>
        </div>
        <div class="right-side-bottom">
          <div class="image-wrap col-md-6 col-sm-6 box-item left-item">
            <div class="hover-link">
              <button @click="goToCurrentNews(thirdBlock)">Read More</button>
            </div>
            <div class="gradient"></div>
            <div class="image-box">
              <img :src="thirdBlock.urlToImage" />
            </div>
            <div class="title-wrap">
              <span class="title">
                <p>{{thirdBlock.title}}</p>
              </span>
            </div>
          </div>
          <div class="image-wrap col-md-6 col-sm-6 box-item right-item">
            <div class="hover-link">
              <button @click="goToCurrentNews(fourthBlock)">Read More</button>
            </div>
            <div class="gradient"></div>
            <div class="image-box">
              <img :src="fourthBlock.urlToImage" />
            </div>
            <div class="title-wrap">
              <span class="title">
                <p>{{fourthBlock.title}}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- All News -->
    <b-card-group deck row>
      <cardCategory v-for="news of currentNews" :key="news.title" :news="news" :category="category"></cardCategory>
    </b-card-group>

    <categoryPagination :pageNumber="pageNumber" @changePage="changePage"></categoryPagination>
  </div>
</template>

<script>
import newsService from "./../shared/services/news.service";
import categoryPagination from "./../shared/components/paginate";
import cardCategory from "./../shared/components/cardCategory";
import EventBus from "./../eventBus";

export default {
  name: "currentCategory",
  components: {
    categoryPagination,
    cardCategory
  },
  data() {
    return {
      currentNews: [],
      category: null,
      firstBlock: {
        title: "",
        urlToImage: ""
      },
      secoundBlock: {
        title: "",
        urlToImage: ""
      },
      thirdBlock: {
        title: "",
        urlToImage: ""
      },
      fourthBlock: {
        title: "",
        urlToImage: ""
      },
      pageNumber: 0
    };
  },
  beforeCreate() {
    this.category = this.$route.params.category;
    newsService.getData(this.category, 1).then(
      res => {
        const totalResult = res.data.totalResults;
        this.pageNumber = Math.ceil(totalResult / 16);
        let articles = res.data.articles;
        for (let i = 0; i < 16; i++) {
          if (articles[i].urlToImage) {
            if (!this.firstBlock.urlToImage) {
              this.firstBlock = articles[i];
            } else if (!this.secoundBlock.urlToImage) {
              this.secoundBlock = articles[i];
            } else if (!this.thirdBlock.urlToImage) {
              this.thirdBlock = articles[i];
            } else if (!this.fourthBlock.urlToImage) {
              this.fourthBlock = articles[i];
            }

            this.currentNews.push(articles[i]);
          } else {
            continue;
          }
        }
      },
      err => {
        console.log(err);
      }
    );
  },
  watch: {
    $route(to) {
      if (to.params.category) {
        this.currentNews = [];
        this.firstBlock = [];
        this.secoundBlock = [];
        this.thirdBlock = [];
        this.fourthBlock = [];
        this.category = to.params.category;

        newsService.getData(this.category, 1).then(
          res => {
            let articles = res.data.articles;
            for (let i = 0; i < 16; i++) {
              if (articles[i].urlToImage) {
                // adding to main articles
                if (!this.firstBlock.urlToImage) {
                  this.firstBlock = articles[i];
                } else if (!this.secoundBlock.urlToImage) {
                  this.secoundBlock = articles[i];
                } else if (!this.thirdBlock.urlToImage) {
                  this.thirdBlock = articles[i];
                } else if (!this.fourthBlock.urlToImage) {
                  this.fourthBlock = articles[i];
                }
                this.currentNews.push(articles[i]);
              } else {
                continue;
              }
            }
          },
          err => {
            console.log(err);
          }
        );
      }
    }
  },
  methods: {
    changePage(e) {
      window.scrollTo(0, 0);
      newsService.getData(this.category, e).then(
        res => {
          let articles = res.data.articles;
          this.currentNews = [];
          this.firstBlock = res.data.articles[0];
          this.secoundBlock = res.data.articles[1];
          this.thirdBlock = res.data.articles[2];
          this.fourthBlock = res.data.articles[3];
          for (let i = 0; i < 16; i++) {
            if (articles[i].urlToImage) {
              // adding to main articles
              if (!this.firstBlock.urlToImage) {
                this.firstBlock = articles[i];
              } else if (!this.secoundBlock.urlToImage) {
                this.secoundBlock = articles[i];
              } else if (!this.thirdBlock.urlToImage) {
                this.thirdBlock = articles[i];
              } else if (!this.fourthBlock.urlToImage) {
                this.fourthBlock = articles[i];
              }

              this.currentNews.push(articles[i]);
            } else {
              continue;
            }
          }
        },
        err => {
          console.log(err);
        }
      );
    },

    goToCurrentNews(news) {
      const category = this.category;
      this.$router.push({ name: "news-info", params: { news, category } });
    }
  },
  filters: {
    titleToUpperCase: function(value) {
      if (!value) return "";
      value = value.toString().toUpperCase();
      return value;
    }
  },
  updated() {
    EventBus.$emit("closeLoader");
  },
  mounted() {
    this.category = this.$route.params.category;
  }
};
</script>

<style scoped>
.top-box-preview .title-wrap {
  font-family: "Amiri-Bold";
}
.top-box-preview.right-side-top .hover-link button {
  height: 15% !important;
}
.top-box-preview .left-side .hover-link button,
.top-box-preview .right-side .right-side-top .hover-link button {
  opacity: 0;
  width: 65%;
  height: 16%;
  background-color: #f8c61a;
  border: none;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: #052962;
  letter-spacing: 2px;
  cursor: pointer;
  z-index: 999;
}
.top-box-preview .right-side-top .hover-link {
  z-index: 999;
  display: flex;
  visibility: hidden;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  background: rgba(0, 0, 0, 0.6);
  color: rgba(0, 0, 0, 0.6);
}
.top-box-preview .right-side-bottom .hover-link {
  z-index: 999;
  display: flex;
  visibility: hidden;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  top: 15px;
  left: 0;
  right: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  background: rgba(0, 0, 0, 0.6);
  color: rgba(0, 0, 0, 0.6);
}
.top-box-preview .left-side .hover-link {
  z-index: 999;
  display: flex;
  visibility: hidden;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 15px;
  top: 15px;
  left: 15px;
  right: 15px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  background: rgba(0, 0, 0, 0.6);
  color: rgba(0, 0, 0, 0.6);
}
.top-box-preview .box-item:hover .hover-link {
  visibility: visible;
  z-index: 999;
  transition: all 0.5s;
}
.top-box-preview .box-item:hover .hover-link button {
  opacity: 1;
  transition: all 1s;
}
.top-box-preview .box-item:hover img {
  transform: scale(1.1);
  transition: transform 1s;
}
.main-title-wrap .text {
  position: relative;
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 10px;
  padding-left: 86px;
}
.main-title-wrap .text::before {
  z-index: -1;
  position: absolute;
  content: "";
  width: 102px;
  height: 37px;
  background-color: #c710a2;
  left: 0;
  top: 0;
}
.top-box-preview {
  margin-top: 42px;
  margin-bottom: 62px;
  display: flex;
  justify-content: space-between;
}
.top-box-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.top-box-preview .left-side {
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  padding-top: 15px;
  padding-bottom: 15px;
}
.top-box-preview .left-side img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
}
.top-box-preview .left-side .image-box {
  overflow: hidden;
  height: 100%;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
}
.top-box-preview .left-side .title-wrap {
  width: 87%;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
}
.top-box-preview .right-side .image-box,
.top-box-preview .right-side-bottom .image-box {
  overflow: hidden;
  height: 100%;
}
.top-box-preview .right-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  position: relative;
  width: 100%;
}
.top-box-preview .right-side .image-wrap {
  position: relative;
  padding-left: 0;
  padding-right: 0;
}
.top-box-preview .right-side-bottom {
  display: flex;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.top-box-preview .right-side-bottom .image-wrap {
  padding-top: 15px;
  height: 95%;
  max-width: 47%;
}
.top-box-preview .right-side .right-side-top {
  height: 50%;
}
.top-box-preview .right-side .right-side-top .box-item {
  height: 100%;
}
.top-box-preview .right-side .right-side-top .gradint {
  margin: 0;
}
.top-box-preview .right-side .right-side-top .title-wrap span,
.top-box-preview .right-side .right-side-bottom .title-wrap span {
  font-size: 20px;
}
.top-box-preview .right-side .right-side-bottom .title-wrap {
  width: 76%;
  left: 50%;
  transform: translate(-50%);
  max-height: 115px;
  overflow: hidden;
}
.top-box-preview .right-side .right-side-bottom button {
  height: 15% !important;
  opacity: 0;
  width: 65%;
  height: 10%;
  background-color: #f8c61a;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #052962;
  letter-spacing: 2px;
  cursor: pointer;
  z-index: 999;
}
.top-box-preview .right-side-bottom .gradient {
  position: absolute;
  top: 15px;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9416141456582633) 0%,
    rgba(255, 255, 255, 0) 30%
  );
  margin: 0 !important;
}
.top-box-preview .right-side-top .gradient {
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
}
.top-box-preview .title-wrap {
  position: absolute;
  bottom: 15px;
}
.top-box-preview .right-side-top .title-wrap {
  width: 90%;
  left: 50%;
  transform: translate(-50%);
}
.top-box-preview .title-wrap span {
  color: white;
  text-align: start;
  font-weight: bold;
  font-size: 32px;
}
.top-box-preview .title-wrap span p {
  margin-bottom: 5px;
}
.top-box-preview .right-side-bottom .title-wrap span p {
  max-height: 115px;
  overflow: hidden;
}
.top-box-preview .left-side .gradient {
  position: absolute;
  top: 15px;
  bottom: 15px;
  left: 5px;
  right: 5px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9416141456582633) 0%,
    rgba(255, 255, 255, 0) 30%
  );
  z-index: 1;
  margin: 0 10px !important;
}

/* Media */
@media (max-width: 1139px) {
  .top-box-preview .left-side .hover-link {
    left: 10px;
    right: 10px;
  }
  .top-box-preview .left-side .gradient {
    left: 0;
    right: 0;
  }
  .top-box-preview {
    height: 382px;
  }
  .top-box-preview .left-side,
  .top-box-preview .right-side {
    padding-right: 10px !important;
    padding-left: 10px !important;
  }
}
@media (min-width: 1140px) {
  .top-box-preview .left-side .title-wrap span {
    font-size: 32px !important;
  }
}
@media (max-width: 1139px) {
  .top-box-preview .left-side .title-wrap span {
    font-size: 22px !important;
  }
  .top-box-preview .right-side-top .title-wrap span,
  .top-box-preview .right-side-bottom .title-wrap span {
    font-size: 12px !important;
  }
  .top-box-preview .right-side .right-side-bottom button {
    font-size: 8px !important;
  }
  .top-box-preview .right-side .right-side-bottom .title-wrap {
    width: 78%;
  }
}
@media (max-width: 992px) {
  .top-box-preview .title-wrap span {
    font-size: 12px !important;
  }
}
@media (max-width: 767px) {
  .top-box-preview .right-side-top .title-wrap span,
  .top-box-preview .right-side-bottom .title-wrap span {
    font-size: 22px !important;
  }
  .top-box-preview .right-side-bottom .title-wrap span p {
    max-height: 100px;
  }
  .top-box-preview .right-side-top {
    margin: 10px 0;
  }
  .top-box-preview {
    margin-bottom: 20px !important;
    margin-top: 20px !important;
  }
  .top-box-preview .title-wrap span {
    font-size: 20px !important;
  }
  .top-box-preview {
    height: unset;
  }
  .top-box-preview .right-side-top .title-wrap span {
    font-size: 22px !important;
  }
  .top-box-preview .right-side-bottom .title-wrap {
    width: 78%;
  }
  .top-box-preview .title-wrap {
    max-height: 95px;
  }
}
@media (max-width: 575px) {
  .top-box-preview .right-side-bottom .title-wrap {
    width: 83%;
  }
}
@media (max-width: 450px) {
  .top-box-preview .right-side-top .title-wrap span,
  .top-box-preview .right-side-bottom .title-wrap span {
    font-size: 16px !important;
  }
  .top-box-preview .left-side .title-wrap span {
    font-size: 16px !important;
  }
}
@media (max-width: 350px) {
  .top-box-preview .right-side-top .title-wrap span,
  .top-box-preview .right-side-bottom .title-wrap span {
    font-size: 12px !important;
  }
  .top-box-preview .left-side .title-wrap span {
    font-size: 12px !important;
  }
}
@media (max-width: 419px) {
  .top-box-preview .left-side .title-wrap span,
  .top-box-preview .right-side-top .title-wrap span {
    font-size: 14px !important;
  }
}
@media (min-width: 1140px) {
  .container {
    max-width: 1638px !important;
  }
}
@media (max-width: 1139px) {
  .container {
    max-width: 814px !important;
  }
  .main-title-wrap span {
    font-size: 24px !important;
    letter-spacing: 8px !important;
  }
  .main-title-wrap span::before {
    height: 27px !important;
    width: 95px !important;
  }
}
@media (max-width: 767px) {
  .main-title-wrap span {
    font-size: 24px !important;
  }
}
@media (max-width: 499px) {
  .main-title-wrap span {
    font-size: 20px !important;
    letter-spacing: 6px !important;
  }
  .main-title-wrap span::before {
    height: 21px !important;
    width: 94px !important;
  }
}
@media (max-width: 375px) {
  .main-title-wrap span {
    font-size: 16px !important;
    letter-spacing: 5px !important;
  }
  .main-title-wrap span::before {
    height: 16px !important;
    width: 92px !important;
  }
  .top-box-preview .right-side-bottom .title-wrap span p {
    max-height: 70px;
  }
}
</style>