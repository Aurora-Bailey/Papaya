<template>
  <div class="tabs-events">
    <div class="tabs-placeholder"></div>

    <div id="tabs-floating-wrapper">
      <md-tabs md-centered id="webapp-tabs">
        <md-tab id="movies" md-label="Movies">
        </md-tab>

        <md-tab id="music" md-label="Music">
        </md-tab>

        <md-tab id="books" md-label="Books">
        </md-tab>

        <md-tab id="pictures" md-label="Pictures" md-tooltip="This is the pictures tab!">
      </md-tab>
    </md-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs-events'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

// The tabs is floating and needs somthing to hold the default place
.tabs-placeholder {
  height: 48px;
}
</style>

// Global
<style lang="scss">
$sidebar-width: 260px;
$sidebar-stay-open: 1281px;

#tabs-floating-wrapper {
  display: flex; // This is to solve the IE off center tabs buttons
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
}
#webapp-tabs {
  flex: 1;
  //color: #fff;

  .md-tabs-content {
    display: none;
  }
}

@media (min-width: $sidebar-stay-open) {
  #webapp-tabs {
    margin-left: $sidebar-width;
  }
}
</style>
