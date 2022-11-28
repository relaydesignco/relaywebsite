import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Approach from './views/Approach.vue'
import Work from './views/Work.vue'

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/work', component: Work },
    { path: '/approach', component: Approach },
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
