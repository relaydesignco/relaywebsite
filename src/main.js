// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueHead from 'vue-head'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(VueHead, {
  separator: '|',
  complement: 'Relay Design Co.'
})

Vue.use(VueAnalytics, {
  id: 'UA-99760067-1',
  router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  watch: {
      $route: function() {
          window.scrollTo(0,0);
      }
  }
})

