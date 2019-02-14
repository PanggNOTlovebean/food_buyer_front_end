import Vue from 'vue'
import Router from 'vue-router'
import BHeader from './components/b-header/b-header'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: BHeader
    },
  ]
})
