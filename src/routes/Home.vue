<template>
  <div class="home using-sidebar">
    <div v-for="i in 50">
      Home ASDF {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      Home {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
.home {
}
</style>

<style lang="scss">
</style>
