import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import UserView from '@/views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/user/:username',
      name: 'user',
      component: UserView,
      beforeEnter: (to, from, next) => {
        if (to.params.username !== 'admin') {
          alert('접근이 허용되지 않았습니다. 홈으로 이동합니다.')
          next({ name: 'home' })
        } else {
          next()
        }
      }
    }
  ]
})

export default router
