<template>
  <div class="drawer-main">
    <md-sidenav id="webapp-sidebar" class="md-left md-fixed" @close="sidebarClosing" ref="sidenav">
      <md-toolbar class="md-account-header">
        <md-list class="md-transparent">

          <router-link to="/profile">
            <md-list-item class="md-avatar-list">
              <md-avatar class="md-large">
                <img src="https://placeimg.com/64/64/people/8" alt="People">
              </md-avatar>

              <span style="flex: 1"></span>

              <md-avatar>
                <img src="https://placeimg.com/40/40/people/3" alt="People">
              </md-avatar>

              <md-avatar>
                <img src="https://placeimg.com/40/40/people/4" alt="People">
              </md-avatar>
            </md-list-item>
          </router-link>

          <md-list-item>
            <div class="md-list-text-container">
              <span>John Doe</span>
              <span>johndoe@email.com</span>
            </div>
          </md-list-item>
        </md-list>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <router-link to="/home">
            <md-icon>home</md-icon> <span>Home</span>
          </router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/people">
            <md-icon>group</md-icon> <span>People</span>
          </router-link>
        </md-list-item>
        <md-list-item>
          <router-link  to="/events">
            <md-icon>event</md-icon> <span>Events</span>
          </router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/profile">
            <md-icon>account_circle</md-icon> <span>Profile</span>
          </router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/mail">
            <md-icon>mail</md-icon> <span>Mail</span> <md-button md-theme="red" class="md-raised md-primary mod-md-button-badge">4 new</md-button>
          </router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/tags">
            <md-icon>loyalty</md-icon> <span>Tags</span>
          </router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/settings">
            <md-icon>settings</md-icon> <span>Settings</span>
          </router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
export default {
  name: 'drawer-main',
  methods: {
    sidebarClosing: function () {
      this.$root.$data.drawerOpen = false
    }
  },
  watch: {
    '$root.$data.drawerOpen': function (e) {
      if (e) this.$refs.sidenav.open()
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$refs.sidenav.close()
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
