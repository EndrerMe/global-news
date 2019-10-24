import home from './shared/layouts/pages/home/home';
import newinfo from './shared/layouts/pages/new-info/new-info';

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
        alias: '/Home'
    },
    {
        path: '/new-info',
        component: newinfo,
    },
    {
        path: '/business',
        component: business,
    },
    {
        path: '/entertainment',
        component: entertainment,
    },
    {
        path: '/general',
        component: general,
    },
    {
        path: '/health',
        component: health,
    },
    {
        path: '/science',
        component: science,
    },
    {
        path: '/sport',
        component: sport,
    },
    {
        path: '/technology',
        component: technology,
    },
]

export default routes