<template>
  <div class="not-found using-sidebar">
    <!-- <img class="image-found" src="/static/img/narwhal.png"> -->
    <div class="large-text">
      page not found
    </div>
    <div class="medium-text">
      the page you requested does not exist
    </div>
  </div>
</template>
<script>
export default {
  name: 'not-found',
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('purple')
    })
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  padding: 20px 0;
  text-align: center;
}
.image-found {
  width: 300px;
  height: 300px;
}
.large-text {
  font-size: 24px;
  margin: 10px;
}
.medium-text {
  font-size: 16px;
  margin: 10px 20px;
}
</style>

<style lang="scss">
</style>
