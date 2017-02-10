<template>
  <div class="setup using-sidebar">
    <div v-for="i in 50">
      Setup {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      Setup {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'setup',
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('orange')
    })
  }
}
</script>

<style lang="scss" scoped>
.setup {
}
</style>

<style lang="scss">
</style>
