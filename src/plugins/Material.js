import Vue from 'vue'
import Material from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(Material)

// Theme
Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'deep-orange',
    background: 'white'
  },
  white: {
    primary: 'white',
    accent: 'deep-orange',
    background: 'white'
  }
})
