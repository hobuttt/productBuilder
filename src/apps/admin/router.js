import Vue from 'vue'
import Router from 'vue-router'

import CakeBuilder from '@admin/views/CakeBuilder'
import Login from '@admin/views/Login'
import Title from '@admin/views/Title'
import Registration from '@admin/views/Registration'

import Layout from '@admin/components/Layout.vue'
import NotFoundComponent from '@admin/components/NotFoundComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/title',
      component: Layout,
      // beforeEnter (to, from, next) {
      // if (!TokenManager.getToken()) {
      //   next('/login')
      // } else {
      //   next(true)
      // }
      // },
      children: [
        {
          path: 'title',
          name: 'Title',
          component: Title
        },
        {
          path: 'cake-builder',
          name: 'CakeBuilder',
          component: CakeBuilder
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/registration',
          name: 'registration',
          component: Registration
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: NotFoundComponent
    }
  ]
})
