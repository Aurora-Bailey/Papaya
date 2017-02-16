<template>
<div class="sign-in">
  <div class="gl-narrow-wrapper-480">
    <md-whiteframe class="sign-form-container">
      <h1 class="logo">
        <md-icon class="logo-icon" md-src="http://cdn.onlinewebfonts.com/svg/img_479199.svg"></md-icon>
        <span class="logo-text"> Papaya</span>
      </h1>
      <h2 class="title">Sign In</h2>
      <form validate id="login-form" @submit.prevent="sendLogin()">
        <md-input-container>
          <md-icon>mail</md-icon>
          <label>Email</label>
          <md-input required type="text" v-model="login.email"></md-input>
        </md-input-container>

        <md-input-container>
          <md-icon>lock_outline</md-icon>
          <label>Password</label>
          <md-input required type="password" v-model="login.password"></md-input>
        </md-input-container>
      </form>
      <div class="gl-center-button">
        <router-link to="/home"><md-button class="md-primary md-raised">Sign In</md-button></router-link>
      </div>
    </md-whiteframe>
    <div class="gl-center-button">
      <router-link to="/signup"><md-button class="md-primary">Create account</md-button></router-link>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'sign-in',
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    sendLogin: function () {

    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('blue')
    })
  }
}
</script>

<style lang="scss" scoped>
.sign-in {
  padding: 24px 5px;
}
.sign-form-container {
  background-color: white;
  padding: 24px;
}
.logo {
  text-align: center;
  font-size: 48px;
  line-height: 48px;
  vertical-align: middle;
  .md-icon {
    width: 48px;
    height: 48px;
    vertical-align: middle;
  }
}
.title {
  text-align: center;
  color: rgba(0, 0, 0, 0.54);
}
</style>

<style lang="scss">
</style>
