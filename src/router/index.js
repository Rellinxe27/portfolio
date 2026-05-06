import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory('/portfolio/'),
  routes: [
    { path: '/',           component: HomeView },
    { path: '/work',       component: () => import('../views/WorkView.vue') },
    { path: '/coursework', component: () => import('../views/CourseworkView.vue') },
    { path: '/about',      component: () => import('../views/AboutView.vue') },
    { path: '/contact',    component: () => import('../views/ContactView.vue') },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
