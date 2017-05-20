import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Page from '@/components/Page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    }    
  ]
})
