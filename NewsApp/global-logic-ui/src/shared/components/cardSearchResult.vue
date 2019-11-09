<template>
  <div class="col-md-6">
    <b-card class="mb-2 new-card">
      <div class="image-wrap">
        <div class="image-wrap">
          <b-card-img slot="image" :src="news.urlToImage"></b-card-img>
        </div>

        <b-card-title>{{ news.title }}</b-card-title>
        <div class="gradient"></div>
      </div>

      <div class="card-text-wrap">
        <b-card-text>{{ news.description }}</b-card-text>
      </div>
      <template>
        <small class="text-muted">footer...........</small>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["news"],
  name: "cardSearchResult"
};
</script>

<style scoped>
.new-card .image-wrap img {
  width: 100%;
}
</style>