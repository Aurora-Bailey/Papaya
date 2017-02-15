<template>
  <div class="home using-sidebar">
    <div class="gl-narrow-wrapper-600">
      <display-posts></display-posts>
    </div>
  </div>
</template>
<script>
import DisplayPosts from '../components/DisplayPosts'

export default {
  name: 'home',
  components: {
    DisplayPosts
  },
  data () {
    return {
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('blue')
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  overflow: auto;
}
</style>

<style lang="scss">
</style>
