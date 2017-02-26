<template>
<div class="sign-up">
  <div class="gl-narrow-wrapper-480">
    <md-whiteframe class="sign-card">
      <h1 class="logo">
        <md-icon class="logo-icon" md-src="https://cdn.onlinewebfonts.com/svg/img_479199.svg"></md-icon>
        <span class="logo-text"> Papaya</span>
      </h1>
      <h2 class="title">Create Account</h2>
      <form validate id="signup-form" @submit.stop.prevent="sendSignup()">
        <md-input-container :class="{'md-input-invalid': signup.email_fail}">
          <md-icon>mail</md-icon>
          <label>Email</label>
          <md-input required type="text" v-model="signup.email"></md-input>
          <span class="md-error full-icon-offset" v-if="signup.email_fail">{{signup.email_fail}}</span>
        </md-input-container>

        <md-input-container :class="{'md-input-invalid': signup.password_fail}">
          <md-icon>lock</md-icon>
          <label>Password</label>
          <md-input required type="password" v-model="signup.password"></md-input>
          <span class="md-error full-icon-offset" v-if="signup.password_fail">{{signup.password_fail}}</span>
        </md-input-container>

        <md-input-container :class="{'md-input-invalid': signup.password_confirm_fail}">
          <md-icon>lock_outline</md-icon>
          <label>Confirm Password</label>
          <md-input required type="password" v-model="signup.password_confirm"></md-input>
          <span class="md-error full-icon-offset" v-if="signup.password_confirm_fail">{{signup.password_confirm_fail}}</span>
        </md-input-container>

        <div class="gl-center-button">
          <md-button type="submit" class="md-primary md-raised mod-md-text-white">Create account</md-button>
        </div>
      </form>
    </md-whiteframe>
    <div class="gl-center-button">
      <router-link to="/signin"><md-button class="md-primary ">Sign In</md-button></router-link>
    </div>
  </div>
</div>
</template>
<script>
import Firebase from 'firebase'

export default {
  name: 'sign-up',
  data () {
    return {
      signup: {
        email: '',
        email_fail: false,
        password: '',
        password_fail: false,
        password_confirm: '',
        password_confirm_fail: false
      }
    }
  },
  methods: {
    sendSignup: function () {
      this.signup.email_fail = false
      this.signup.password_fail = false
      this.signup.password_confirm_fail = false

      if (this.signup.password !== this.signup.password_confirm) {
        this.signup.password_confirm_fail = 'Password does not match the confirm password!'
        return false
      }

      Firebase.auth().createUserWithEmailAndPassword(this.signup.email, this.signup.password)
        .then(e => {
          // TODO: Secure and validate
          this.$root.$data.user.email = e.email
          Firebase.database().ref('user/' + e.uid).set(JSON.parse(JSON.stringify(this.$root.$data.user)))
        })
        .catch(e => {
          if (e.code === 'auth/invalid-email') this.signup.email_fail = e.message
          if (e.code === 'auth/email-already-in-use') this.signup.email_fail = e.message
          if (e.code === 'auth/weak-password') this.signup.password_fail = e.message
          console.log(e)
        })
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('green')
    })
  }
}
</script>

<style lang="scss" scoped>
.sign-up {
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
