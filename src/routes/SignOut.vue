<template>
  <div class="sign-out">
  </div>
</template>
<script>
export default {
  name: 'sign-out',
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('red')
    })
  }
}
</script>

<style lang="scss" scoped>
.sign-out {
}
</style>

<style lang="scss">
</style>
