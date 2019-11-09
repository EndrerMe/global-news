<template>
  <div>
    <div class="search-panel-wrap">
      <div class="container">
        <div class="search-panel-content">
          <div class="search-input-wrap">
            <input id="search-results-input" placeholder="search" v-model='searchValue'/>
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
  </div>
</template>

<script>
export default {
  name: 'searchResult',
  data() {
    return {
      searchValue: '',
      searchRes: [],
    }
  },
  mounted () {
    if (this.$route.params.searchValue) {
      this.searchValue = this.$route.params.searchValue;
      this.searchRes = this.$route.params.news;
    } else {
      const data = JSON.parse(localStorage.getItem("currentSearch"));
      this.searchValue = data.searchValue;
      this.searchRes = data.news;
    }
  }
}
</script>

<style scoped>
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
  /* border: 1px solid; */
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
</style>