import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Character from '../pages/Character.vue';
import Nation from '../pages/Nation.vue';
import Today from '../pages/Today.vue';

const router = createRouter({
    routes: [
        {
            component: Home,
            path: '/'
        },
        {
            component: About,
            path: '/about'
        },
        {
            component: Character,
            path: '/character/:min_name'
        },
        {
            component: Nation,
            path: '/nations/:name_min'
        },
        {
            component: Today,
            path: '/today'
        }
    ],
    history: createWebHistory('/projets/dist/')
})

export default router