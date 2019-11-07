<template>
  <div>
    <div class="container content">
      <div class="card-wrap">
        <b-card-group deck>
          <b-card class="new-info" header-tag="header">
            <div class="title-wrap">
              <span class="text">{{currentNews.title}}</span>
            </div>

            <b-card-img v-if="currentNews.urlToImage" :src="currentNews.urlToImage"></b-card-img>

            <div class="description-wrap">
              <p>{{ currentNews.content }}</p>
            </div>

            <div class="social-networks-wrap">
              <div class="news-published">
                <span>{{ currentNews.publishedAt | moment("from", "now") }}</span>
              </div>

              <social-sharing
                url
                :title="currentNews.title"
                :description="currentNews.description"
                :media="currentNews.urlToImage"
                :quote="currentNews.description"
                hashtags="news"
                inline-template
                class="shared"
              >
                <div class="icons-wrap">
                  <network network="facebook" class="social">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9.212"
                      height="18.424"
                      viewBox="0 0 9.212 18.424"
                    >
                      <path
                        id="Path_22"
                        data-name="Path 22"
                        d="M133.758,6.333V4.03a1.152,1.152,0,0,1,1.152-1.152h1.152V0h-2.3A3.454,3.454,0,0,0,130.3,3.455V6.333H128V9.212h2.3v9.212h3.455V9.212h2.3l1.152-2.879Z"
                        transform="translate(-128)"
                        fill
                      />
                    </svg>
                  </network>
                  <network network="linkedin" class="social linkedin">
                    <svg
                      id="linkedin"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.424"
                      height="17.838"
                      viewBox="0 0 18.424 17.838"
                    >
                      <g id="Group_38" data-name="Group 38" transform="translate(0 5.171)">
                        <g id="Group_37" data-name="Group 37">
                          <rect
                            id="Rectangle_26"
                            data-name="Rectangle 26"
                            width="4.12"
                            height="12.667"
                            fill
                          />
                        </g>
                      </g>
                      <g id="Group_40" data-name="Group 40" transform="translate(5.758 5.171)">
                        <g id="Group_39" data-name="Group 39">
                          <path
                            id="Path_23"
                            data-name="Path 23"
                            d="M169.585,160.149c-.044-.014-.085-.029-.131-.041s-.111-.023-.167-.032a3.692,3.692,0,0,0-.739-.075,5.725,5.725,0,0,0-4.428,2.422V160H160v12.667h4.12v-6.909s3.114-4.337,4.428-1.152v8.061h4.119v-8.548A4.108,4.108,0,0,0,169.585,160.149Z"
                            transform="translate(-160 -160)"
                            fill
                          />
                        </g>
                      </g>
                      <g id="Group_42" data-name="Group 42" transform="translate(0.223 0)">
                        <g id="Group_41" data-name="Group 41">
                          <circle
                            id="Ellipse_12"
                            data-name="Ellipse 12"
                            cx="1.94"
                            cy="1.94"
                            r="1.94"
                            fill
                          />
                        </g>
                      </g>
                    </svg>
                  </network>
                  <network network="twitter" class="social">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.209"
                      height="15.607"
                      viewBox="0 0 19.209 15.607"
                    >
                      <path
                        id="Path_24"
                        data-name="Path 24"
                        d="M19.209,49.848a8.21,8.21,0,0,1-2.269.622,3.916,3.916,0,0,0,1.732-2.177,7.87,7.87,0,0,1-2.5.953,3.938,3.938,0,0,0-6.812,2.693,4.055,4.055,0,0,0,.091.9,11.146,11.146,0,0,1-8.117-4.119,3.939,3.939,0,0,0,1.21,5.263A3.889,3.889,0,0,1,.768,53.5v.043a3.956,3.956,0,0,0,3.155,3.869,3.931,3.931,0,0,1-1.032.13,3.482,3.482,0,0,1-.746-.067,3.975,3.975,0,0,0,3.68,2.743,7.913,7.913,0,0,1-4.883,1.68A7.376,7.376,0,0,1,0,61.84a11.086,11.086,0,0,0,6.041,1.767A11.131,11.131,0,0,0,17.249,52.4c0-.174-.006-.342-.014-.509A7.856,7.856,0,0,0,19.209,49.848Z"
                        transform="translate(0 -48)"
                        fill
                      />
                    </svg>
                  </network>
                </div>
              </social-sharing>
            </div>
          </b-card>

          <!-- Latest News -->
          <latestNews :latestNews="getNews" :category='category'></latestNews>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import EventBus from './../eventBus';
import latestNews from "./../shared/components/latestNews";

