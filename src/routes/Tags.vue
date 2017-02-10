<template>
  <div class="tags using-sidebar">
    <div v-for="i in 50">
      Tags {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      Tags {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'tags',
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('teal')
    })
  }
}
</script>

<style lang="scss" scoped>
.tags {
}
</style>

<style lang="scss">
</style>
