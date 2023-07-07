import { createRouter, createWebHistory } from 'vue-router'
// import Home from '/src/components/Home.vue'
// import About from '/src/components/About.vue'
import fullDetails from '../views/fullDetails.vue'

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home,
    // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: About,
    // },
    {
        path: '/Details',
        name: 'fullDetails',
        component: fullDetails,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
