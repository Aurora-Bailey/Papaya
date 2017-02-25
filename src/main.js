// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Plugins
import BodyScroll from './plugins/BodyScroll'
import Router from './plugins/Router'
import FirebaseAuth from './plugins/FirebaseAuth'
import './plugins/Material'
import './plugins/Resource'
import './plugins/API'
import './plugins/Filters'
import './plugins/Style.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  template: '<App/>',
  components: { App },
  data () {
    return {
      scroll: BodyScroll,
      drawerOpen: false,
      auth: FirebaseAuth
    }
  }
})
