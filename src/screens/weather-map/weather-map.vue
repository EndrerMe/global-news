<template>
    <div class="container">
        <moreWeather :isShowMoreWeather='isShowMoreWeather' @closeMoreWeather='closeMoreWeather' :weatherData='weatherData' :isWeatherMap='true'></moreWeather>
        <div id='map' class="map"></div>
    </div>
</template>

<script>
import {environment} from './../../environment/environment';
import mapboxgl from 'mapbox-gl'
import moreWeather from './../../shared/components/more-weather';
import weatherService from './../../shared/services/weather.service';

export default {
    props: ['data'],
    name: 'weatherMap',
    components: {
        moreWeather,
    },
    data() {
        return {
            map: mapboxgl.Map,
            isShowMoreWeather: false,
            weatherData: null,
        }
    },
    mounted () {
        let that = this;
        mapboxgl.accessToken = environment.mapboxKey;
        this.$getLocation().then(coordinates => {
            this.map = new mapboxgl.Map({
                container: 'map', // container id
                style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
                center: [coordinates.lng, coordinates.lat], // starting position [lng, lat]
                zoom: 9 // starting zoom
            });

            this.map.on('click', function (e) {
                weatherService.getWeather(e.lngLat.lat, e.lngLat.lng).then((res) => {
                    that.weatherData = res.data;
                    that.isShowMoreWeather = true;
                })
            });
        }).catch(function (e) {
            console.log(e);
        }) 
    },
    methods: {
        closeMoreWeather() {
            this.isShowMoreWeather = false;
        },
    }
}
</script>

<style scoped>
    .map {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>