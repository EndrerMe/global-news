<template>
  <div>
    <div class="search-panel-wrap">
      <div class="container">
        <div class="search-panel-content">
          <div class="search-input-wrap">
            <input
              id="search-results-input"
              placeholder="search"
              v-model="searchValue"
              v-on:input="searchBytitle($event)"
            />
            <label class="close-search-wrap" @click='clearSearch()'>
              <span class="close-search"></span>
            </label>
            <label for="search-results-input" class="search-icon-wrap">
              <font-awesome-icon icon="search" class="fa-lg" />
            </label>
          </div>
        </div>
      </div>
    </div>
      <div class="main-content-wrap container">
        <div  class="no-results-message-wrap" v-if='isShowErrorMessage'>
          <div class="no-results-message message-section">
            <span>Results for</span>
            <span class="display-for-search">{{ resultsOf }}</span>
            <span>have not found. Please try again.</span>
          </div>
          <div class="message-section">
            <span>Advice:</span>
          </div>
          <div class="message-section">
            <ul class="advices-list">
              <li>Check if all words are spelled correctly.</li>
              <li>Try to change the keywords to synonyms.</li>
              <li>Try to use more general words.</li>
              <li>Try entering fewer keywords.</li>
            </ul>
          </div>
        </div>
        <div class="side-wrap">
          <div class="side-menu-wrap">
            <ul class="side-menu-sort">
              <div class="menu-title-wrap">
                <span class="title-text">Sort all news by</span>
              </div>
              <li>
                <a href="#" @click='searchByCategoryFun("all")'>Date</a>
              </li>
              <li>
                <a href="#" @click='searchByCategoryFun("business")'>Popularity</a>
              </li>
              <li>
                <a href="#" @click='searchByCategoryFun("entertainment")'>Relevancy</a>
              </li>
            </ul>
            <div class="separator">
              <span>or</span>
            </div>
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
          </div>
        </div>
        <div class="search-results-wrap">
          <div class="display-results-wrap" v-if='!isShowErrorMessage'>
            <span>Displaying results {{resultsCol.from}}-{{resultsCol.to}} out of {{totalRes}} for</span>
            <span class="display-for-search">{{ resultsOf }}</span>
          </div>
          <div class="search-result">
            <cardSearchResult v-for="news of searchRes" :key="news.title" :news="news"></cardSearchResult>
          </div>
        </div>
      </div>

      <categoryPagination v-if='!isShowErrorMessage' :pageNumber='totalPages' @changePage="changePage" :isFirstPage='isFirstPage'></categoryPagination>
    </div>
</template>

