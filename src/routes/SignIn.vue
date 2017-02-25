<template>
<div class="sign-in">
  <div class="gl-narrow-wrapper-480">
    <md-whiteframe class="sign-card">
      <h1 class="logo">
        <md-icon class="logo-icon" md-src="http://cdn.onlinewebfonts.com/svg/img_479199.svg"></md-icon>
        <span class="logo-text"> Papaya</span>
      </h1>
      <h2 class="title">Sign In</h2>
      <form validate id="login-form" @submit.stop.prevent="sendLogin()">
        <md-input-container :class="{'md-input-invalid': login.email_fail}">
          <md-icon>mail</md-icon>
          <label>Email</label>
          <md-input required type="text" v-model="login.email"></md-input>
          <span class="md-error full-icon-offset" v-if="login.email_fail">{{login.email_fail}}</span>
        </md-input-container>

        <md-input-container :class="{'md-input-invalid': login.password_fail}">
          <md-icon>lock_outline</md-icon>
          <label>Password</label>
          <md-input required type="password" v-model="login.password"></md-input>
          <span class="md-error full-icon-offset" v-if="login.password_fail">{{login.password_fail}}</span>
        </md-input-container>

        <div class="gl-center-button">
          <md-button type="submit" class="md-primary md-raised">Sign In</md-button>
        </div>
      </form>
    </md-whiteframe>
    <div class="gl-center-button">
      <router-link to="/signup"><md-button class="md-primary">Create account</md-button></router-link>
    </div>
  </div>
</div>
</template>
<script>
import Firebase from 'firebase'

export default {
  name: 'sign-in',
  data () {
    return {
      login: {
        email: '',
        email_fail: false,
        password: '',
        password_fail: false
      }
    }
  },
  methods: {
    sendLogin: function () {
      this.login.email_fail = false
      this.login.password_fail = false

      Firebase.auth().signInWithEmailAndPassword(this.login.email, this.login.password)
        .then(e => {
          this.$router.push('/home')
        })
        .catch(e => {
          if (e.code === 'auth/user-not-found') this.login.email_fail = e.message
          if (e.code === 'auth/invalid-email') this.login.email_fail = e.message
          if (e.code === 'auth/wrong-password') this.login.password_fail = e.message
        })
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
  .md-error {
    text-align: center;
  }
}
.sign-card {
  background-color: white;
  padding: 24px;
  margin: 24px 5px 5px;
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
.full-icon-offset {
  margin-left: 36px;
}
</style>

<style lang="scss">
</style>
