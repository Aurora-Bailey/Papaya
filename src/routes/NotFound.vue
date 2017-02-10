<template>
  <div class="not-found using-sidebar">
    Page not found!
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
