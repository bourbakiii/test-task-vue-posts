import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/PostsPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            name: 'home',
            component: HomeView
        }
    ]
})

export default router
