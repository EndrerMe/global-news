<template>
   <div class="card-wrap">
        <b-card class="mb-2 new-card new-card col-md-12">
        <div class="image-wrap">
            <b-card-title>Title</b-card-title>
            <div class="gradient"></div>
            <div class="image-wrap">
            <img src="./../../assets/images/business/img-1.png" />
            </div>
        </div>

        <div class="card-text-wrap">
            <b-card-text>text.......</b-card-text>
        </div>
        <template>
            <small class="text-muted">footer...........</small>
        </template>
        </b-card>
    </div> 
</template>

<script>
export default {
    name: 'cardSearchResult'
}
</script>

<style scoped>
.card-wrap .image-wrap img{
    width: 100%;
} 
</style>