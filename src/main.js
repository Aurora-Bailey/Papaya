// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Plugins
import FirebaseAuth from './plugins/FirebaseAuth'
import Firebase from 'firebase'
import BodyScroll from './plugins/BodyScroll'
import Router from './plugins/Router'
import './plugins/Material'
import './plugins/Resource'
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
      if (auth && auth.uid) this.uid = auth.uid
      else this.uid = null

      // Set Verified
      if (auth && auth.emailVerified) this.emailVerified = auth.emailVerified
      else this.emailVerified = false

      // Remove any old bindings
      if (this.$firebaseRefs && this.$firebaseRefs['user']) this.$unbind('user')
      // Set new bindings
      if (auth) {
        this.$bindAsObject('user', Firebase.database().ref('user/' + auth.uid))
      } else {
        this.user = this.setUser()
      }

      // TODO: Splash screen whie loading

      // Re-route on auth event
      if (auth) {
        // Logged in but stitting on a login page
        if (this.$route.path === '/' || this.$route.path === '/signin') {
          this.$router.replace('/home')
        } else if (this.$route.path === '/signup') {
          this.$router.replace('/setup')
        }
      } else {
        // Not logged in and not sitting on a login page
        if (this.$route.path !== '/' && this.$route.path !== '/signin' && this.$route.path !== '/signup') {
          this.$router.replace('/signin')
        }
      }

      // Remove the splash screen
      this.SplashScreen = false
    })
  },
  data () {
    return {
      scroll: BodyScroll,
      drawerOpen: false,
      SplashScreen: true,
      uid: null,
      emailVerified: false,
      user: this.setUser()
    }
  },
  methods: {
    setProfile () {
      return {
        locationName: 'Not Set',
        displayName: '',
        pictureURL: '',
        age: 20, // Timestamp
        bio: '',
        sex: 'na'
      }
    },
    setUser () {
      return {
        locationName: 'Not Set',
        locationLong: -109.3495,
        locationLat: -27.113,
        displayName: '',
        pictureURL: '',
        firstName: '',
        lastName: '',
        distance: 20,
        birthday: 0, // Timestamp
        email: '',
        bio: '',
        sex: 'na'
      }
    }
  }
})
