<template>
  <div class="settings page using-sidebar">
    <div v-for="i in 50">
      Settings {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      Settings {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'settings'
}
</script>

<style lang="scss" scoped>
.settings {
}
</style>

<style lang="scss">
</style>
