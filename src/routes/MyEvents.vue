<template>
  <div class="my-events using-sidebar">
    <div v-for="i in 50">
      My Events {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      My Events {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-events'
}
</script>

<style lang="scss" scoped>
.my-events {
}
</style>

<style lang="scss">
</style>
