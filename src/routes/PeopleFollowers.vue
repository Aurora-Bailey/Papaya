<template>
  <div class="my-followers using-sidebar">
    <div v-for="i in 50">
      My Followers {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      My Followers {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-followers',
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('green')
    })
  }
}
</script>

<style lang="scss" scoped>
.my-followers {
}
</style>

<style lang="scss">
</style>
