// Vedors
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

// Store modules
import news from './modules/news';
import weather from './modules/weather';
import rates from './modules/rates';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        news,
        weather,
        rates
    },
    plugins: [
        createPersistedState({
            getState: (key) => Cookies.getJSON(key),
            setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
        })
    ]
})