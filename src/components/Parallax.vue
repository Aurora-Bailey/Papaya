<template>
  <div class="parallax">
    <section class="parallax_section">
      <div class="parallax_background" :style="{ backgroundImage: 'url(' + imageScaled + ')', bottom: -25 * parallaxDelta  + 'vh', top: -25 * (1 -parallaxDelta)  + 'vh'  }"></div>
      <div class="parallax_text">
        <h2 class="parallax_title">{{title}}</h2>
        <p>
          <slot></slot>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['title', 'image', 'img-mobile'],
  name: 'parallax',
  data () {
    return {
      scrollTop: 0,
      height: 0
    }
  },
  computed: {
    parallaxDelta: function () {
      let bottomOfScreen = this.$root.$data.scroll.top + this.$root.$data.scroll.windowHeight
      let visibleScroll = this.height + this.$root.$data.scroll.windowHeight
      let percent = (1 / visibleScroll) * (bottomOfScreen - this.scrollTop)
      if (percent > 1) percent = 1
      if (percent < 0) percent = 0
      return percent
    },
    imageScaled: function () {
      return (this.$root.$data.scroll.windowWidth > 600 ? this.image : this.imgMobile)
    }
  },
  watch: {
    '$root.$data.scroll.windowHeight': function () {
      this.scrollTop = this.$el.offsetTop
      this.height = this.$el.offsetHeight
    }
  },
  mounted: function () {
    this.scrollTop = this.$el.offsetTop
    this.height = this.$el.offsetHeight
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.parallax_section {
  padding: 25vh 10vw;
  color: white;
  background-color: black;
  position: relative;
  overflow: hidden;
}
.parallax_background {
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: black;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.parallax_text {
  position: relative;
  z-index: 20;
  text-align: center;
  font-size: 18px;
}
.parallax_title {
  font-size: 6vh;
  line-height: 6vh;
}
</style>
