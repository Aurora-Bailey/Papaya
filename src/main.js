// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Plugins
import BodyScroll from './plugins/BodyScroll'
import Router from './plugins/Router'
import FirebaseAuth from './plugins/FirebaseAuth'
import Firebase from 'firebase'
import './plugins/Material'
import './plugins/Resource'
import './plugins/API'
import './plugins/Filters'
import './plugins/Style.scss'
import 'cropperjs/dist/cropper.min.css'
import 'cropperjs/dist/cropper.min.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  template: '<App/>',
  components: { App },
  beforeCreate () {
    FirebaseAuth.auth(auth => {
      // Set Auth
      this.auth = auth

      // Bind to user data
      if (auth) {
        if (this.user['.key']) {
          console.log('user already bound.')
        } else {
          console.log('Bind user.')
          this.$bindAsObject('user', Firebase.database().ref('user/' + this.auth.uid))
        }
      } else if (this.user['.key']) {
        console.log('Unbind user')
        this.$unbind('user')
        this.user = setUser()
      }

      // Re-route on auth event
      if (auth) {
        // Logged in but stitting on a login page
        if (this.$route.path === '/' || this.$route.path === '/signin' || this.$route.path === '/signup') {
          console.log('Re-route home')
          this.$router.replace('/home')
        }
      } else {
        // Not logged in and not sitting on a login page
        if (this.$route.path !== '/' && this.$route.path !== '/signin' && this.$route.path !== '/signup') {
          console.log('Re-route signin')
          this.$router.replace('/signin')
        }
      }
    })
  },
  data () {
    return {
      scroll: BodyScroll,
      drawerOpen: false,
      auth: {}, // Not reactive, used as a data store.
      user: setUser()
    }
  }
})

function setUser () {
  return {
    locationName: 'Not Set',
    locationLong: 0,
    locationLat: 0,
    displayName: '',
    pictureURL: '',
    firstName: '',
    lastName: '',
    distance: 20,
    birthday: Date.now(), // Timestamp
    email: '',
    bio: '',
    sex: 'na'
  }
}
