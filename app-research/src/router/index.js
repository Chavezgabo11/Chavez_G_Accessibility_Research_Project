import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/Video',
    name: 'Video',
    component: () => import("../views/Video.vue"),
    props: true
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
