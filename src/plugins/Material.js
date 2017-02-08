import Vue from 'vue'
import Material from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(Material)

// Theme
Vue.material.registerTheme({
  default: {
    primary: 'blue-grey',
    accent: 'orange',
    background: 'white'
  },
  white: {
    primary: 'white',
    accent: 'orange',
    background: 'white'
  }
})
