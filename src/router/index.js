import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Cover from '@/components/cover'
import Home from '@/components/Home'
import option from '@/components/Option'
import account from '@/components/Account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path: '/cover',
      name: 'cover',
      component: Cover
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/:path',
      name: 'option',
      component: option,
      props:true
    }
  ]
})

