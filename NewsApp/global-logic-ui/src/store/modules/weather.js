// Services
import weatherService from '@/shared/services/weather.service';

export default {
    actions: {
        async getWeather(ctx, coord) {
            weatherService.getWeather(coord.lat, coord.lng).then(res => {
                ctx.commit('updateWeatherData', res.data)
            });            
        },

        async getWeatherByCountry(ctx, place) {
            weatherService.getWeatherByCountry(place).then(res => {
                ctx.commit('updateWeatherData', res.data);
            })
        }
    },

    mutations: { 
        updateWeatherData(state, weather) {
            localStorage.setItem('currentWeather', JSON.stringify(weather));
            state.weatherData = weather;
        }
    },

    state: {
        weatherData: {},
    },

    getters: {
        getWeatherData(state) {
            return state.weatherData;
        } 
    }
}