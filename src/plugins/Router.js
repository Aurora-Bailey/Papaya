import Vue from 'vue'
import Router from 'vue-router'

// Routes
import LandingPage from 'routes/LandingPage'
import SignUp from 'routes/SignUp'
import SignIn from 'routes/SignIn'
import SignOut from 'routes/SignOut'
import Setup from 'routes/Setup'
import Home from 'routes/Home'
import PeopleFind from 'routes/PeopleFind'
import PeopleFollowers from 'routes/PeopleFollowers'
import PeopleFollowing from 'routes/PeopleFollowing'
import EventsFind from 'routes/EventsFind'
import EventsPlanning from 'routes/EventsPlanning'
import EventsPast from 'routes/EventsPast'
import EventsCreate from 'routes/EventsCreate'
import Mail from 'routes/Mail'
import MailChat from 'routes/MailChat'
import Profile from 'routes/Profile'
import Tags from 'routes/Tags'
import Settings from 'routes/Settings'
import NotFound from 'routes/NotFound'

// Nav
import DrawerMain from 'navigation/DrawerMain'
import ToolbarMain from 'navigation/ToolbarMain'
import ToolbarLanding from 'navigation/ToolbarLanding'
import TabsEvents from 'navigation/TabsEvents'
import TabsPeople from 'navigation/TabsPeople'

Vue.use(Router)

let RouteObject = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    { meta: {title: 'Papaya'}, path: '/', name: 'landing', components: { default: LandingPage, toolbar: ToolbarLanding } },
    { meta: {title: 'Papaya - Sign Up'}, path: '/signup', name: 'signup', components: { default: SignUp } },
    { meta: {title: 'Papaya - Sign In'}, path: '/signin', name: 'signin', components: { default: SignIn } },
    { meta: {title: 'Papaya - Sign Out'}, path: '/signout', name: 'signout', components: { default: SignOut } },
    { meta: {title: 'Papaya - Setup'}, path: '/setup', name: 'setup', components: { default: Setup } },
    { meta: {title: 'Papaya - Home'}, path: '/home', name: 'home', components: { default: Home, drawer: DrawerMain, toolbar: ToolbarMain } },
    { meta: {title: 'Papaya - People'}, path: '/people', redirect: '/people/find' },
    { meta: {title: 'Papaya - Find People'}, path: '/people/find', name: 'peoplefind', components: { default: PeopleFind, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsPeople } },
    { meta: {title: 'Papaya - Following'}, path: '/people/following', name: 'peoplefollowing', components: { default: PeopleFollowing, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsPeople } },
    { meta: {title: 'Papaya - Followers'}, path: '/people/followers', name: 'peoplefollowers', components: { default: PeopleFollowers, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsPeople } },
    { meta: {title: 'Papaya - Events'}, path: '/events', redirect: '/events/find' },
    { meta: {title: 'Papaya - Create Event'}, path: '/events/create', name: 'eventscreate', components: { default: EventsCreate, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsEvents } },
    { meta: {title: 'Papaya - Find Events'}, path: '/events/find', name: 'eventsfind', components: { default: EventsFind, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsEvents } },
    { meta: {title: 'Papaya - Planning'}, path: '/events/planning', name: 'eventsplanning', components: { default: EventsPlanning, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsEvents } },
    { meta: {title: 'Papaya - Past'}, path: '/events/past', name: 'eventspast', components: { default: EventsPast, drawer: DrawerMain, toolbar: ToolbarMain, tabs: TabsEvents } },
    { meta: {title: 'Papaya - Mail'}, path: '/mail', name: 'mail', components: { default: Mail, drawer: DrawerMain, toolbar: ToolbarMain } },
    { meta: {title: 'Papaya - Mail Open'}, path: '/mail/:id/:name', name: 'mailchat', components: { default: MailChat, drawer: DrawerMain, toolbar: ToolbarMain } },
    { meta: {title: 'Papaya - Profile'}, path: '/profile', name: 'profile', components: { default: Profile, drawer: DrawerMain, toolbar: ToolbarMain } },
    { meta: {title: 'Papaya - My Tags'}, path: '/tags', name: 'tags', components: { default: Tags, drawer: DrawerMain, toolbar: ToolbarMain } },
    { meta: {title: 'Papaya - Settings'}, path: '/settings', name: 'settings', components: { default: Settings, drawer: DrawerMain, toolbar: ToolbarMain } },
    { meta: {title: 'Papaya - Not Found'}, path: '*', name: 'notfound', components: { default: NotFound, drawer: DrawerMain, toolbar: ToolbarMain } }
  ]
})

RouteObject.afterEach((to, from) => {
  // Push to the end of the queue with a timeout
  // Mets title was being pushed to document title before title was being pushed to history
  // This was causing the history for the last page to have the title of the current page
  setTimeout(() => {
    window.document.title = to.meta.title
  }, 0)
})

export default RouteObject
