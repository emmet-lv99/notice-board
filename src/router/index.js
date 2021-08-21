import { createRouter, createWebHistory } from 'vue-router'
import vuex from '../store'
import Home from '../views/Home.vue'

const store = vuex

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create.vue')
  },
  {
    path: '/:boardPath',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
    beforeEnter: (to, from) => {
      if (store.state.noticeItems.length <= 0 || store.state.noticeItems === null) {
        return from
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
