<template>
  <div class="tabs-events tabs-placeholder">
    <div id="tabs-floating-wrapper">
      <md-tabs md-centered id="webapp-tabs" class="mod-md-tab-header-white" @change="tabSwitch">
        <md-tab :md-label="tabRoute[0].lable" :md-active="$route.path === tabRoute[0].path"></md-tab>
        <md-tab :md-label="tabRoute[1].lable" :md-active="$route.path === tabRoute[1].path"></md-tab>
        <md-tab :md-label="tabRoute[2].lable" :md-active="$route.path === tabRoute[2].path"></md-tab>
        <md-tab :md-label="tabRoute[3].lable" :md-active="$route.path === tabRoute[3].path"></md-tab>
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
        {lable: 'Create', path: '/events/create'},
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
