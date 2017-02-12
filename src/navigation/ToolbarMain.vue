<template>
  <div class="toolbar-main toolbar-placeholder">
    <div id="toolbar-floating-wrapper">
      <md-whiteframe id="webapp-toolbar" md-tag="md-toolbar" md-elevation="2">
        <md-button class="md-icon-button sidebar-toggle" @click.native="$root.$data.drawerOpen=true">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title toolbar-title" style="flex: 1">{{$route.name}}</h2>
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
