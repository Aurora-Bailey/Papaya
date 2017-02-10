<template>
  <div class="my-people using-sidebar">
    <div v-for="i in 50">
      My People {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      My People {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-people',
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('green')
    })
  }
}
</script>

<style lang="scss" scoped>
.my-people {
}
</style>

<style lang="scss">
</style>
