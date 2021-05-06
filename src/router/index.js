import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//
import firebase from "firebase";


const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta:{requiresAuth:true}
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

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record=>record.meta.requiresAuth);
    const isAuthenticated = firebase.auth().currentUser;
    if(requiresAuth && !isAuthenticated){
        next("/login");
    }else{
        next();
    }
})
export default router