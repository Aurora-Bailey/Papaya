import Vue from 'vue'
import Router from 'vue-router'

// Routes
import Home from 'routes/Home'
import Hello from 'routes/Hello'

// Nav
import AppNav from 'components/AppNav'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', components: { default: Home, nav: AppNav } },
    { path: '/hello', name: 'Hello', components: { default: Hello, nav: AppNav } }
  ]
})
