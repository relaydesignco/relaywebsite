import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Company from '@/components/Company'
import Contact from '@/components/Contact'

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
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/company',
      name: 'Company',
      component: Company
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
