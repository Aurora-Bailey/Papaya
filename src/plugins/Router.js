import Vue from 'vue'
import Router from 'vue-router'

// Routes
import LandingPage from 'routes/LandingPage'
import Sign from 'routes/Sign'
import Setup from 'routes/Setup'
import Home from 'routes/Home'
import Events from 'routes/Events'
import People from 'routes/People'
import Mail from 'routes/Mail'
import Profile from 'routes/Profile'
import Tags from 'routes/Tags'
import Settings from 'routes/Settings'
import NotFound from 'routes/NotFound'

// Nav
import DrawerMain from 'navigation/DrawerMain'
import ToolbarMain from 'navigation/ToolbarMain'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Landing Page', components: { default: LandingPage } },
    { path: '/Sign', name: 'Sign', components: { default: Sign, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/setup', name: 'Setup', components: { default: Setup, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/home', name: 'Home', components: { default: Home, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/people', name: 'People', components: { default: People, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/events', name: 'Events', components: { default: Events, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/mail', name: 'Mail', components: { default: Mail, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/profile', name: 'Profile', components: { default: Profile, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/tags', name: 'Tags', components: { default: Tags, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/settings', name: 'Settings', components: { default: Settings, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '*', name: 'Not Found', components: { default: NotFound, drawer: DrawerMain, toolbar: ToolbarMain } }
  ]
})
