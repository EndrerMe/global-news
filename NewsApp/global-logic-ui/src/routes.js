function lazyLoad(view){
  return() => import(`./screens/${view}.vue`)
}

const routes = [
  {
    path: "/",
    component: lazyLoad('home'),
    name: "Home",
    alias: "/Home"
  },
  {
    path: "/news-info",
    name: "news-info",
    component: lazyLoad('news-info'),
    props: true
  },
  {
    path: "/weather-mobile",
    name: "weather-mobile",
    component: lazyLoad('weather-mobile')
  },
  {
    path: "/converter-mobile",
    name: "converter-mobile",
    component: lazyLoad('converter-mobile')
  },
  {
    path: '/category/:category',
    name: 'category',
    component: lazyLoad('category'),
    props: true
  },
  {
    path: '/weather-map',
    name: 'weatherMap',
    component: lazyLoad('weather-map'),
    props: true,
  },
  {
    path: "/search-results",
    name: "search-results",
    component: lazyLoad('search-results'),
    props: true
  },
];

export default routes;
