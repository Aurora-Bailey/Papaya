<template>
  <div class="toolbar-landing">
    <div class="floating-wrapper">
      <md-whiteframe class="toolbar-wrapper" md-elevation="2" :style="{height: toolbarScrollHeight + 'px'}">
        <div class="toolbar-picture" :style="{opacity: toolbarScrollDelta / 2}"></div>
        <div class="toolbar-logo" :style="{fontSize: toolbarLogoFontSize + 'px', lineHeight: toolbarScrollHeight + 'px', right: (1 - toolbarScrollDelta) * 100 + '%'}">
          <md-icon class="logo-icon" md-src="http://cdn.onlinewebfonts.com/svg/img_479199.svg" :style="{height: toolbarLogoFontSize + 'px', width: toolbarLogoFontSize + 'px'}"></md-icon>
          <span class="logo-text"> Papaya</span>
        </div>
        <div class="toolbar-buttons">
          <router-link to="/sign">
            <md-button md-theme="white" class="md-primary">Sign Up</md-button>
          </router-link>

        </div>
      </md-whiteframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toolbar-landing',
  data () {
    return {
      toolbarMinHeight: 64
    }
  },
  computed: {
    toolbarLogoFontSize: function () {
      let flexHeight = this.$root.$data.scroll.windowHeight / 16
      return 24 + (this.toolbarScrollDelta * flexHeight)
    },
    toolbarScrollHeight: function () {
      let winHalf = this.$root.$data.scroll.windowHeight / 2
      let flexHeight = winHalf - this.toolbarMinHeight
      return this.toolbarMinHeight + (this.toolbarScrollDelta * flexHeight)
    },
    toolbarScrollDelta: function () {
      let winHalf = this.$root.$data.scroll.windowHeight / 2
      let flexHeight = winHalf - this.toolbarMinHeight
      let percent = 1 / flexHeight * this.$root.$data.scroll.top
      return 1 - (percent > 1 ? 1 : percent)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.toolbar-landing {
  height: 50vh;
}

.floating-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.toolbar-wrapper {
  background-color: black;
  color: white;
  position: relative;
  z-index: 1000;
}
.toolbar-picture {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  pointer-events: none;
  margin: auto;
  background-color: black;
  background-image: url('../assets/cityscape.jpg');
  background-position: center;
  background-size: cover;
}
.toolbar-logo {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3000;
  text-align: center;
  padding: 0 24px;
  white-space: nowrap;
  pointer-events: none;

  .logo-text {
    vertical-align: middle;
  }
  .logo-icon {
    vertical-align: middle;
  }
}
.toolbar-buttons {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 4000;

  .md-button {
    margin: 14px;
  }
}
</style>
