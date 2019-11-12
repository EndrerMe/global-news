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
            <label class="close-search-wrap" @click="clearSearch()">
              <span class="close-search"></span>
            </label>
            <label for="search-results-input" class="search-icon-wrap">
              <font-awesome-icon icon="search" class="fa-lg" />
            </label>
          </div>
        </div>
      </div>
          <div class="search-sort-wrap">
            <div class="side">
              <span>All news</span>
            </div>
            <div class="side">
              <span @click='toggleCategoryFilter()'>Category</span>
            </div>
          </div>
    </div>

    <!-- Mob Categories -->
  <div class="mobile-bottom-menu-wrap" v-if='isShowMobileCategories'>
    <div class="container">
      <div class="box-menu">
        <b-nav class="bottom-menu">
          <b-nav-item>
            <router-link
              class="link"
              :to="{ name: `category`, params: {category: 'business'} }"
            >Business</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              class="link"
              :to="{ name: `category`, params: {category: 'entertainment'} }"
            >Entertainment</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              class="link"
              :to="{ name: `category`, params: {category: 'general'} }"
            >General</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              class="link"
              :to="{ name: `category`, params: {category: 'health'} }"
            >Health</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              class="link"
              :to="{ name: `category`, params: {category: 'science'} }"
            >Science</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="link" :to="{ name: `category`, params: {category: 'sport'} }">Sport</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              class="link"
              :to="{ name: `category`, params: {category: 'technology'} }"
            >Technology</router-link>
          </b-nav-item>
        </b-nav>
      </div>
    </div>
  </div>
<!-- end -->
    <div class="main-content-wrap container">
      <div class="no-results-message-wrap" v-if="isShowErrorMessage">
        <div class="no-results-message message-section">
          <span>Results for</span>
          <span class="display-for-search">{{ searchValue }}</span>
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
      <div class="side-wrap" v-if="!isShowErrorMessage">
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
        <div class="display-results-wrap" v-if="!isShowErrorMessage">
          <span>
            <span>Displaying results {{resultsCol.from}}-{{resultsCol.to}} out of {{totalRes}} for</span>
            <span class="display-for-search">{{ resultsOf }}</span>
          </span>
        </div>
        <div class="search-result">
          <cardSearchResult v-for="news of searchRes" :key="news.title" :news="news"></cardSearchResult>
        </div>
      </div>
    </div>
    <div class="more-results-wrap container">
        <button class="more-results-button">More results</button>
    </div>

      <div v-if='!isShowErrorAfterFilters'>
        <categoryPagination v-if='!isShowErrorMessage' :pageNumber='totalPages' @changePage="changePage" :key="componentKey"></categoryPagination>
      </div>
    </div>
</template>

<script>
// Vendors
import { mapActions } from "vuex";
import _ from "lodash";
// Components
import cardSearchResult from "@/shared/components/cardSearchResult";
import categoryPagination from '@/shared/components/paginate';

