<template>
  <div id="app">

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view class="router-drawer" name="drawer"></router-view>
    <router-view class="router-toolbar" name="toolbar"></router-view>
    <router-view class="router-tabs" name="tabs"></router-view>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
}
</style>
