<template>
  <div class="app-nav">
    <div class="toolbar-placeholder"></div>

    <md-whiteframe id="webapp-toolbar" md-tag="md-toolbar" md-elevation="2">
      <md-button class="md-icon-button sidebar-toggle" @click="$refs.sidenav.toggle()">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title toolbar-title" style="flex: 1">{{$route.name}}</h2>

      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>
      <md-button class="md-icon-button">
        <md-icon>more_vert</md-icon>
      </md-button>
    </md-whiteframe>

    <md-sidenav id="webapp-sidebar" md-theme="white" class="md-left md-fixed" ref="sidenav">
      <md-toolbar class="sidebar-logo md-theme-white">
        <router-link to="/">
          <img src="../assets/logo.png" alt="Vue">
          <!-- <span>Text Logo</span> -->
        </router-link>
      </md-toolbar>

      <md-list>
        <md-list-item @click="$router.push('/hello')" :class="{'md-accent': $route.path === '/hello'}">
          <md-icon>public</md-icon> <span>Hello</span>
        </md-list-item>

        <md-list-item @click="$router.push('/')" :class="{'md-accent': $route.path === '/'}">
          <md-icon>contacts</md-icon> <span>Home</span>
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

#webapp-toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
    left: $sidebar-width;

    .sidebar-toggle {
      display: none;
    }
    .toolbar-title {
      margin-left: 48px;
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
