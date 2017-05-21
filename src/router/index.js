import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Page from '@/components/Page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    }    
  ]
})
