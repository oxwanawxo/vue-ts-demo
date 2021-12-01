import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        component: () => import('../views/a.vue')
    },
    {
        path: '/b',
        component: () => import('../views/b.vue')
    },
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router