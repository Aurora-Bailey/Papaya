<template>
  <div class="toolbar-main">
    <div class="toolbar-placeholder"></div>

    <div id="toolbar-floating-wrapper">
      <md-whiteframe id="webapp-toolbar" md-tag="md-toolbar" md-elevation="2">
        <md-button class="md-icon-button sidebar-toggle" @click.native="$root.$data.drawerOpen=true">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title toolbar-title" style="flex: 1">{{$route.name}} {{$route.path}}</h2>
      </md-whiteframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toolbar-main'
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

@media (min-width: $sidebar-stay-open) {
  #webapp-toolbar {
    margin-left: $sidebar-width;

    .sidebar-toggle {
      opacity: 0;
      pointer-events: none;
    }
  }
}
</style>
