import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/login'
    }, {
      path: '/login', name: 'login', component: require('@/views/login/index').default
    }, {
      path: '/dashboard',
      name: 'dashboard',
      component: layout,
      children: [{
        path: '/dashboard/index',
        component: () => import('@/views/dashboard/index')
      }]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
