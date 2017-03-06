<template>
  <div id="app">
    <transition name="splashscreen">
      <splash-screen v-if="$root.SplashScreen"></splash-screen>
    </transition>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view class="router-drawer" name="drawer"></router-view>
    <router-view class="router-toolbar" name="toolbar"></router-view>
    <router-view class="router-tabs" name="tabs"></router-view>
    <router-view></router-view>
    <!-- <transition name="fade">
    </transition> -->
  </div>
</template>

<script>
import SplashScreen from 'components/SplashScreen'

export default {
  name: 'app',
  components: {
    SplashScreen
  }
}
</script>

<style>
#app {
}
</style>
