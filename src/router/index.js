import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: '/About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/login',
        name: '/Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/register',
        name: '/Register',
        component: () =>
            import ('../views/Register.vue')
    },

    {
        path: '/Config-notis',
        name: 'config-notis',
        component: () =>
            import ('../views/Config-notis.vue')
    },

    {
        path: '/Time-notis',
        name: 'time-notis',
        component: () =>
            import ('../views/Time-notis.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router