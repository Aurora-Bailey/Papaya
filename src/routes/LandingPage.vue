<template>
  <div class="landing-page">
    <section class="full-section">
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>Pellentesque lacinia magna sem, a mollis augue dignissim tempor. Maecenas aliquet erat turpis, non efficitur mauris vulputate ac. Phasellus tincidunt velit in facilisis dignissim. Praesent tempor suscipit dui. Integer eget nulla est. Suspendisse sagittis molestie pretium. Aliquam erat volutpat. Maecenas consectetur arcu sed lacinia malesuada. Nulla vestibulum tortor maximus quam pellentesque posuere.</p>
    </section>

    <parallax title="Lorem ipsum dolor sit amet" image="/static/img/catan.jpg" img-mobile="/static/img/catan_600.jpg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae fringilla justo. Quisque pulvinar mollis.
      <div class="gl-center-button"><router-link to="/signup"><md-button class="md-raised md-primary">Sign Up</md-button></router-link></div>
    </parallax>

    <section class="full-section">
      <md-layout md-gutter="40">
        <md-layout style="flex: 1;" md-flex-xlarge="50" md-flex-large="50" md-flex-medium="100" md-flex-small="100" md-flex-xsmall="100">
          <div class="split-section">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Pellentesque lacinia magna sem, a mollis augue dignissim tempor. Maecenas aliquet erat turpis, non efficitur mauris vulputate ac. Phasellus tincidunt velit in facilisis dignissim. Praesent tempor suscipit dui. Integer eget nulla est. Suspendisse sagittis molestie pretium. Aliquam erat volutpat. Maecenas consectetur arcu sed lacinia malesuada. Nulla vestibulum tortor maximus quam pellentesque posuere.</p>
          </div>
        </md-layout>
        <md-layout style="flex: 1;" md-flex-xlarge="50" md-flex-large="50" md-flex-medium="100" md-flex-small="100" md-flex-xsmall="100">
          <div class="split-section">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Pellentesque lacinia magna sem, a mollis augue dignissim tempor. Maecenas aliquet erat turpis, non efficitur mauris vulputate ac. Phasellus tincidunt velit in facilisis dignissim. Praesent tempor suscipit dui. Integer eget nulla est. Suspendisse sagittis molestie pretium. Aliquam erat volutpat. Maecenas consectetur arcu sed lacinia malesuada. Nulla vestibulum tortor maximus quam pellentesque posuere.</p>
          </div>
        </md-layout>
      </md-layout>
    </section>

    <parallax title="Lorem ipsum dolor sit amet" image="/static/img/hiking.jpg" img-mobile="/static/img/hiking_600.jpg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae fringilla justo. Quisque pulvinar mollis.
      <div class="gl-center-button"><router-link to="/signup"><md-button class="md-raised md-primary">Sign Up</md-button></router-link></div>
    </parallax>

    <footer class="landing-footer">
      <span>Papaya © 2017</span>
    </footer>
  </div>
</template>
<script>
import Parallax from '../components/Parallax'

export default {
  name: 'landing-page',
  components: { Parallax },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('blue')
    })
  }
}
</script>

<style lang="scss" scoped>
.landing-page {
}

.full-section {
  padding: 25vh 10vw;
  background-color: white;
}

.split-section {

}

.landing-footer {
  text-align: center;
  color: white;
  background-color: black;
  padding: 5vh 0;
}
</style>
