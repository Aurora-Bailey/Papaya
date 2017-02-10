<template>
  <div class="find-people using-sidebar">
    <div v-for="i in 50">
      Find People {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      Find People {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'find-people',
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('green')
    })
  }
}
</script>

<style lang="scss" scoped>
.find-people {
}
</style>

<style lang="scss">
</style>
