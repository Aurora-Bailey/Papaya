<template>
  <div class="landing-page">
    <div v-for="i in 50">
      {{$root.$data.scroll.windowHeight}}
      Landing Page {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      Landing Page {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'landing-page',
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('blue')
    })
  }
}
</script>

<style lang="scss" scoped>
.landing-page {
}
</style>

<style lang="scss">
</style>
