<template>
  <div class="sign page using-sidebar">
    <div v-for="i in 50">
      Sign in/up/out {{i}}
    </div>
    {{$root.$data.scroll}}
    <div v-for="i in 50">
      Sign in/up/out {{i}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'sign'
}
</script>

<style lang="scss" scoped>
.sign {
}
</style>

<style lang="scss">
</style>
