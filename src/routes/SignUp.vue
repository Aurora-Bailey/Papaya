<template>
<div class="sign-up">
  <div class="narrow-wrapper-480">
    <h1 class="logo">
        <md-icon class="logo-icon" md-src="http://cdn.onlinewebfonts.com/svg/img_479199.svg"></md-icon>
        <span class="logo-text"> Papaya</span>
      </h1>
    <h2 class="title">Create Account</h2>
    <form validate id="signup-form" @submit.prevent="sendSignup()">
      <!-- <md-subheader>Account Information</md-subheader> -->

      <md-input-container>
        <md-icon>email</md-icon>
        <label>Email Address</label>
        <md-input required type="email" v-model="signup.email"></md-input>
      </md-input-container>

      <md-input-container>
        <md-icon>perm_identity</md-icon>
        <label>Display Name (optional)</label>
        <md-input type="text" v-model="signup.display_name"></md-input>
      </md-input-container>

      <md-input-container>
        <md-icon>lock_outline</md-icon>
        <label>Password</label>
        <md-input required type="password" v-model="signup.password"></md-input>
      </md-input-container>

      <md-input-container>
        <md-icon>lock_outline</md-icon>
        <label>Confirm Password</label>
        <md-input required type="password" v-model="signup.password_confirm"></md-input>
      </md-input-container>

      <!-- <md-subheader>Personal Information</md-subheader> -->

      <md-input-container>
        <md-icon>face</md-icon>
        <label>First Name</label>
        <md-input required type="text" v-model="signup.first_name"></md-input>
      </md-input-container>

      <md-input-container>
        <md-icon>face</md-icon>
        <label>Last Name</label>
        <md-input required type="text" v-model="signup.last_name"></md-input>
      </md-input-container>

      <div class="field-group">
        <md-icon>cake</md-icon>
        <md-input-container>
          <label for="month">Month</label>
          <md-select required name="month" id="signup-month" v-model="signup.birth_month">
            <md-option value="1">Jan</md-option>
            <md-option value="2">Feb</md-option>
            <md-option value="3">Mar</md-option>
            <md-option value="4">Apr</md-option>
            <md-option value="5">May</md-option>
            <md-option value="6">Jun</md-option>
            <md-option value="7">Jul</md-option>
            <md-option value="8">Aug</md-option>
            <md-option value="9">Sep</md-option>
            <md-option value="10">Oct</md-option>
            <md-option value="11">Nov</md-option>
            <md-option value="12">Dec</md-option>
          </md-select>
        </md-input-container>

        <md-input-container>
          <label for="day">Day</label>
          <md-select required name="day" id="day" v-model="signup.birth_day">
            <md-option :value="index" v-for="index in 32">{{index}}</md-option>
          </md-select>
        </md-input-container>

        <md-input-container>
          <label for="year">Year</label>
          <md-select required name="year" id="year" v-model="signup.birth_year">
            <md-option :value="new Date().getFullYear() - index - 12" v-for="index in 120">{{new Date().getFullYear() - index - 12}}</md-option>
          </md-select>
        </md-input-container>
      </div>
      <md-input-container>
        <md-icon>wc</md-icon>
        <div class="radio-container">
          <md-radio required v-model="signup.sex" name="signup-sex" class="md-primary" md-value="0">Female</md-radio>
          <md-radio required v-model="signup.sex" name="signup-sex" class="md-primary" md-value="1">Male</md-radio>
        </div>
      </md-input-container>
    </form>
    <div class="center-button">
      <router-link to="/setup"><md-button class="md-primary md-raised">Create account</md-button></router-link>
    </div>
    <div class="hr-or"></div>
    <div class="center-button">
      <router-link to="/signin"><md-button class="md-primary md-raised">Sign In</md-button></router-link>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'sign-up',
  data () {
    return {
      signup: {
        email: '',
        display_name: '',
        password: '',
        password_confirm: '',
        first_name: '',
        last_name: '',
        birth_month: '',
        birth_day: '',
        birth_year: '',
        sex: ''
      }
    }
  },
  methods: {
    sendSignup: function () {

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
.sign-up {
  padding: 20px 10px;
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
.center-button {
  text-align: center;
  padding: 10px 0;
}

// Birthday inputs
.field-group {
  display: flex;

  .md-icon {
    margin: 20px auto 4px;
    color: rgba(0, 0, 0, 0.54);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .md-input-container {
    flex: 1;
    margin-left: 12px
  }

  .md-select {
    min-width: 0;
  }
}
</style>

<style lang="scss">
#signup-form {
  .radio-container {
    flex:1;
  }
  .md-radio {
    margin: 8px 8px 8px 12px;
  }
  .md-radio-label {
    position: relative;
    top: 0;
  }
}
</style>
