<template>
  <div class="landing-page page">
    <div v-for="i in 50">
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
  name: 'landing-page'
}
</script>

<style lang="scss" scoped>
.landing-page {
}
</style>

<style lang="scss">
</style>