export default {
  components: {
    latestNews
  },
  data() {
    return {
      news: [],
      category: "",
      currentNews: [],
      currentCategory: ""
    };
  },
  name: "newsInfo",
  computed: mapGetters(["getNews"]),
  methods: {
    ...mapActions(["getNewsData"])
  },
  updated() {
    EventBus.$emit("closeLoader");
  },
  async mounted() {
    this.news = this.$route.params.news;
    this.category = this.$route.params.category;
    if (this.news) {
      this.currentNews = this.news;
      this.currentCategory = this.category;
    } else {
      this.currentNews = JSON.parse(localStorage.getItem("currentNews")).news;
      this.currentCategory = JSON.parse(
        localStorage.getItem("currentNews")
      ).category;
    }
    const category = this.currentCategory;
    this.getNewsData({ category: category, limit: 3, page: 1 });
  }
};
</script>

<style>
@media (max-width: 1139px) {
  .card-wrap .new-info .social-networks-wrap span {
    width: 32px !important;
    height: 32px !important;
  }
}
</style>

<style scoped>
/* Common */
@media (max-width: 1139px) {
  .container {
    max-width: 814px !important;
  }
  .card-wrap .new-info .social-networks-wrap span {
    width: 32px !important;
    height: 32px !important;
  }
}
@media (max-width: 575px) {
  .card-deck {
    flex-flow: wrap;
  }
}

/* New Info */
@media (max-width: 1139px) {
  .card-wrap .new-info .title-wrap .text {
    font-size: 22px !important;
  }
  .card-wrap .new-info .description-wrap {
    font-size: 14px !important;
  }
  .card-wrap .new-info .card-text {
    font-size: 12px !important;
  }
}
@media (max-width: 812px) {
  .card-wrap .new-info .title-wrap .text {
    font-size: 18px !important;
  }
}
@media (max-width: 725px) {
  .card-wrap .new-info .social-networks-wrap .icons-wrap {
    margin-bottom: 10px;
  }
}
@media (max-width: 575px) {
  .new-info {
    max-width: unset !important;
  }
  .description-wrap {
    margin-top: 0 !important;
  }
  .social-networks-wrap {
    margin-top: 0 !important;
  }
  .card-wrap .new-info {
    margin-bottom: 0;
  }
}
</style>

<style scoped>
/* Content */
.container.content {
  max-width: 1638px;
}
.main-wrap {
  display: flex;
  justify-content: space-between;
}

/* Common */
.card-deck {
  margin-top: unset;
}
.card.new-info,
.card.latest-news {
  border: none;
}
.card-wrap .new-info {
  max-width: 65%;
}
.card-wrap .latest-news {
  max-width: 31%;
}
.card-wrap .new-info .card-body,
.card-wrap .latest-news .card-body {
  padding: 0;
}
.blue-text {
  color: blue;
}
.bold-text {
  font-weight: bold;
}

/* New Info */
.card-wrap .latest-news .item-wrap .image-wrap {
  position: relative;
}
.card-wrap .latest-news .item-wrap img {
  width: 100%;
}
.card-wrap .latest-news .item-wrap .category-wrap {
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
.card-wrap .latest-news .item-wrap .category-wrap.entertainment::before {
  content: "";
  width: 3px;
  height: 20px;
  background-color: #ff995e;
  position: absolute;
  left: 22px;
}
.card-wrap .latest-news .item-wrap .category-wrap.business::before {
  content: "";
  width: 3px;
  height: 20px;
  background-color: #c710a2;
  position: absolute;
  left: 22px;
}
.card-wrap .latest-news .item-wrap .category-wrap.science::before {
  content: "";
  width: 3px;
  height: 20px;
  background-color: #10c7ba;
  position: absolute;
  left: 22px;
}

.card-wrap .new-info .title-wrap {
  text-align: start;
  padding: 37px 0;
}
.card-wrap .new-info .title-wrap .text {
  font-size: 32px;
  color: #3f3f3f;
  font-weight: bold;
  text-transform: uppercase;
}

.card-wrap .new-info .news-published {
  display: inline-block;
  color: #c3c3c3;
  font-size: 18px;
  border: none;
  font-family: "Poppins-Regular";
}

.card-wrap .new-info .description-wrap {
  text-align: start;
  max-width: 1082px;
  font-size: 22px;
  border-bottom: none;
  font-family: "Poppins-Regular";
}
</style>

<style>
/* Social */
.card-wrap .new-info .social-networks-wrap {
  position: relative;
  margin-top: 90px;
  display: flex;
  justify-content: space-between;
}
.card-wrap .new-info .social-networks-wrap .icons-wrap {
  display: flex;
  justify-content: flex-end;
}

.card-wrap .new-info .social-networks-wrap .icons-wrap span {
  outline: none;
}

.card-wrap .new-info .social-networks-wrap span.social svg {
  fill: #052962;
}
.card-wrap .new-info .social-networks-wrap span.linkedin svg {
  width: 15px;
}

.card-wrap .new-info .social-networks-wrap span.social:hover {
  background-color: #052962;
}
.card-wrap .new-info .social-networks-wrap span:hover svg {
  fill: #f8c61a;
}

.card-wrap .new-info .social-networks-wrap span.social {
  width: 40px;
  height: 40px;
  display: block;
  border: 2px solid #052962;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-left: 10px;
}
</style>
