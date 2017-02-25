<template>
  <div class="sign-out">
  </div>
</template>
<script>
import Firebase from 'firebase'
export default {
  name: 'sign-out',
  beforeRouteEnter (to, from, next) {
    Firebase.auth().signOut()
    next((vm) => {
      vm.$material.setCurrentTheme('red')
    })
  }
}
</script>

<style lang="scss" scoped>
.sign-out {
}
</style>

<style lang="scss">
</style>
