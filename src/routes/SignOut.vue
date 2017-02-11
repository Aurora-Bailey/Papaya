<template>
  <div class="sign">
    <div v-for="i in 50">
      Sign in/up/out {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      Sign in/up/out {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'sign',
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('red')
    })
  }
}
</script>

<style lang="scss" scoped>
.sign {
}
</style>

<style lang="scss">
</style>
