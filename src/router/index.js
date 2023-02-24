import { createRouter, createWebHistory } from 'vue-router'
import auth from './auth'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
    },
    auth
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router