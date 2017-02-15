<template>
  <div class="profile using-sidebar">
    <div class="gl-narrow-wrapper-600">
      <display-posts></display-posts>
    </div>
  </div>
</template>
<script>
import DisplayPosts from '../components/DisplayPosts'

export default {
  name: 'profile',
  components: {
    DisplayPosts
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('cyan')
    })
  }
}
</script>

<style lang="scss" scoped>
.profile {
  overflow: auto;
}
</style>

<style lang="scss">
</style>
