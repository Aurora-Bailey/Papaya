<template>
<div class="setup">
  <div class="narrow-wrapper-480">
    <h1 class="logo">
      <md-icon class="logo-icon" md-src="http://cdn.onlinewebfonts.com/svg/img_479199.svg"></md-icon>
      <span class="logo-text"> Papaya</span>
    </h1>

    <div class="stage stage-picture" v-if="stage === 0">
      <h2 class="title">Profile Picture</h2>
      <div class="picture-preview" :style="{backgroundImage: 'url(' + picture.data + ')'}"></div>
      <md-input-container>
        <label>Upload Picture</label>
        <md-file v-model="picture.input" @change.native="getPicture" accept="image/*"></md-file>
      </md-input-container>
    </div>

    <div class="stage stage-picture" v-if="stage === 1">
      <h2 class="title">Select Tags</h2>
      <div class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec ipsum luctus, interdum felis vel.
      </div>

      <md-chips v-model="tags.list" md-input-placeholder="Add a custom tag">
        <template scope="chip">{{ chip.value }}</template>
      </md-chips>
    </div>

    <div class="stage stage-bio" v-if="stage === 2">
      <h2 class="title">Short Bio</h2>
      <div class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec ipsum luctus, interdum felis vel.
      </div>

      <md-input-container>
        <label>About me</label>
        <md-textarea v-model="bio.text" maxlength="500"></md-textarea>
      </md-input-container>
    </div>

    <div class="stage stage-location" v-if="stage === 3">
      <h2 class="title">Location</h2>
      <div class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec ipsum luctus, interdum felis vel.
      </div>

      <div class="center-button">
        <md-button class="md-raised" @click.native="getLocation">Get My Location</md-button>
      </div>

      <iframe class="location-map" :src="mapURL"></iframe>
    </div>

    <div class="button-bar">
      <md-button class="md-raised" v-if="stage > 0" @click.native="stage--">Back</md-button>
      <md-button class="md-primary md-raised mod-md-text-white right-button" v-if="stage !== 3" @click.native="stage++">Next</md-button>
      <router-link class="right-button" to="/events" v-if="stage === 3"><md-button class="md-primary md-raised mod-md-text-white">Finish Setup</md-button></router-link>
    </div>

  </div>
</div>
</template>
<script>
export default {
  name: 'setup',
  data () {
    return {
      stage: 0,
      picture: {
        input: null,
        data: 'data:image/png;base64,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'
      },
      tags: {
        list: ['Sewing', 'Fishing', 'Gardening', 'Cooking', 'Bowling', 'Writing', 'Reading', 'Hiking', 'Painting', 'Music', 'Genealogy', 'Sleep', 'Camping', 'Motorcycling', 'Skiing', 'Knitting', 'Dance', 'Birdwatching', 'Golf', 'Walking', 'Shoping', 'Collecting', 'Woodworking', 'Photography', 'Model building', 'Crochet', 'Drawing', 'Rail transport modeling', 'Amateur radio', 'Hunting', 'Running', 'Travel']
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
    mapURL: function () {
      return 'https://www.google.com/maps/embed/v1/view?key=' + this.location.googleAPI + '&center=' + this.location.lat + ',' + this.location.long + '&zoom=14&maptype=satellite'
    }
  },
  methods: {
    getPicture: function (event) {
      let input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()

        reader.onload = (e) => {
          this.picture.data = e.target.result
        }

        reader.readAsDataURL(input.files[0])
      }
    },
    getLocation: function (event) {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.location.lat = position.coords.latitude
          this.location.long = position.coords.longitude
        })
      } else {
        /* geolocation IS NOT available */
      }
    },
    send: function () {

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
.description {
  text-align: center;
  color: rgba(0, 0, 0, 0.54);
}

// Stages
.stage {
}
.picture-preview {
  width: 200px;
  height: 200px;
  border-radius: 200px;
  margin: auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.location-map {
  width: 100%;
  height: 480px;
  max-height: 40vh;
  min-height: 150px;
  margin: 10px 0 20px;
}


// stage end

.button-bar {
  text-align: left;
  padding: 10px 0;
  min-height: 68px;
}
.right-button {
  float: right;
}
</style>

<style lang="scss">
</style>
