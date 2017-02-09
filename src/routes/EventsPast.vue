<template>
  <div class="past-events using-sidebar">
    <div v-for="i in 50">
      Past Events {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      Past Events {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'past-events'
}
</script>

<style lang="scss" scoped>
.past-events {
}
</style>

<style lang="scss">
</style>
