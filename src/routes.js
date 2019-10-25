import home from './shared/layouts/pages/home/home';
import newinfo from './shared/layouts/pages/new-info/new-info';
import testhover from './shared/layouts/pages/home/test-hover';
import testhovertablet from './shared/layouts/pages/home/test-hover-tablet';

import business from './shared/layouts/pages/categories/business';
import entertainment from './shared/layouts/pages/categories/entertainment';
import general from './shared/layouts/pages/categories/general';
import health from './shared/layouts/pages/categories/health';
import science from './shared/layouts/pages/categories/science';
import sport from './shared/layouts/pages/categories/sport';
import technology from './shared/layouts/pages/categories/technology';

const routes = [
    {
        path: '/',
        component: home,
        name:'Home',
        alias: '/Home'
    },
    {
        path: '/new-info',
        name:'newInfo',
        component: newinfo,
    },
    {
        path: '/test-hover',
        name:'testHover',
        component: testhover,
    },
    {
        path: '/test-hover-tablet',
        name:'testHover',
        component: testhovertablet,
    },
    {
        path: '/business',
        name:'business',
        component: business,
    },
    {
        path: '/entertainment',
        name:'entertainment',

        component: entertainment,
    },
    {
        path: '/general',
        name:'general',

        component: general,
    },
    {
        path: '/health',
        name:'health',

        component: health,
    },
    {
        path: '/science',
        name:'science',

        component: science,
    },
    {
        path: '/sport',
        name:'sport',

        component: sport,
    },
    {
        path: '/technology',
        name:'technology',
        component: technology,
    },
]

export default routes