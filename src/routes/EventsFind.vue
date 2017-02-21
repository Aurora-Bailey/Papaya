<template>
  <div class="find-events using-sidebar">
    <div class="gl-narrow-wrapper-600">
      <display-events></display-events>
    </div>
  </div>
</template>
<script>
import DisplayEvents from '../components/DisplayEvents'

export default {
  name: 'find-events',
  components: {
    DisplayEvents
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('orange')
    })
  }
}
</script>

<style lang="scss" scoped>
.find-events {
}
</style>

<style lang="scss">
</style>
