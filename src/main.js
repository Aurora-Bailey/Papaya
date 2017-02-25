// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Plugins
import BodyScroll from './plugins/BodyScroll'
import Router from './plugins/Router'
import PapayaFire from './plugins/PapayaFire'
import Firebase from 'firebase'
import './plugins/Material'
import './plugins/Resource'
import './plugins/API'
import './plugins/Filters'
import './plugins/Style.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  firebase: PapayaFire,
  template: '<App/>',
  components: { App },
  beforeCreate () {
    Firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log('Log in')
        this.user = firebaseUser

        // Redirect from public page
        if (this.$route.path === '/' || this.$route.path === '/signin' || this.$route.path === '/signup') {
          this.$router.push('/home')
        }
      } else {
        // Redirect to public page
        if (this.$route.path !== '/' && this.$route.path !== '/signin' && this.$route.path !== '/signup') {
          this.$router.push('/')
        }
      }
    })
  },
  data () {
    return {
      scroll: BodyScroll,
      drawerOpen: false,
      user: null
    }
  }
})
