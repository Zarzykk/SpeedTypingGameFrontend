import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home';
import UserPage from '../views/UserPage'
import Typing from "../views/Typing";
import Result from "../views/Result";

Vue.use(VueRouter)


const routes = [
    {
        path: '/home',
        alias: ['/',''],
        name: 'Home',
        component: Home
    },
    {
        path: '/userpage',
        name: 'UserPage',
        component: UserPage
    },
    {
        path: '/typing',
        name: 'Typing',
        component: Typing
    },
    {
        path: '/results',
        name: 'Results',
        component: Result
    }
]


const router = new VueRouter({
    routes
})

export default router