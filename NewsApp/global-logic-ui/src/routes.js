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
    path: "/test-hover",
    name: "testHover",
    component: lazyLoad('test-hover')
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
  }
];

export default routes;