<script>
import cardSearchResult from "./../shared/components/cardSearchResult";
import categoryPagination from './../shared/components/paginate';
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  name: "searchResult",
  components: {
    cardSearchResult,
    categoryPagination
  },
  data() {
    return {
      searchValue: "",
      resultsOf: '',
      searchRes: [],
      currentCategory: 'all',
      totalRes: 0,
      totalPages: 0,
      currentPage: 0,
      resultsCol: {
        from: 1,
        to: 10,
      },
      isFirstPage: false,
      isShowErrorMessage: false,
    };
  },
  mounted() {
    if (this.$route.params.news.length === 0) {
      this.isShowErrorMessage = true;
    } else if (this.$route.params.searchValue && this.$route.params.totalRes) {
      this.totalRes = this.$route.params.totalRes;
      this.searchValue = this.$route.params.searchValue;
      this.resultsCol.to = this.$route.params.news.length;
      this.searchRes = this.$route.params.news;
      this.totalPages = Math.ceil(this.totalRes / 10);
      this.currentPage = 1;
    } else {
      const data = JSON.parse(localStorage.getItem("currentSearch"));
      this.totalRes = data.totalRes;
      this.searchValue = data.searchValue;
      this.searchRes = data.news;
      this.resultsCol.to = data.news.length;
      this.totalPages = Math.ceil(this.totalRes / 10);
      this.currentPage = 1;
    }

    this.resultsOf = this.searchValue;
  },
  methods: {
    ...mapActions(["search", "searchByCategory", "sortBy"]),

    clearSearch() {
      this.searchValue = '';
    },

    changePage(e) {
      window.scrollTo(0, 0);
      this.currentPage = e;
      const searchData = { value: this.resultsOf, page: this.currentPage };
      const result = this.search(searchData);
      result.then((res) => {
        let news = [];
        for (let i = 0; i < res.articles.length; i++) {
          if (res.articles[i].urlToImage && res.articles[i].title && res.articles[i].description) {
            news.push(res.articles[i]);
          } else {
            continue;
          }
        }
        this.searchRes = news;
        this.resultsCol.to = 10;
        this.resultsCol.to = this.resultsCol.to * e;
        this.resultsCol.from = this.resultsCol.to - 9;
        const data = { news: news, searchValue: this.searchValue };
        localStorage.setItem("currentSearch", JSON.stringify(data));
      })
    },

    searchBytitle: _.debounce(function(event) {
      this.currentPage = 1;
      this.searchValue = event.target.value;
      this.resultsOf = this.searchValue;
      const value = event.target.value;
      if (this.searchValue.length > 0) {
        const searchData = { value: value, page: this.currentPage };
        this.search(searchData).then(res => {
          let news = [];
          let totalRes = null;
          for (let i = 0; i < res.articles.length; i++) {
            if (res.articles[i].urlToImage && res.articles[i].title && res.articles[i].description) {
              totalRes = res.totalResults;
              news.push(res.articles[i]);
            } else {
              continue;
            }
          }
          this.searchRes = news;
          this.resultsCol.to = news.length;
          this.resultsCol.from = 1;
          this.totalPages = Math.ceil(totalRes / 10);
          this.totalRes = totalRes;
          const data = { news: news, searchValue: value, totalRes: totalRes };
          this.isFirstPage = true;
          localStorage.setItem("currentSearch", JSON.stringify(data));
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
    },
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

.main-content-wrap .side-wrap {
  padding-top: 106px;
}
.main-content-wrap .side-wrap .side-menu-wrap .separator{
  text-align: start;
  margin-bottom: 16px;
}
.main-content-wrap .side-wrap .side-menu-wrap .separator span{
  font-family: "Amiri-Bold";
  font-size: 28px;
  margin: 0 7px;
  color: #052962;
}
.main-content-wrap .side-wrap .side-menu-wrap .separator::before{
  content:'';
  width: 80px;
  height: 2px;
  background: #f8c61a;
  display: inline-block;
  margin-bottom: 4px;
}
.main-content-wrap .side-wrap .side-menu-wrap .separator::after{
  content:'';
  width: 80px;
  height: 2px;
  background: #f8c61a;
  display: inline-block;
  margin-bottom: 4px;
}
.main-content-wrap .side-wrap .side-menu-wrap .side-menu-categories,
.main-content-wrap .side-wrap .side-menu-wrap .side-menu-sort {
  list-style: none;
  color: #3f3f3f;
  padding-left: 0;
}
.main-content-wrap .side-wrap .side-menu-wrap .side-menu-categories li,
.main-content-wrap .side-wrap .side-menu-wrap .side-menu-sort li {
  text-align: start;
  padding: 3px 0;
}

.main-content-wrap .side-wrap .side-menu-wrap .side-menu-categories li a,
.main-content-wrap .side-wrap .side-menu-wrap .side-menu-sort li a {
  position: relative;
  font-family: "Amiri-Bold";
  font-size: 16px;
  color: #3f3f3f;
  text-decoration: none;
}

.main-content-wrap
  .side-wrap
  .side-menu-wrap
  .side-menu-categories
  li
  a::before,
.main-content-wrap .side-wrap .side-menu-wrap .side-menu-sort li a::before {
  display: none;
  content: "";
  position: absolute;
  width: 93%;
  height: 7px;
  background: #f8c61a;
  left: 2px;
  bottom: 7px;
  z-index: -1;
}

.main-content-wrap
  .side-wrap
  .side-menu-wrap
  .side-menu-categories
  li:hover
  a::before,
.main-content-wrap
  .side-wrap
  .side-menu-wrap
  .side-menu-sort
  li:hover
  a::before {
  display: block !important;
  cursor: pointer;
}
.main-content-wrap .side-wrap .side-menu-wrap .side-menu-categories li:hover,
.main-content-wrap .side-wrap .side-menu-wrap .side-menu-sort li:hover {
  cursor: pointer;
}
.main-content-wrap .side-wrap .side-menu-categories .menu-title-wrap,
.main-content-wrap .side-wrap .side-menu-sort .menu-title-wrap {
  font-family: "Amiri-Bold";
  font-size: 28px;
  text-align: start;
}

/* Search Results */
.main-content-wrap .no-results-message-wrap{
  position: absolute;
  text-align: start;
  font-family: 'Poppins-Regular';
  font-size: 16px;
}
.main-content-wrap .no-results-message-wrap .message-section{
  margin-top: 30px;
}
.main-content-wrap .no-results-message-wrap .message-section .advices-list{
  padding-left: 20px;
}
.main-content-wrap .search-results-wrap {
  position: relative;
  width: 80%;
}
.main-content-wrap .search-results-wrap .display-results-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  height: 106px;
  font-family: "Poppins-Regular";
  font-size: 16px;
}

.main-content-wrap
  .search-results-wrap
  .display-results-wrap
  .display-for-search,
  .main-content-wrap .no-results-message-wrap .no-results-message .display-for-search
   {
  font-family: "Poppins-Bold";
  color: #052962;
  margin: 0 5px;
}

.main-content-wrap .search-results-wrap .search-result {
  display: flex;
  flex-flow: wrap;
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
.search-panel-wrap .container,
.main-content-wrap.container {
  max-width: 1440px;
}
.search-panel-wrap {
  display: flex;
  align-items: center;
  height: 98px;
  background: #052962;
}
.search-panel-wrap .search-panel-content .search-input-wrap {
  position: relative;
  display: flex;
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
  display: flex;
  align-items: center;
  margin-bottom: inherit;
  padding: 0 15px;
}
.search-panel-wrap
  .search-panel-content
  .search-input-wrap
  label.close-search-wrap {
  position: absolute;
  right: 60px;
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