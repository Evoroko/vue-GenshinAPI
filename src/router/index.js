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
            path: '/',
            meta: {
                title: 'Genshin Impact App'
            }
        },
        {
            component: About,
            path: '/about',
            meta: {
                title: 'About — Genshin Impact App'
            }
        },
        {
            component: Character,
            path: '/character/:min_name',
            meta: {
                title: 'Character — Genshin Impact App'
            }
        },
        {
            component: Nation,
            path: '/nations/:name_min',
            meta: {
                title: 'Nation — Genshin Impact App'
            }
        },
        {
            component: Today,
            path: '/today',
            meta: {
                title: 'Today — Genshin Impact App'
            }
        }
    ],
    history: createWebHistory('/projets/vuejs/')
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
})

export default router