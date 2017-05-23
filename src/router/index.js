import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Projects from '@/components/Projects'
import ProjectPSA from '@/components/ProjectPSA'
import Project21c from '@/components/Project21c'
import ProjectWBG from '@/components/ProjectWBG'
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
      path: '/project/waterfront-botanical-gardens',
      name: 'Projects: Waterfront Botanical Gardens',
      component: ProjectWBG
    },
    {
      path: '/project/21c',
      name: 'Projects: 21c',
      component: Project21c
    },    
    {
      path: '/project/psa',
      name: 'Projects: PSA',
      component: ProjectPSA
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
