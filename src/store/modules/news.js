import newsService from './../../shared/services/news.service';

export default {
    actions: {
        async getNewsData(ctx, data) {
            newsService.getData(data.category, data.page).then((res) => {
            let newsCol = data.limit;
            let news = [];
                for (let i = 0; i < newsCol; i++) {
                    if (res.data.articles[i].urlToImage) {
                        news.push(res.data.articles[i])

                    } else {
                        newsCol += 1;
                        continue;
                    }
                }
                ctx.commit('updateNews', news);
            })
        },

        async getNewsForHome(ctx, data) {
            newsService.getData(data.category, data.page).then((res) => {
            let newsCol = data.limit;
            let news = [];
                for (let i = 0; i < newsCol; i++) {
                    if (res.data.articles[i].urlToImage) {
                        news.push(res.data.articles[i])

                    } else {
                        newsCol += 1;
                        continue;
                    }
                }
                ctx.commit('updateNewsForHome', {news: news, category: data.category});
            })
        },

        async getTopNews(ctx, data) {            
            newsService.getTopNews(data.filter).then((res) => {
            let newsCol = 3;
            let news = [];
            for (let i = 0; i < newsCol; i++) {
                if (res.data.articles[i].urlToImage) {
                    news.push(res.data.articles[i])

                } else {
                    newsCol += 1;
                    continue;
                }
            }    
            ctx.commit('updateTopNews', news);
            })
        },
    },
    mutations: {
        updateNews(state, news) {
            state.newsHome = news;
        },

        updateTopNews(state, news) {
            state.topNews = news;
        },

        updateNewsForHome(state, data) {
            data.news.category = data.category;
            state.newsHome.push(data.news);
            if (state.newsHome.length > 3) {
                state.newsHome.splice(3, state.newsHome.length - 3);
            }
        }
    },
    state: {
        newsHome: [],
        topNews: [],
    },
    getters: {
        getNewsFromState(state) {
            return state.newsHome 
        },

        getTopNewsFromState(state) {
            return state.topNews
        }
    },
}