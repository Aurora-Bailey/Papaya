<template>
  <div class="setup page using-sidebar">
    <div v-for="i in 50">
      Setup {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      Setup {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'setup'
}
</script>

<style lang="scss" scoped>
.setup {
}
</style>

<style lang="scss">
</style>
