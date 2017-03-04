<template>
<div class="setup">
  <div class="gl-narrow-wrapper-480">
    <md-whiteframe class="sign-card">
      <h1 class="logo">
        <md-icon class="logo-icon" md-src="https://cdn.onlinewebfonts.com/svg/img_479199.svg"></md-icon>
        <span class="logo-text"> Papaya</span>
      </h1>

      <!-- Set Picture -->
      <div class="stage stage-picture" v-if="stage === 0">
        <h2 class="title">Profile Picture</h2>
        <div class="gl-alert-text" v-if="picture.fail">
          <md-icon>warning</md-icon>
          <span>{{picture.fail}}</span>
        </div>
        <!-- <img :src="picture.data_crop" alt=""> -->
        <profile-crop :image="picture.data_raw" @crop="image => { picture.data_crop = image }"></profile-crop>
        <md-input-container>
          <label>Upload Picture</label>
          <md-file v-model="picture.input" @change.native="getPicture" accept="image/*"></md-file>
        </md-input-container>
        <div class="gl-center-button">
          <md-button class="md-raised md-primary mod-md-text-white" @click.native="updatePicture">Set Picture</md-button>
        </div>
      </div>

      <!-- Set Name/Birthday/Sex -->
      <div class="stage stage-bio" v-if="stage === 1">
        <h2 class="title">About Me</h2>
        <!-- <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec ipsum luctus, interdum felis vel.
        </div> -->

        <div class="gl-alert-text" v-if="person.fail">
          <md-icon>warning</md-icon>
          <span>{{person.fail}}</span>
        </div>
        <md-input-container :class="{'md-input-invalid': person.fail_first_name}">
          <label>First Name</label>
          <md-input v-model="person.first_name"></md-input>
          <span class="md-error gl-input-error" v-if="person.fail_first_name">{{person.fail_first_name}}</span>
        </md-input-container>

        <md-input-container :class="{'md-input-invalid': person.fail_last_name}">
          <label>Last Name</label>
          <md-input v-model="person.last_name"></md-input>
          <span class="md-error gl-input-error" v-if="person.fail_last_name">{{person.fail_last_name}}</span>
        </md-input-container>

        <md-input-container :class="{'md-input-invalid': person.fail_birthday}">
          <label>Birthday</label>
          <md-input v-model="person.birthday"></md-input>
          <span class="md-error gl-input-error" v-if="person.fail_birthday">{{person.fail_birthday}}</span>
        </md-input-container>

        <div>
          <md-radio v-model="person.sex" name="person-sex" class="md-primary" md-value="female">Female</md-radio>
          <md-radio v-model="person.sex" name="person-sex" class="md-primary" md-value="male">Male</md-radio>
          <md-radio v-model="person.sex" name="person-sex" class="md-primary" md-value="na">Other</md-radio>
          <div class="md-error gl-input-error" v-if="person.fail_sex">{{person.fail_sex}}</div>
        </div>

        <div class="gl-center-button">
          <md-button class="md-raised md-primary mod-md-text-white" @click.native="updatePerson">Set Info</md-button>
        </div>
      </div>

      <!-- Set Location -->
      <div class="stage stage-picture" v-if="stage === 2">
        <h2 class="title">Select Tags</h2>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec ipsum luctus, interdum felis vel.
        </div>

        <md-chips v-model="tags.list" md-input-placeholder="Add a custom tag">
          <template scope="chip">{{ chip.value }}</template>
        </md-chips>
      </div>

      <div class="stage stage-location" v-if="stage === 3">
        <h2 class="title">Location</h2>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec ipsum luctus, interdum felis vel.
        </div>

        <div class="gl-center-button">
          <md-button class="md-raised" @click.native="getLocation">Get My Location</md-button>
        </div>

        <iframe class="location-map" :src="mapURL"></iframe>
      </div>
    </md-whiteframe>

  </div>
</div>
</template>
<script>
import FirebaseSet from '../plugins/FirebaseSet'
import ProfileCrop from '../components/ProfileCrop'

export default {
  name: 'setup',
  components: {
    ProfileCrop
  },
  data () {
    return {
      stage: 0,
      picture: {
        input: '',
        data_crop: '',
        data_raw: '/static/img/profile_avatar.png',
        progress: 0,
        fail: false
      },
      person: {
        first_name: '',
        last_name: '',
        birthday: null,
        sex: '',
        fail_first_name: false,
        fail_last_name: false,
        fail_birthday: false,
        fail_sex: false,
        fail: false
      },
      tags: {
        list: ['Fishing', 'Gardening', 'Cooking', 'Bowling', 'Writing', 'Reading', 'Hiking', 'Painting', 'Music', 'Genealogy', 'Sleep', 'Camping', 'Motorcycling', 'Skiing', 'Knitting', 'Dance', 'Birdwatching', 'Golf', 'Walking', 'Shoping', 'Collecting', 'Woodworking', 'Photography', 'Model building', 'Crochet', 'Drawing', 'Rail transport modeling', 'Amateur radio', 'Hunting', 'Running', 'Travel']
      },
      bio: {
        text: ''
      },
      location: {
        lat: -27.1367,
        long: -109.2797,
        googleAPI: 'AIzaSyC_pqSISPg49PEQyz6LTpPyFMomhqzeOT0'
      }
    }
  },
  computed: {
    mapURL () {
      return 'https://www.google.com/maps/embed/v1/view?key=' + this.location.googleAPI + '&center=' + this.location.lat + ',' + this.location.long + '&zoom=14&maptype=satellite'
    }
  },
  methods: {
    updatePicture () {
      this.picture.fail = false
      FirebaseSet.profilePicture(this.picture.data_crop)
      .then(() => {
        this.stage++
      }, error => {
        this.picture.fail = error.message
      })
    },
    updatePerson () {
      this.person.fail_first_name = false
      this.person.fail_last_name = false
      this.person.fail_birthday = false
      this.person.fail_sex = false
      this.person.fail = false

      FirebaseSet.nameBirthdaySex(this.person.first_name, this.person.last_name, this.person.birthday, this.person.sex)
      .then(() => {
        this.stage++
      }, error => {
        console.log(error)
        if (error.input === 1) this.person.fail_first_name = error.message
        else if (error.input === 2) this.person.fail_last_name = error.message
        else if (error.input === 3) this.person.fail_birthday = error.message
        else if (error.input === 4) this.person.fail_sex = error.message
        else this.person.fail = error.message
      })
    },
    getPicture (event) {
      // TODO: Does not trigger when the same file is opend twice.
      let input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.picture.data_raw = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    getLocation (event) {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.location.lat = position.coords.latitude
          this.location.long = position.coords.longitude
        }, (error) => {
          window.alert('Geolocation is not available! ')
          console.error(error)
        })
      } else {
        /* geolocation IS NOT available */
        window.alert('Geolocation is not available!')
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('orange')
    })
  }
}
</script>

<style lang="scss" scoped>
.setup {
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
.description {
  text-align: center;
  color: rgba(0, 0, 0, 0.54);
}

// Stages
.stage {
}
</style>

<style lang="scss">
</style>