export default {
  name: "searchResult",
  components: {
    cardSearchResult,
    categoryPagination
  },
  data() {
    return {
      searchValue: "",
      resultsOf: "",
      searchRes: [],
      currentCategory: "all",
      totalRes: 0,
      totalPages: 0,
      currentPage: 0,
      resultsCol: {
        from: 1,
        to: 10
      },
      isFirstPage: false,
      isShowErrorMessage: false,
      isShowPagination: true,
      componentKey: 0,
      isShowErrorAfterFilters: false,
      isShowMobileCategories: false,
    };
  },
  mounted() {
    if (this.$route.params.news) {
      if (this.$route.params.news.length === 0) {
        this.isShowErrorMessage = true;
        this.searchValue = this.$route.params.searchValue;
        localStorage.setItem(
          "currentSearch",
          JSON.stringify({ hasError: true })
        );
      } else if (
        this.$route.params.searchValue &&
        this.$route.params.totalRes
      ) {
        this.totalRes = this.$route.params.totalRes;
        this.searchValue = this.$route.params.searchValue;
        this.resultsCol.to = this.$route.params.news.length;
        this.searchRes = this.$route.params.news;
        this.totalPages = Math.ceil(this.totalRes / 10);
        this.currentPage = 1;
      }
    } else {
      const data = JSON.parse(localStorage.getItem("currentSearch"));
      if (data.hasError) {
        this.isShowErrorMessage = true;
        this.searchValue = data.searchValue;
      } else {
        this.totalRes = data.totalRes;
        this.searchValue = data.searchValue;
        this.searchRes = data.news;
        this.resultsCol.to = data.news.length;
        this.totalPages = Math.ceil(this.totalRes / 10);
        this.currentPage = 1;
      }
    }

    this.resultsOf = this.searchValue;
  },
  methods: {
    ...mapActions(["search", "searchByCategory", "sortBy"]),

    toggleCategoryFilter() {
      this.isShowMobileCategories = !this.isShowMobileCategories;
    },

    clearSearch() {
      this.searchValue = "";
    },

    changePage(e) {
      window.scrollTo(0, 0);
      this.isFirstPage = false;
      this.currentPage = e;
      const searchData = { value: this.resultsOf, page: this.currentPage };
      const result = this.search(searchData);
      result.then(res => {
        let news = [];
        for (let i = 0; i < res.articles.length; i++) {
          if (
            res.articles[i].urlToImage &&
            res.articles[i].title &&
            res.articles[i].description
          ) {
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
      });
    },

    searchBytitle: _.debounce(function(event) {
      this.isShowPagination = false;
      this.currentPage = 1;
      this.searchValue = event.target.value;
      this.resultsOf = this.searchValue;
      const value = event.target.value;
      if (this.searchValue.length > 0) {
        const searchData = { value: value, page: this.currentPage };
        this.search(searchData).then(res => {
          if (res.articles.length > 0) {
            this.isFirstPage = true;
            let news = [];
            let totalRes = null;
            for (let i = 0; i < res.articles.length; i++) {
              if (
                res.articles[i].urlToImage &&
                res.articles[i].title &&
                res.articles[i].description
              ) {
                totalRes = res.totalResults;
                news.push(res.articles[i]);
              } else {
                continue;
              }
            }
            this.searchRes = news;
            this.isShowErrorAfterFilters = false;
            this.isShowErrorMessage = false;
            this.resultsCol.to = news.length;
            this.resultsCol.from = 1;
            this.totalPages = Math.ceil(totalRes / 10);
            this.totalRes = totalRes;
            const data = { news: news, searchValue: value, totalRes: totalRes };
            this.componentKey += 1;
            localStorage.setItem("currentSearch", JSON.stringify(data));
          } else {
            this.searchRes = [];
            this.isShowErrorMessage = true;
            localStorage.setItem(
              "currentSearch",
              JSON.stringify({ hasError: true, searchValue: this.searchValue })
            );
          }
        });
      }

      this.isShowPagination = true;
    }, 1000),

    sortByFun(value) {
      let data = {page: 1};
      let responce = null;
      if (this.searchRes.length > 0) {
        if (value === 'date') {
          data.value = 'publishedAt';
          responce = this.sortBy(data);
        } else if (value === 'popularity') {
          data.value = 'popularity';
          responce = this.sortBy(data);
        } else if (value === 'relevancy') {
          data.value = 'relevancy';
          responce = this.sortBy(data);
        }

        responce.then((res) => {
          console.log(res)
        })
      }
    },

    searchByCategoryFun(value) {
      let news = [];
      let probablyNews = [];
      if (value !== this.currentCategory) {
        if (value !== "all") {
          const data = { category: value, page: 1, keyWord: this.searchValue };
          this.searchByCategory(data).then(res => {
            probablyNews = res;
            console.log('-------------------')
            console.log(res)
          })
        } else {
          this.search({ value: this.searchValue }).then(res => {
            probablyNews = res;
            console.log('********************')
            console.log(res)
          });
        }
        
        this.isShowErrorAfterFilters = false;
        for (let i = 0; i < probablyNews.articles.length; i++) {
          if (probablyNews.articles[i].urlToImage && probablyNews.articles[i].title && probablyNews.articles[i].description) {
            news.push(probablyNews.articles[i]);
          } else {
            continue;
          }
        }

        this.searchRes = news;
        this.currentCategory = value;
        const data = {news: news, searchValue: this.searchValue};
        localStorage.setItem('currentSearch', JSON.stringify(data));
      }
    }
  }
};
</script>

<style scoped>
/* More Results */
.more-results-wrap{
  padding: 0 16px;
}
.more-results-wrap .more-results-button{
  width:100%;
  height: 40px;
  background-color: #052962;
  border: none;
  font-family: 'Poppins-SemiBold';
  font-size: 13px;
  text-transform: uppercase;
  color: #F8C61A;
}
/* end */

/* Mob Sort */
.search-panel-wrap{
  position: relative;
}
.search-panel-wrap .search-sort-wrap{
  position: absolute;
  display: flex;
  bottom: 22px;
  padding: 0 15px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.search-panel-wrap .search-sort-wrap .side{
  color: white;
}
/* end */

/* Mob Categories */
.mobile-bottom-menu-wrap {
  height: 70px;
  display: flex;
  align-items: center;
}
.mobile-bottom-menu-wrap {
  font-family: "Amiri-Bold";
}
.mobile-bottom-menu-wrap .bottom-menu {
  background-color: unset !important;
  justify-content: center !important;
}
.mobile-bottom-menu-wrap .bottom-menu li a a {
  color: #3f3f3f;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
}
.mobile-bottom-menu-wrap .bottom-menu li .nav-link:hover a::before {
  display: block;
}
.mobile-bottom-menu-wrap {
  display: flex;
  align-items: center;
}
.mobile-bottom-menu-wrap .bottom-menu li a a {
  position: relative;
}
.mobile-bottom-menu-wrap .bottom-menu li .nav-link a {
  display: flex;
  justify-content: center;
  line-height: 20px;
}
.mobile-bottom-menu-wrap .bottom-menu li .nav-link a::before {
  display: none;
  content: "";
  width: 93%;
  height: 7px;
  background: #f8c61a;
  position: absolute;
  z-index: -1;
  bottom: 2px;
}
/* end */

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
.main-content-wrap .side-wrap .side-menu-wrap .separator {
  text-align: start;
  margin-bottom: 16px;
}
.main-content-wrap .side-wrap .side-menu-wrap .separator span {
  font-family: "Amiri-Bold";
  font-size: 28px;
  margin: 0 7px;
  color: #052962;
}
.main-content-wrap .side-wrap .side-menu-wrap .separator::before {
  content: "";
  width: 75px;
  height: 2px;
  background: #f8c61a;
  display: inline-block;
  margin-bottom: 4px;
}
.main-content-wrap .side-wrap .side-menu-wrap .separator::after {
  content: "";
  width: 75px;
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
.main-content-wrap .no-results-message-wrap {
  position: absolute;
  text-align: start;
  font-family: "Poppins-Regular";
  font-size: 16px;
}
.main-content-wrap .no-results-message-wrap .message-section {
  margin-top: 30px;
}
.main-content-wrap .no-results-message-wrap .message-section .advices-list {
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
.main-content-wrap
  .no-results-message-wrap
  .no-results-message
  .display-for-search {
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
  height: 98px;
  background: #052962;
}
.search-panel-wrap .search-panel-content .search-input-wrap {
  position: relative;
  display: flex;
  height: 98px;
  align-items: center;
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
  top: 50%;
  transform: translate(0,-50%);
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
  left: 19px;
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
  left: 19px;
}
.search-panel-wrap
  .search-panel-content
  .search-input-wrap
  label.search-icon-wrap
  svg {
  color: white;
}
/* end */

/* Media */
@media (min-width: 1140px) {
  .mobile-bottom-menu-wrap .bottom-menu li a {
    font-size: 26px !important;
  }
}
@media (max-width: 1139px) {
  .mobile-bottom-menu-wrap .bottom-menu li a {
    font-size: 16px;
  }
}
@media (max-width: 1199px) {
  .mobile-bottom-menu-wrap .bottom-menu ul li a span {
    font-size: 23px;
  }
}
@media (max-width: 1075px) {
  .main-content-wrap .side-wrap .side-menu-categories .menu-title-wrap,
  .main-content-wrap .side-wrap .side-menu-sort .menu-title-wrap {
    font-size: 24px;
  }
  .main-content-wrap .side-wrap .side-menu-wrap .separator::before,
  .main-content-wrap .side-wrap .side-menu-wrap .separator::after{
    width: 60px;
  }
  .main-content-wrap .side-wrap .side-menu-wrap .side-menu-categories li a,
  .main-content-wrap .side-wrap .side-menu-wrap .side-menu-sort li a {
    font-size: 14px;
  }
}
@media (max-width: 991px) {
  .mobile-bottom-menu-wrap .bottom-menu ul li a span {
    font-size: 17px;
  }
}
@media (max-width: 900px) {
  .main-content-wrap .side-wrap .side-menu-categories .menu-title-wrap,
  .main-content-wrap .side-wrap .side-menu-sort .menu-title-wrap {
    font-size: 20px;
  }
  .main-content-wrap .side-wrap .side-menu-wrap .separator::before,
  .main-content-wrap .side-wrap .side-menu-wrap .separator::after{
    width: 50px;
  }
  .main-content-wrap .side-wrap .side-menu-wrap .side-menu-categories li a,
  .main-content-wrap .side-wrap .side-menu-wrap .side-menu-sort li a {
    font-size: 12px;
  }
}
@media (min-width: 768px) {
  .mobile-bottom-menu-wrap{
    display: none;
  }
  .search-panel-wrap .search-sort-wrap{
    display: none;
  }
  .more-results-wrap{
    display: none;
  }
}
@media (max-width: 767px) {
  .mobile-bottom-menu-wrap .bottom-menu {
    flex-wrap: unset;
  }
  .mobile-bottom-menu-wrap .box-menu {
    overflow: auto !important;
    display: flex;
  }
  .search-panel-wrap{
    height: 120px;
  }
  .search-panel-wrap .search-panel-content .search-input-wrap{
    align-items: flex-start;
  }
  .search-panel-wrap .search-panel-content .search-input-wrap label.close-search-wrap{
    top: 27%;
  }
    .main-content-wrap {
    flex-direction: column;
  }
  .main-content-wrap .search-results-wrap {
    width: unset;
  }
  .main-content-wrap .side-wrap {
    display: none;
  }
  .search-panel-wrap
    .search-panel-content
    .search-input-wrap
    label.search-icon-wrap {
    display: none;
  }
  .search-panel-wrap
    .search-panel-content
    .search-input-wrap
    label.close-search-wrap {
    right: 10px;
  }
}
@media (min-width: 576px){
  .container {
    max-width: unset ;
  }
}
</style>