<template>
  <div>
    <div class="search-panel-wrap">
      <div class="container">
        <div class="search-panel-content">
          <div class="search-input-wrap">
            <input id="search-results-input" placeholder="search" />
            <label for="search-results-input" class="search-icon-wrap">
              <font-awesome-icon icon="search" class="fa-lg" />
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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