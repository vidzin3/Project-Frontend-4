// define router

import {createRouter,createWebHistory} from 'vue-router'
import home from '../view/home.vue'
import playgame from '../view/playgame.vue'
import about from '../view/about.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            component: home
        },
        {
            path: '/playgame/:id',
            component: playgame
        },
        {
            path: '/about',
            component:about
        }
    ]
})

export default router