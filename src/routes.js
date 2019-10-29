import home from "./shared/layouts/pages/home/home";
import newsinfo from "./shared/layouts/pages/news-info/news-info";
import testhover from "./shared/layouts/pages/home/test-hover";
import currentCategory from './shared/layouts/pages/categories/category';

const routes = [
  {
    path: "/",
    component: home,
    name: "Home",
    alias: "/Home"
  },
  {
    path: "/news-info",
    name: "news-info",
    component: newsinfo,
    props: true
  },
  {
    path: "/test-hover",
    name: "testHover",
    component: testhover
  },
  {
    path: '/category/:category',
    name: 'category',
    component: currentCategory,
    props: true
  }
];

export default routes;
