<template>
  <div class="find-events using-sidebar">
    <div v-for="i in 50">
      Find Events {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      Find Events {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'find-events',
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
