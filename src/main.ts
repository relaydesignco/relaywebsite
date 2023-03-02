import { createApp } from 'vue'
import VueGtm from 'vue-gtm'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from 'unhead'
import LottieAnimation from 'lottie-web-vue'
import 'aos/dist/aos.css'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Approach from './views/Approach.vue'
import Contact from './views/Contact.vue'
import Work from './views/Work.vue'
import TwentyOneC from './views/work/TwentyOneC.vue'
import GEAppliances from './views/work/GEAppliances.vue'
import OdessaConnect from './views/work/OdessaConnect.vue'
import EmbodiedLabs from './views/work/EmbodiedLabs.vue'
import AmericanAirlines from './views/work/AmericanAirlines.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/approach', component: Approach },
    { path: '/contact', component: Contact },
    { path: '/work', component: Work },
    { path: '/work/21c', component: TwentyOneC },
    { path: '/work/ge', component: GEAppliances },
    { path: '/work/odessa', component: OdessaConnect },
    { path: '/work/embodied-labs', component: EmbodiedLabs },
    { path: '/work/american-airlines', component: AmericanAirlines },
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

const pinia = createPinia()

const head = createHead()

createApp(App)
  .use(LottieAnimation)
  .use(router)
  .use(pinia)
  .use(VueGtm, {
    id: import.meta.env.VITE_GTM_ID,
    defer: false,
    enabled: true,
    debug: false,
    loadScript: true,
    vueRouter: router,
    trackOnNextTick: false,
  })
  .mount('#app')

