import Vue from 'vue'
import Router from 'vue-router'

// Routes
import LandingPage from 'routes/LandingPage'
import Sign from 'routes/Sign'
import Setup from 'routes/Setup'
import Home from 'routes/Home'
import FindPeople from 'routes/FindPeople'
import MyFollowers from 'routes/MyFollowers'
import MyPeople from 'routes/MyPeople'
import FindEvents from 'routes/FindEvents'
import PlanningEvents from 'routes/PlanningEvents'
import PastEvents from 'routes/PastEvents'
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
  routes: [
    { path: '/', name: 'Landing Page', components: { default: LandingPage } },
    { path: '/Sign', name: 'Sign', components: { default: Sign, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/setup', name: 'Setup', components: { default: Setup, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/home', name: 'Home', components: { default: Home, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/people', redirect: '/people/find' },
    { path: '/people/find', name: 'Find People', components: { default: FindPeople, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsPeople } },
    { path: '/people/my', name: 'My People', components: { default: MyPeople, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsPeople } },
    { path: '/people/followers', name: 'My Followers', components: { default: MyFollowers, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsPeople } },
    { path: '/events', redirect: '/events/find' },
    { path: '/events/find', name: 'Find Events', components: { default: FindEvents, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsEvents } },
    { path: '/events/planning', name: 'Planning Events', components: { default: PlanningEvents, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsEvents } },
    { path: '/events/past', name: 'Past Events', components: { default: PastEvents, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsEvents } },
    { path: '/mail', name: 'Mail', components: { default: Mail, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/profile', name: 'Profile', components: { default: Profile, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/tags', name: 'Tags', components: { default: Tags, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '/settings', name: 'Settings', components: { default: Settings, drawer: DrawerMain, toolbar: ToolbarMain } },
    { path: '*', name: 'Not Found', components: { default: NotFound, drawer: DrawerMain, toolbar: ToolbarMain } }
  ]
})
