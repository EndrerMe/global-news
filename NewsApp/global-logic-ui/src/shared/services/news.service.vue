<script>
// Vendors
import axios from 'axios';
// Environments
import {environment} from '@/environment/environment'

export default {
    name: 'newsService',
    getData(category, page, someFilter) {
        return axios.get(`${environment.newsApiUrl}top-headlines?category=${category}&pageSize=16&page=${page}&country=us&${someFilter}&apiKey=${environment.newsApiKey}`);
    },

    getTopNews(someFilter) {
        return axios.get(`${environment.newsApiUrl}top-headlines?country=us&${someFilter}apiKey=${environment.newsApiKey}`);
    },

    searchByTitle(data) {
        return axios.get(`${environment.newsApiUrl}everything?qInTitle=${data.value}&pageSize=10&page=${data.page}&apiKey=${environment.newsApiKey}`);
    },
    
    searchByCategory(category, page, keyWord) {
        return axios.get(`${environment.newsApiUrl}top-headlines?category=${category}&q=${keyWord}&pageSize=10&page=${page}&apiKey=${environment.newsApiKey}`);
    },

    getPageCol(category) {
        return axios.get(`${environment.newsApiUrl}top-headlines?category=${category}&apiKey=${environment.newsApiKey}`)
    },

    sortBy(data) {
        return axios.get(`${environment.newsApiUrl}everything?sortBy=${data.sortBy}&q=${data.value}&pageSize=10&page=${data.page}&apiKey=${environment.newsApiKey}`);
    },
}
</script>