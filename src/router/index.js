/*
 * @Descripttion: DOP
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-11-26 17:45:15
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-11-29 16:30:47
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/layout.vue'),
    name: 'layout',
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home'
      }
    ]
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test/index.vue')
  },
  {
    path: '/50X',
    name: '50X',
    component: () => import('@/views/err/50x.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/err/404.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

export default router
