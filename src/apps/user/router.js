import Vue from 'vue'
import Router from 'vue-router'

import AuthGuard from '@user/auth-guard'
import CakeBuilder from '@user/views/CakeBuilder'
import Login from '@user/views/Login'
import Title from '@user/views/Title'
import Registration from '@user/views/Registration'

import Layout from '@user/components/Layout.vue'
import NotFoundComponent from '@user/components/NotFoundComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/title',
      component: Layout,
      children: [
        {
          path: 'title',
          name: 'Title',
          component: Title
        },
        {
          path: 'cake-builder',
          name: 'CakeBuilder',
          component: CakeBuilder,
          beforeEnter: AuthGuard
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
