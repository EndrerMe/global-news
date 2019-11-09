<template>
  <div>
    <div class="search-panel-wrap">
      <div class="container">
        <div class="search-panel-content">
          <div class="search-input-wrap">
            <input id="search-results-input" placeholder="search" :value="searchValue"/>
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
    }
  },
  mounted () {
    this.searchValue = this.$route.params.searchValue
    console.log(this.$route.params)
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

.search-panel-wrap .search-panel-content .search-input-wrap input {
  width: 100%;
  height: 50px;
}
.search-panel-wrap .search-panel-content .search-input-wrap label.search-icon-wrap{
  position: absolute;
}
.search-panel-wrap .search-panel-content .search-input-wrap label.search-icon-wrap svg{
    color: white;
}
</style>