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
  'default-dark': {
    primary: {
      color: 'blue',
      hue: 600
    },
    accent: 'deep-orange'
  },
  invert: {
    primary: 'deep-orange',
    accent: 'blue'
  },
  white: {
    primary: 'white',
    accent: 'deep-orange'
  }
})
