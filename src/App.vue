<template>
  <div id="app">

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view class="router-drawer" name="drawer"></router-view>
    <router-view class="router-toolbar" name="toolbar"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex: 1;
  flex-flow: column;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all .4s cubic-bezier(.25,.8,.25,1);
}
</style>
