import newsService from './../../shared/services/news.service';

export default {
    actions: {
        async getNewsData(ctx, data) {
            newsService.getData(data.category, data.page).then((res) => {
                let newsCol = data.limit;
                const resData = res.data.articles;
                let news = [];
                for (let i = 0; i < newsCol; i++) {
                    if (resData[i].urlToImage) {
                        news.push(res.data.articles[i])
                    } else {
                        newsCol += 1;
                        continue;
                    }
                }

                ctx.commit('updateNews', {news: news});
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

        async changeCurrentNews(ctx, news) {
            ctx.commit('updateCurrentNews', news);
        },
    },
    mutations: {
        updateNews(state, data) {
            state.news = data.news;
        },

        updateTopNews(state, news) {
            state.topNews = news;
        },

        updateNewsForHome(state, data) {
            data.news.category = data.category;

            if (data.category === 'business') {
                state.newsHome[0] = data.news;
            } else if (data.category === 'entertainment') {
                state.newsHome[1] = data.news;
            } else if (data.category === 'science') {
                state.newsHome[2] = data.news;
            }

            if (state.newsHome.length > 3) {
                state.newsHome.splice(3, state.newsHome.length - 3);
            }
        },

        updateCurrentNews (state, data) {
            localStorage.setItem('currentNews', JSON.stringify(data));
            state.currentNews = data;
        },
    },
    state: {
        newsHome: [],
        news: [],
        topNews: [],
        currentNews: [],
        firstBlock: [],
        secoundBlock: [],
        thirdBlock: [],
        fourthBlock: [],
    },
    getters: {
        getNewsFromState(state) {
            return state.newsHome 
        },

        getTopNewsFromState(state) {
            return state.topNews
        },

        getCurrentNews(state) {
            return state.currentNews;
        },

        getNews(state) {
            return state.news;
        }
    },
}