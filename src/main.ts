import { createApp } from 'vue'
import { createGtm } from '@gtm-support/vue-gtm'
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
  .use(createGtm({
    id: import.meta.env.VITE_GTM_ID,
    defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
    compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
    debug: true, // Whether or not display console logs debugs (optional)
    loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
    vueRouter: router, // Pass the router instance to automatically sync with router (optional)
    trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
  }),
  )
  .mount('#app')
