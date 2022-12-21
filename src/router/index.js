import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';

const router = createRouter({
    routes: [
        {
            component: Home,
            path: '/'
        },
        {
            component: About,
            path: '/about'
        }
    ],
    history: createWebHistory()
})

export default router