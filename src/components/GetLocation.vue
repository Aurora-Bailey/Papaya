<template>
  <div class="get-location">
    <div class="gl-alert-text" v-if="location.fail">
      <md-icon>warning</md-icon>
      <span>{{location.fail}}</span>
    </div>
    <div class="gl-center-button">
      <form @submit.stop.prevent="manualLocation">
        <md-input-container :class="{'md-input-invalid': location.fail_search}">
          <label>Enter city name</label>
          <md-input v-model="location.search"></md-input>
          <span class="md-error gl-input-error" v-if="location.fail_search">{{location.fail_search}}</span>
          <md-button class="md-icon-button" type="submit"><md-icon>search</md-icon></md-button>
        </md-input-container>
      </form>
    </div>

    <!-- <iframe class="location-map" :src="mapIFrameURL"></iframe> -->
    <img :src="mapStaticURL" alt="Google Maps">
    <!-- <div>{{location.name}}</div> -->
  </div>
</template>
<script>

export default {
  name: 'get-location',
  mounted () {
    this.$emit('lat', this.location.lat)
    this.$emit('lng', this.location.long)
    this.$emit('name', this.location.name)
    this.autoLocation()
  },
  watch: {
    'location.lat': function () {
      this.$emit('lat', this.location.lat)
    },
    'location.long': function () {
      this.$emit('lng', this.location.long)
    },
    'location.name': function () {
      this.$emit('name', this.location.name)
    }
  },
  methods: {
    autoLocation: function (event) {
      this.location.fail = false
      this.location.fail_search = false
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          // Reverse Geocoding will pull from this location
          this.location.lat = +(Math.round(position.coords.latitude * 100) / 100)
          this.location.long = +(Math.round(position.coords.longitude * 100) / 100)

          // Resolve city name
          this.$http.get(this.reverseGeocodingURL).then(response => {
            if (response.body.status !== 'OK') {
              this.location.name = 'Unknown'
              this.location.fail = response.body.status
              return false
            }
            try {
              let city = response.body.results[0]
              this.location.name = '' + city.address_components[0].long_name + ', ' + city.address_components[2].short_name
              this.location.search = this.location.name
            } catch (error) {
              this.location.name = 'Unknown'
              this.location.fail = 'Unable to resolve city name!'
              console.error(error)
            }
          }, response => {
            this.location.name = 'Unknown'
            if (response.body.status) this.location.fail = response.body.status
            else this.location.fail = 'Failed to load Google Maps API!'
          })
        }, (error) => {
          this.location.fail = 'Geolocation is not available! Try using the the manual search option.'
          console.error(error)
        })
      } else {
        /* geolocation IS NOT available */
        this.location.fail = 'Geolocation is not available! Try using the the manual search option.'
      }
    },
    manualLocation: function (event) {
      this.location.fail = false
      this.location.fail_search = false
      this.$http.get(this.geocodingURL).then(response => {
        if (response.body.status !== 'OK') {
          this.location.fail_search = response.body.status
          return false
        }
        try {
          let city = response.body.results[0]
          this.location.name = '' + city.address_components[0].long_name + ', ' + city.address_components[2].short_name
          this.location.search = this.location.name
          this.location.lat = city.geometry.location.lat
          this.location.long = city.geometry.location.lng
        } catch (error) {
          this.location.fail_search = 'Unable to resolve location!'
          console.error(error)
        }
      }, response => {
        if (response.body.status) this.location.fail_search = response.body.status
        else this.location.fail_search = 'Failed to load Google Maps API!'
      })
    },
    setLocation () {
      // Reference existing data
      let setAccount = this.$root.$data.user

      return {
        search: '',
        name: setAccount.locationName,
        lat: setAccount.locationLat,
        long: setAccount.locationLong,
        fail: false,
        fail_search: false
      }
    },
    resetLocation () {
      this.edit = this.setLocation()
    }
  },
  computed: {
    mapIFrameURL: function () {
      return 'https://www.google.com/maps/embed/v1/view?key=' + this.googleIFrameAPI + '&center=' + this.location.lat + ',' + this.location.long + '&zoom=14&maptype=satellite'
    },
    mapStaticURL: function () {
      return 'https://maps.googleapis.com/maps/api/staticmap?key=' + this.googleStaticAPI + '&center=' + this.location.lat + ',' + this.location.long + '&zoom=14&maptype=hybrid&size=640x360&markers=' + this.location.lat + ',' + this.location.long
    },
    geocodingURL: function () {
      return 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.googleAPI + '&address=' + this.location.search + '&location_type=political'
    },
    reverseGeocodingURL: function () {
      return 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.googleAPI + '&latlng=' + this.location.lat + ',' + this.location.long + '&result_type=political'
    }
  },
  data () {
    return {
      location: this.setLocation(),
      googleIFrameAPI: 'AIzaSyC_pqSISPg49PEQyz6LTpPyFMomhqzeOT0',
      googleStaticAPI: 'AIzaSyBVwyKUZONuIfaQt8io2gd3W1WtpjBUkLg',
      googleAPI: 'AIzaSyBpPBn7foYvT6yus0hh1wOMf7TWKXrdzUo'
    }
  }
}
</script>

<style lang="scss" scoped>
.get-location {
}
</style>

<style lang="scss">
</style>
