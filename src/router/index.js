import { createRouter, createWebHistory } from 'vue-router'
import GuessView from '@/views/GuessView.vue'

const routes = [
  {
    path: '/',
    redirect: '/guess'
  },
  {
    path: '/guess',
    component: GuessView
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
