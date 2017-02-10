<template>
  <div class="mail using-sidebar">
    <div v-for="i in 50">
      Mail {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      Mail {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'mail',
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('red')
    })
  }
}
</script>

<style lang="scss" scoped>
.mail {
}
</style>

<style lang="scss">
</style>
