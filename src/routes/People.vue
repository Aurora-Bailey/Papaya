<template>
  <div class="people page using-sidebar">
    <div v-for="i in 50">
      People {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      People {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'people'
}
</script>

<style lang="scss" scoped>
.people {
}
</style>

<style lang="scss">
</style>
