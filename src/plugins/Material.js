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
    accent: 'white'
  },
  red: {
    primary: 'red',
    accent: {
      color: 'red',
      hue: 900
    }
  },
  orange: {
    primary: 'orange',
    accent: {
      color: 'red',
      hue: 900
    }
  },
  green: {
    primary: 'green',
    accent: {
      color: 'red',
      hue: 900
    }
  },
  teal: {
    primary: 'teal',
    accent: {
      color: 'red',
      hue: 900
    }
  },
  blue: {
    primary: 'blue',
    accent: {
      color: 'red',
      hue: 900
    }
  },
  cyan: {
    primary: 'cyan',
    accent: {
      color: 'red',
      hue: 900
    }
  },
  purple: {
    primary: 'purple',
    accent: {
      color: 'red',
      hue: 900
    }
  },
  brown: {
    primary: 'brown',
    accent: {
      color: 'red',
      hue: 900
    }
  }
})
