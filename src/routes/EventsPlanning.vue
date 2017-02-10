<template>
  <div class="my-events using-sidebar">
    <div v-for="i in 50">
      My Events {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      My Events {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-events',
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('orange')
    })
  }
}
</script>

<style lang="scss" scoped>
.my-events {
}
</style>

<style lang="scss">
</style>
