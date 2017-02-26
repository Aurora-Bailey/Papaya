<template>
  <div class="sign-out">
  </div>
</template>
<script>
import Firebase from 'firebase'
export default {
  name: 'sign-out',
  beforeCreate () {
    Firebase.auth().signOut()
  }/*,
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('red')
    })
  } */
}
</script>

<style lang="scss" scoped>
.sign-out {
}
</style>

<style lang="scss">
</style>
