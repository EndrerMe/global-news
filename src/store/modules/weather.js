import weatherService from './../../shared/services/weather.service';

export default {
    actions: {
        async getWeather(ctx, lat, lng) {
            weatherService.getWeather(lat, lng).then(res => {
                console.log(res)
                ctx.commit('updateWeatherData', res.data)
            });            
        }
    },

    mutations: {
        updateWeatherData(state, weather) {
            state.weatherData = weather;
        }
    },

    state: {
        weatherData: [],
    },

    getters: {
        getWeatherData(state) {
            return state.weatherData;
        } 
    }
}