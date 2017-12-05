import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import login from '@/pages/login'
import register from '@/pages/register'
import buyCar from '@/pages/buyCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component:index
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },
    {
      path: '/register',
      name: 'register',
      component:register
    },
    {
      path: '/buyCar',
      name: 'buyCar',
      component:buyCar
    },
  ]
})
