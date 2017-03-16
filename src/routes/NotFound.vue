<template>
  <div class="not-found using-sidebar">
    <div class="gl-large-center-text">
      <md-icon>search</md-icon>
      <span>We've searched, but found nothing!</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'not-found',
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('purple')
    })
  }
}
</script>

<style lang="scss" scoped>
.not-found {
}
</style>

<style lang="scss">
</style>
