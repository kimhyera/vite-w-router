import { createRouter, createWebHistory } from 'vue-router';

const routes = [

    {
        path: '/layout',
        name: 'layout',
        component: () => import('../layouts/Layout.vue'),
        children: [


            {
                path: '/',
                name: 'main',
                component: () => import('../views/main.vue'),
            }, {
                path: '/',
                name: 'Page1',
                component: () => import('../views/page1.vue'),
            },
            {
                path: '/page2',
                name: 'Page2',
                component: () => import('../views/page2.vue'),
            },
            {
                path: '/Page3',
                name: 'Page3',
                component: () => import('../views/page3.vue'),
            },
            {
                path: '/page4',
                name: 'page4',
                component: () => import('../views/page4.vue'),
            }, {
                path: '/page5',
                name: 'Page5',
                component: () => import('../views/page5.vue'),
            }


        ]

    }

];


const router = createRouter({
    history: createWebHistory(''),
    routes,
});
export default router;
