<template>
  <div class="create-events using-sidebar">
    <div class="gl-narrow-wrapper-480">
      <md-whiteframe class="create-card">
        <form @submit.stop.prevent="createEvent">
          <h2 class="md-title">Public</h2>
          <md-subheader>Anyone can see this.</md-subheader>

          <md-input-container>
            <md-icon>title</md-icon>
            <label>Title</label>
            <md-input required v-model="create.title" maxlength="120"></md-input>
          </md-input-container>

          <md-input-container>
            <md-icon>description</md-icon>
            <label>Description</label>
            <md-textarea required v-model="create.description" maxlength="500"></md-textarea>
          </md-input-container>

          <md-input-container>
            <md-icon>location_on</md-icon>
            <label>Location Public</label>
            <md-input :value="$root.user.locationName" disabled></md-input>
          </md-input-container>

          <md-input-container>
            <md-icon>event_seat</md-icon>
            <label>Number of Openings</label>
            <md-select v-model="create.openings" class="icon-offset">
              <md-option v-for="i in 19" :value="i+1">{{i+1}}</md-option>
            </md-select>
          </md-input-container>

          <md-input-container>
            <md-icon>date_range</md-icon>
            <label>Close in {{create.close | timetill}}</label>
            <md-input required v-model="create.close" ref="pick-date"></md-input>
          </md-input-container>

          <md-input-container v-if="showRequireTag">
            <md-icon></md-icon>
            <label>Require Tag</label>
            <md-input v-model="create.requireTag"></md-input>
          </md-input-container>

          <div class="toggle-container">
            <md-icon>loyalty</md-icon>
            <md-switch v-model="showRequireTag" class="md-primary icon-offset">
              <span v-if="showRequireTag">Anyone with a "{{create.requireTag}}" tag can see this.</span>
              <span v-else>Anyone can see this event.</span>
            </md-switch>
          </div>

          <div class="toggle-container">
            <md-icon v-if="create.moderate">lock_outline</md-icon>
            <md-icon v-else>lock_open</md-icon>
            <md-switch v-model="create.moderate" class="md-primary icon-offset">
              <span v-if="create.moderate">Only people you accept can join.</span>
              <span v-else>Anyone can join.</span>
            </md-switch>
          </div>

          <h2 class="md-title">Private</h2>
          <md-subheader>Only people in the event can see this.</md-subheader>

          <md-input-container>
            <md-icon>location_on</md-icon>
            <label>Location Private</label>
            <md-input v-model="create.locationPrivate" maxlength="120"></md-input>
          </md-input-container>

          <md-input-container>
            <md-icon>description</md-icon>
            <label>Details Private</label>
            <md-input v-model="create.detailsPrivate" maxlength="500"></md-input>
          </md-input-container>

          <div class="gl-alert-text" v-if="fail">
            <md-icon>warning</md-icon>
            <span>{{fail}}</span>
          </div>

          <div class="gl-center-button">
            <md-button v-if="!processing" class="md-raised md-primary mod-md-text-white" type="submit">Create Event</md-button>
            <md-spinner v-else md-indeterminate></md-spinner>
          </div>

        </form>
      </md-whiteframe>
    </div>
  </div>
</template>
<script>
import FirebaseSet from '../plugins/FirebaseSet'
import _ from 'lodash'
import Flatpickr from 'flatpickr'
let fp = null
export default {
  name: 'create-events',
  watch: {
    'create.requireTag': _.debounce(function () {
      // Snap the input back to a sanitized format
      this.create.requireTag = FirebaseSet.tagSanitize(this.create.requireTag)
    }, 300)
  },
  methods: {
    createEvent (e) {
      // remove all error
      this.fail = false
      this.processing = true
      // Build location object
      let locObj = {}
      locObj.name = this.$root.user.locationName
      locObj.lat = this.$root.user.locationLat
      locObj.lng = this.$root.user.locationLong

      // Tewak event Object
      if (!this.showRequireTag) this.create.requireTag = '' // reset require tag

      // Firebase
      FirebaseSet.newEvent(this.create, locObj)
      .then(() => {
        setTimeout(() => {
          this.processing = false
          this.$router.push('/events/find')
        }, 1000)
      }, error => {
        this.processing = false
        if (error.message) this.fail = error.message
        console.error(error)
      })
    }
  },
  mounted () {
    fp = new Flatpickr(this.$refs['pick-date'].$el, {dateFormat: 'U000', enableTime: true, altInput: true, defaultDate: Date.now() + 86400000, minDate: Date.now()})
  },
  beforeDestroy () {
    fp.destroy()
  },
  data () {
    return {
      create: {
        title: '',
        description: '',
        detailsPrivate: '',
        // Pull location from user
        locationPrivate: '',
        openings: 5,
        close: '' + (Date.now() + 86400000),
        moderate: false,
        requireTag: ''
      },
      fail: false,
      processing: false,
      showRequireTag: false
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
.create-events {

  .md-title {
    margin: 0;
    padding: 24px 8px 0;
  }
}
.create-card {
  background-color: white;
  padding: 24px;
  margin: 24px 5px 5px;

  .icon-offset {
    margin-left: 12px;
  }
  .toggle-container {
    color: rgba(0,0,0,0.54);
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>

<style lang="scss">
</style>
