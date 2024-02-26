import { createRouter, createWebHashHistory } from 'vue-router'
import Landingview from '../views/Landingview.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Landingview
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/skills',
    name:'skills ',
    component: () =>import ('../views/SkillsView.vue')
  },
  {
    path:'/projects',
    name: 'projects',
    component: () => import ('../views/ProjectsView.vue')
  },
  {
    path:'/peer-review',
    name: 'peer-review',
    component: () => import ('../views/PeerreviewView.vue')
  },
  {
    path:'/contact',
    name: 'contact',
    component: () => import ('../views/ContactView.vue')
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
