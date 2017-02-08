<template>
  <div class="profile using-sidebar">
    <div v-for="i in 50">
      Profile {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      Profile {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'profile'
}
</script>

<style lang="scss" scoped>
.profile {
}
</style>

<style lang="scss">
</style>
