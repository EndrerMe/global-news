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
    <div class="container main-content-wrap">
      <div class="side-wrap">
        <div class="side-menu-wrap">
          <ul class="side-menu-categories">
            <div class="menu-title-wrap">
              <span class="title-text">Search across</span>
            </div>
            <li>
              <a href="#">All News</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Entertainment</a>
            </li>
            <li>
              <a href="#">General</a>
            </li>
            <li>
              <a href="#">Health</a>
            </li>
            <li>
              <a href="#">Science</a>
            </li>
            <li>
              <a href="#">Sport</a>
            </li>
            <li>
              <a href="#">Technology</a>
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
        <div class="display-results-wrap">
          <span>Displaying results 1-10 out of 637 for</span>
          <span>{{ searchValue }}</span>
        </div>
        <div class="search-result">
          <cardSearchResult v-for="news of searchRes" :key="news.title" :news="news"></cardSearchResult>
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
      searchRes: []
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
    ...mapActions(["search"]),

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
    }, 1000)
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

.main-content-wrap .side-wrap,
.main-content-wrap .search-results-wrap{
  padding-top: 106px;
}
.main-content-wrap .side-wrap .side-menu-wrap .side-menu-categories,
.main-content-wrap .side-wrap .side-menu-wrap .side-menu-sort {
  list-style: none;
  color: #3f3f3f;
  padding-left:0;
}
.main-content-wrap .side-wrap .side-menu-wrap .side-menu-categories li,
.main-content-wrap .side-wrap .side-menu-wrap .side-menu-sort li {
  text-align: start;
  margin: 5px 0;
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
  width: 100%;
  height: 7px;
  background: #f8c61a;
  left: 2px;
  bottom: 7px;
  z-index: -1;
}

.main-content-wrap .side-wrap .side-menu-wrap .side-menu-categories li:hover a::before,
.main-content-wrap .side-wrap .side-menu-wrap .side-menu-sort li:hover a::before
{
  display: block !important;
}

.main-content-wrap .side-wrap .side-menu-categories .menu-title-wrap,
.main-content-wrap .side-wrap .side-menu-sort .menu-title-wrap {
  font-family: "Amiri-Bold";
  font-size: 28px;
  text-align: start;
  padding-left: 5px;
}

/* Search Results */
.main-content-wrap .search-results-wrap {
  position: relative;
  width: 80%;
}
.main-content-wrap .search-results-wrap .display-results-wrap{
  position: absolute;
  top:45px;
  left: 50%;
  transform: translate(-50%);
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