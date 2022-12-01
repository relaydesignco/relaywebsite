import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Approach from './views/Approach.vue'
import Work from './views/Work.vue'
import TwentyOneC from './views/work/TwentyOneC.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/approach', component: Approach },
    { path: '/work', component: Work },
    { path: '/work/21c', component: TwentyOneC },
  ],
  scrollBehavior(to, from, savedPosition) {
    // scroll to top or last position if route changes
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

createApp(App).use(router).mount('#app')
