import Vue from 'vue'
import Router from 'vue-router'

// Routes
import LandingPage from 'routes/LandingPage'
import Sign from 'routes/Sign'
import Setup from 'routes/Setup'
import Home from 'routes/Home'
import PeopleFind from 'routes/PeopleFind'
import PeopleFollowers from 'routes/PeopleFollowers'
import PeopleFollowing from 'routes/PeopleFollowing'
import EventsFind from 'routes/EventsFind'
import EventsPlanning from 'routes/EventsPlanning'
import EventsPast from 'routes/EventsPast'
import Mail from 'routes/Mail'
import Profile from 'routes/Profile'
import Tags from 'routes/Tags'
import Settings from 'routes/Settings'
import NotFound from 'routes/NotFound'

// Nav
import DrawerMain from 'navigation/DrawerMain'
import ToolbarMain from 'navigation/ToolbarMain'
import TabsEvents from 'navigation/TabsEvents'
import TabsPeople from 'navigation/TabsPeople'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    { path: '/', name: 'Landing Page', components: { default: LandingPage } },
    { path: '/Sign', name: 'Sign', components: { default: Sign, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/setup', name: 'Setup', components: { default: Setup, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/home', name: 'Home', components: { default: Home, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/people', redirect: '/people/find' },
    { path: '/people/find', name: 'Find People', components: { default: PeopleFind, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsPeople } },
    { path: '/people/following', name: 'People Following', components: { default: PeopleFollowing, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsPeople } },
    { path: '/people/followers', name: 'My Followers', components: { default: PeopleFollowers, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsPeople } },
    { path: '/events', redirect: '/events/find' },
    { path: '/events/find', name: 'Find Events', components: { default: EventsFind, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsEvents } },
    { path: '/events/planning', name: 'Planning Events', components: { default: EventsPlanning, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsEvents } },
    { path: '/events/past', name: 'Past Events', components: { default: EventsPast, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsEvents } },
    { path: '/mail', name: 'Mail', components: { default: Mail, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/profile', name: 'Profile', components: { default: Profile, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/tags', name: 'Tags', components: { default: Tags, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/settings', name: 'Settings', components: { default: Settings, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '*', name: 'Not Found', components: { default: NotFound, drawer: DrawerMain, toolbar: ToolbarMain } }
  ]
})
