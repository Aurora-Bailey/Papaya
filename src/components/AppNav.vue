<template>
  <div class="app-nav">
    <div class="toolbar-placeholder"></div>

    <div id="toolbar-floating-wrapper">
      <md-whiteframe id="webapp-toolbar" md-tag="md-toolbar" md-elevation="2">
        <md-button class="md-icon-button sidebar-toggle" @click="$refs.sidenav.toggle()">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title toolbar-title" style="flex: 1">{{$route.name}}</h2>
      </md-whiteframe>
    </div>

    <md-sidenav id="webapp-sidebar" md-theme="default" class="md-left md-fixed" ref="sidenav">
      <md-toolbar class="md-account-header">
        <md-list class="md-transparent">
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

          <md-list-item>
            <div class="md-list-text-container">
              <span>John Doe</span>
              <span>johndoe@email.com</span>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>arrow_drop_down</md-icon>
            </md-button>
          </md-list-item>
        </md-list>
      </md-toolbar>

      <md-list>
        <md-list-item :class="{'md-primary': $route.path === '/'}" >
          <router-link to="/">
            <md-icon>home</md-icon> <span>Home</span>
          </router-link>
        </md-list-item>
        <md-list-item :class="{'md-primary': $route.path === '/people'}">
          <router-link to="/people">
            <md-icon>group</md-icon> <span>People</span>
          </router-link>
        </md-list-item>
        <md-list-item :class="{'md-primary': $route.path === '/events'}">
          <router-link  to="/events">
            <md-icon>event</md-icon> <span>Events</span>
          </router-link>
        </md-list-item>
        <md-list-item :class="{'md-primary': $route.path === '/profile'}">
          <router-link to="/profile">
            <md-icon>account_circle</md-icon> <span>Profile</span>
          </router-link>
        </md-list-item>
        <md-list-item :class="{'md-primary': $route.path === '/mail'}" >
          <router-link to="/mail">
            <md-icon>mail</md-icon> <span>Mail</span>
          </router-link>
        </md-list-item>
        <md-list-item :class="{'md-primary': $route.path === '/tags'}">
          <router-link to="/tags">
            <md-icon>loyalty</md-icon> <span>Tags</span>
          </router-link>
        </md-list-item>
        <md-list-item :class="{'md-primary': $route.path === '/settings'}">
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
  name: 'app-nav',
  beforeRouteLeave (to, from, next) {
    this.$refs.sidenav.close()
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

// The toolbar is floating and needs somthing to hold the default place
.toolbar-placeholder {
  height: 64px;
}
</style>

// Global
<style lang="scss">
$sidebar-width: 260px;
$sidebar-stay-open: 1281px;

#toolbar-floating-wrapper {
  display: flex; // This is to solve the IE off center toolbar buttons
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
#webapp-toolbar {
  flex: 1;
  color: #fff;

  .sidebar-toggle {
    opacity: 1;
    transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}

#webapp-sidebar {
  .md-sidenav-content {
    width: $sidebar-width;
    display: flex;
    flex-flow: column;
    overflow: auto;
  }
  .md-account-header {
    color: #fff;

    .md-list-text-container > :nth-child(2) {
      color: rgba(#fff, .54);
    }
  }
}

@media (min-width: $sidebar-stay-open) {
  #webapp-sidebar {
    .md-sidenav-content {
      top: 0;
      pointer-events: auto;
      transform: translateZ(0);
      box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
    }
    .md-backdrop {
      opacity: 0;
      pointer-events: none;
    }
  }
  #webapp-toolbar {
    margin-left: $sidebar-width;

    .sidebar-toggle {
      opacity: 0;
      pointer-events: none;
    }
  }
}

// Global
.using-sidebar {
  margin-left: 0;
  transition: margin-left 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);

  @media (min-width: $sidebar-stay-open) {
    margin-left: $sidebar-width;
  }
}

</style>
