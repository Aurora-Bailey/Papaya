<template>
  <div class="app-nav">
    <div class="toolbar-placeholder"></div>

    <div id="toolbar-floating-wrapper">
      <md-whiteframe id="webapp-toolbar" md-tag="md-toolbar" md-elevation="2">
        <md-button class="md-icon-button sidebar-toggle" @click="$refs.sidenav.toggle()">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title toolbar-title" style="flex: 1">{{$route.name}}</h2>

        <router-link class="md-button md-icon-button" to="/mail">
          <md-icon>mail</md-icon>
        </router-link>

        <md-menu md-size="4" md-direction="bottom left">
          <md-button md-menu-trigger class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>

          <md-menu-content>
            <div class="author-card">
              <md-avatar class="md-large">
                <img src="https://placeimg.com/300/300/people/3" alt="Marcos Moura">
              </md-avatar>

              <div class="author-card-info">
                <span>Marcos Moura</span>
                <div class="author-card-links">
                  <router-link to="/profile">View Profile</router-link>
                </div>
              </div>
            </div>

            <md-menu-item>
              <router-link to="/my-people">
                <md-icon>group</md-icon>
                <span>My People</span>
              </router-link>
            </md-menu-item>
            <md-menu-item>
              <router-link to="/settings">
                <md-icon>settings</md-icon>
                <span>Settings</span>
              </router-link>
            </md-menu-item>
            <md-menu-item>
              <router-link to="/login/logout">
                <md-icon>power_settings_new</md-icon>
                <span>Log Out</span>
              </router-link>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-whiteframe>
    </div>

    <md-sidenav id="webapp-sidebar" md-theme="white" class="md-left md-fixed" ref="sidenav">
      <md-toolbar class="sidebar-logo md-theme-white">
        <router-link to="/">
          <img src="../assets/logo.png" alt="Vue">
          <!-- <span>Text Logo</span> -->
        </router-link>
      </md-toolbar>

      <md-list>
        <md-list-item :class="{'md-accent': $route.path === '/'}" >
          <router-link to="/">
            <md-icon>home</md-icon> <span>Home</span>
          </router-link>
        </md-list-item>
        <md-list-item :class="{'md-accent': $route.path === '/people'}">
          <router-link to="/people">
            <md-icon>person_add</md-icon> <span>People</span>
          </router-link>
        </md-list-item>
        <md-list-item :class="{'md-accent': $route.path === '/events'}">
          <router-link  to="/events">
            <md-icon>event</md-icon> <span>Events</span>
          </router-link>
        </md-list-item>
        <md-list-item :class="{'md-accent': $route.path === '/my-events'}">
          <router-link to="/my-events">
            <md-icon>event_available</md-icon> <span>My Events</span>
          </router-link>
        </md-list-item>
        <md-list-item :class="{'md-accent': $route.path === '/tags'}">
          <router-link to="/tags">
            <md-icon>loyalty</md-icon> <span>Tags</span>
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


.author-card {
  padding: 8px 16px;
  display: flex;
  align-items: center;

  .md-avatar {
    margin-right: 16px;
  }

  .author-card-info {
    display: flex;
    flex-flow: column;
    flex: 1;
  }

  span {
    font-size: 16px;
  }

  .author-card-links {
    display: flex;

    a + a {
      margin-left: 8px;
    }
  }
}

#toolbar-floating-wrapper {
  display: flex; // This is to solve the IE off center toolbar buttons
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
#webapp-toolbar {
  flex: 1;

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
    overflow: hidden;
  }
  .sidebar-logo {
    min-height: 172px;
    border-bottom:1px solid rgba(0,0,0,.12);
    font-size: 24px;
  }
  .sidebar-logo img {
      width: 160px;
      margin-bottom: 16px;
  }
  .sidebar-logo a {
      width: 100%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      color: inherit;
      text-decoration: none;
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
