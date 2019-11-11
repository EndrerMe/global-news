<template>
  <div>
    <div class="search-panel-wrap">
      <div class="container">
        <div class="search-panel-content">
          <div class="search-input-wrap">
            <input id="search-results-input" placeholder="search" v-model="searchValue" v-on:input="searchBytitle($event)"/>
            <label class="close-search-wrap">
              <span class="close-search"></span>
            </label>
            <label for="search-results-input" class="search-icon-wrap">
              <font-awesome-icon icon="search" class="fa-lg" />
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="main-content-wrap">
        <div class="side-wrap">
          <div class="side-menu-wrap">
            <ul class="side-menu-categories">
              <div class="menu-title-wrap">
                <span class="title-text">Search across</span>
              </div>
              <li>
                <a href="#" @click='searchByCategoryFun("all")'>All News</a>
              </li>
              <li>
                <a href="#" @click='searchByCategoryFun("business")'>Business</a>
              </li>
              <li>
                <a href="#" @click='searchByCategoryFun("entertainment")'>Entertainment</a>
              </li>
              <li>
                <a href="#" @click='searchByCategoryFun("general")'>General</a>
              </li>
              <li>
                <a href="#" @click='searchByCategoryFun("health")'>Health</a>
              </li>
              <li>
                <a href="#" @click='searchByCategoryFun("science")'>Science</a>
              </li>
              <li>
                <a href="#" @click='searchByCategoryFun("sport")'>Sport</a>
              </li>
              <li>
                <a href="#" @click='searchByCategoryFun("technology")'>Technology</a>
              </li>
            </ul>

            <ul class="side-menu-sort">
              <div class="menu-title-wrap">
                <span class="title-text">Sort by</span>
              </div>
              <li>
                <a href="#">Date</a>
              </li>
              <li>
                <a href="#">Popularity</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="search-results-wrap">
          <span>
            <span>Displaying results 1-10 out of 637 for</span>
            <span>{{ searchValue }}</span>
          </span>
          <div class="search-result">
            
            <cardSearchResult v-for='news of searchRes' :key='news.title + news.description' :news='news'></cardSearchResult>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardSearchResult from "./../shared/components/cardSearchResult";
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  name: "searchResult",
  components: {
    cardSearchResult
  },
  data() {
    return {
      searchValue: "",
      searchRes: [],
      currentCategory: 'all',
    };
  },
  mounted() {
    if (this.$route.params.searchValue) {
      this.searchValue = this.$route.params.searchValue;
      this.searchRes = this.$route.params.news;
    } else {
      const data = JSON.parse(localStorage.getItem("currentSearch"));
      this.searchValue = data.searchValue;
      this.searchRes = data.news;
    }
  },
  methods: {
    ...mapActions(["search", "searchByCategory"]),

    searchBytitle: _.debounce(function(event) {
      this.searchValue = event.target.value;
      const value = event.target.value;
      if (this.searchValue.length > 0) {
        this.search({ value: value }).then(res => {
          let news = [];
          for (let i = 0; i < res.length; i++) {
            if (res[i].urlToImage && res[i].title && res[i].description) {
              news.push(res[i]);
            } else {
              continue;
            }
          }
          this.searchRes = news;
          const data = {news: news, searchValue: value};
          localStorage.setItem('currentSearch', JSON.stringify(data));
        });
      }
    }, 1000),

    searchByCategoryFun(value) {
      let news = [];
      let probablyNews = [];
      if (value !== this.currentCategory) {
        if (value !== 'all') {
          const data = {category: value, page: 1, keyWord: this.searchValue};
          this.searchByCategory(data).then((res) => {
            probablyNews = res;
          })
        } else {
          this.search({ value: this.searchValue }).then(res => {
            probablyNews = res;
          });
        }

        for (let i = 0; i < probablyNews.length; i++) {
          if (probablyNews[i].urlToImage && probablyNews[i].title && probablyNews[i].description) {
            news.push(probablyNews[i]);
          } else {
            continue;
          }
        }

        this.searchRes = news;
        const data = {news: news, searchValue: this.searchValue};
        localStorage.setItem('currentSearch', JSON.stringify(data));
      }
    }
  }
};
</script>

<style scoped>
/* Side Menu */
.main-content-wrap {
  display: flex;
}
.main-content-wrap .side-wrap {
  width: 20%;
}

.main-content-wrap .side-wrap .menu-title-wrap .title-text {
  font-family: "Amiri-Bold";
  font-size: 28px;
  /* color: #3F3F3F; */
}

/* Search Results */
.main-content-wrap .search-results-wrap {
  width: 80%;
}
.main-content-wrap
  .search-results-wrap
  .search-result
  .card-wrap
  .image-wrap
  img {
  width: 100%;
}

/* Search panel */
.search-panel-wrap {
  display: flex;
  align-items: center;
  height: 98px;
  background: #052962;
}
.search-panel-wrap .search-panel-content .search-input-wrap {
  position: relative;
}
.search-panel-wrap .search-panel-content .search-input-wrap input {
  width: 100%;
  height: 50px;
  font-family: "Poppins-Regular";
  font-size: 16px;
  padding-left: 15px;
}
.search-panel-wrap
  .search-panel-content
  .search-input-wrap
  label.search-icon-wrap {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: -40px;
}
.search-panel-wrap
  .search-panel-content
  .search-input-wrap
  label.close-search-wrap {
  position: absolute;
  right: 20px;
  top: 5px;
}
.search-panel-wrap
  .search-panel-content
  .search-input-wrap
  label.close-search-wrap
  span {
  display: block;
  position: relative;
  width: 40px;
  height: 40px;
}
.search-panel-wrap
  .search-panel-content
  .search-input-wrap
  label.close-search-wrap
  span::before {
  content: "";
  width: 2px;
  height: 35px;
  background: black;
  position: absolute;
  transform: rotate(45deg);
  top: 3px;
  left: 17px;
}
.search-panel-wrap
  .search-panel-content
  .search-input-wrap
  label.close-search-wrap
  span::after {
  content: "";
  width: 2px;
  height: 35px;
  background: black;
  position: absolute;
  transform: rotate(-45deg);
  top: 3px;
  left: 17px;
}
.search-panel-wrap
  .search-panel-content
  .search-input-wrap
  label.search-icon-wrap
  svg {
  color: white;
}
/* end */
</style>