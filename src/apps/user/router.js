import Vue from 'vue'
import Router from 'vue-router'

import CakeBuilder from '@user/views/CakeBuilder.vue'
import Login from '@user/views/Login.vue'
import Title from '@user/views/Title.vue'

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
          component: CakeBuilder
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      name: '404',
      component: NotFoundComponent
    }
  ]
})
