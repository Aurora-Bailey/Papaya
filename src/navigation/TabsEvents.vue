<template>
  <div class="tabs-events">
    <div class="tabs-placeholder"></div>

    <div id="tabs-floating-wrapper">
      <md-tabs md-centered id="webapp-tabs" @change="tabSwitch">
        <md-tab :md-label="tabRoute[0].lable" :md-active="$route.path === tabRoute[0].path"></md-tab>
        <md-tab :md-label="tabRoute[1].lable" :md-active="$route.path === tabRoute[1].path"></md-tab>
        <md-tab :md-label="tabRoute[2].lable" :md-active="$route.path === tabRoute[2].path"></md-tab>
      </md-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs-events',
  data () {
    return {
      tabRoute: [
        {lable: 'Find', path: '/events/find'},
        {lable: 'Planning', path: '/events/planning'},
        {lable: 'Past', path: '/events/past'}
      ]
    }
  },
  methods: {
    tabSwitch: function (e) {
      if (this.$route.path !== this.tabRoute[e].path) {
        this.$router.push(this.tabRoute[e].path)
      }
    }
  }
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
