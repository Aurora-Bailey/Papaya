import Vue from 'vue'
import Material from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(Material)

// Theme
Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'orange',
    background: 'white'
  },
  white: {
    primary: 'white',
    accent: 'white',
    background: 'white'
  },
  red: {
    primary: 'red',
    accent: {
      color: 'green',
      hue: 900
    },
    background: 'white'
  },
  orange: {
    primary: 'orange',
    accent: {
      color: 'blue',
      hue: 900
    },
    background: 'white'
  },
  green: {
    primary: 'green',
    accent: {
      color: 'red',
      hue: 900
    },
    background: 'white'
  },
  teal: {
    primary: 'teal',
    accent: {
      color: 'red',
      hue: 900
    },
    background: 'white'
  },
  blue: {
    primary: 'blue',
    accent: {
      color: 'orange',
      hue: 900
    },
    background: 'white'
  },
  cyan: {
    primary: 'cyan',
    accent: {
      color: 'orange',
      hue: 900
    },
    background: 'white'
  },
  purple: {
    primary: 'purple',
    accent: {
      color: 'yellow',
      hue: 900
    },
    background: 'white'
  },
  brown: {
    primary: 'brown',
    accent: {
      color: 'green',
      hue: 900
    },
    background: 'white'
  }
})
