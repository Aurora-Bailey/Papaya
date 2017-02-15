import Vue from 'vue'
import Material from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(Material)

// Theme
Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'red',
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
      color: 'red',
      hue: 900
    },
    background: 'white'
  },
  orange: {
    primary: 'orange',
    accent: {
      color: 'red',
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
      color: 'red',
      hue: 900
    },
    background: 'white'
  },
  cyan: {
    primary: 'cyan',
    accent: {
      color: 'red',
      hue: 900
    },
    background: 'white'
  },
  purple: {
    primary: 'purple',
    accent: {
      color: 'red',
      hue: 900
    },
    background: 'white'
  },
  brown: {
    primary: 'brown',
    accent: {
      color: 'red',
      hue: 900
    },
    background: 'white'
  }
})
