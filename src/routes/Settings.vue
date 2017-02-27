<template>
  <div class="settings using-sidebar">
    <div class="gl-narrow-wrapper-480">
      <md-whiteframe class="settings-card">

        <md-list class="md-double-line">
          <md-list-item>
            <md-ink-ripple />
            <md-icon class="md-primary">person</md-icon>
            <div class="md-list-text-container">
              <span>{{$root.$data.user.firstName}} {{$root.$data.user.lastName}}</span>
              <span>Name</span>
            </div>
            <md-button class="md-icon-button md-list-action" id="edit-name" @click.native="openDialog('dialog-edit-name')">
              <md-icon>edit</md-icon>
            </md-button>
          </md-list-item>

          <md-list-item class="md-inset">
            <md-ink-ripple />
            <div class="md-list-text-container">
              <span>{{$root.$data.user.displayName}}</span>
              <span>Display Name</span>
            </div>
            <md-button class="md-icon-button md-list-action" id="edit-displayname" @click.native="openDialog('dialog-edit-displayname')">
              <md-icon>edit</md-icon>
            </md-button>
          </md-list-item>

          <md-list-item class="md-inset">
            <md-ink-ripple />
            <div class="md-list-text-container">
              <span></span>
              <span>Profile Picture</span>
            </div>
            <md-button class="md-icon-button md-list-action" id="edit-picture" @click.native="openDialog('dialog-edit-picture')">
              <md-icon>edit</md-icon>
            </md-button>
          </md-list-item>

          <md-list-item class="md-inset">
            <md-ink-ripple />
            <div class="md-list-text-container">
              <span></span>
              <span>Short Bio</span>
            </div>
            <md-button class="md-icon-button md-list-action" id="edit-bio" @click.native="openDialog('dialog-edit-bio')">
              <md-icon>edit</md-icon>
            </md-button>
            <md-divider class="md-inset"></md-divider>
          </md-list-item>

          <md-list-item>
            <md-ink-ripple />
            <md-icon class="md-primary">my_location</md-icon>
            <div class="md-list-text-container">
              <span>{{$root.$data.user.locationName}}</span>
              <span>Location</span>
            </div>
            <md-button class="md-icon-button md-list-action" id="edit-location" @click.native="openDialog('dialog-edit-location')">
              <md-icon>edit</md-icon>
            </md-button>
          </md-list-item>

          <md-list-item class="md-inset">
            <md-ink-ripple />
            <div class="md-list-text-container">
              <span>~{{$root.$data.user.distance}} Miles</span>
              <span>Search Radius</span>
            </div>
            <md-button class="md-icon-button md-list-action" id="edit-distance" @click.native="openDialog('dialog-edit-distance')">
              <md-icon>edit</md-icon>
            </md-button>
            <md-divider class="md-inset"></md-divider>
          </md-list-item>

          <md-list-item>
            <md-ink-ripple />
            <md-icon class="md-primary">email</md-icon>
            <div class="md-list-text-container">
              <span>{{$root.$data.user.email}}</span>
              <span>Email Address</span>
            </div>
            <md-divider class="md-inset"></md-divider>
          </md-list-item>

          <md-list-item>
            <md-ink-ripple />
            <md-icon class="md-primary">lock</md-icon>
            <div class="md-list-text-container">
              <span>************</span>
              <span>Password</span>
            </div>
            <md-button class="md-icon-button md-list-action" id="edit-password" @click.native="openDialog('dialog-edit-password')">
              <md-icon>edit</md-icon>
            </md-button>
          </md-list-item>

          <md-list-item class="md-inset">
            <md-ink-ripple />
            <div class="md-list-text-container">
              <span>Log Out<span>
            </div>
            <md-button class="md-icon-button md-list-action">
              <router-link to="/signout" class="mod-md-link-button">
                <md-icon>exit_to_app</md-icon>
              </router-link>
            </md-button>
          </md-list-item>

        </md-list>

      </md-whiteframe>
    </div>


    <!--Password Dialog-->
    <md-dialog class="md-mod-full-dialog" md-open-from="#edit-password" md-close-to="#edit-password" ref="dialog-edit-password">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">Change Password</h2>
      </md-dialog-title>
      <md-dialog-content>
        <md-input-container>
          <label>Old Password</label>
          <md-input v-model="edit.password.old" type="password"></md-input>
        </md-input-container>

        <md-input-container>
          <label>New Password</label>
          <md-input v-model="edit.password.new" type="password"></md-input>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel('dialog-edit-password')">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendEdit('dialog-edit-password', edit.password)">Change Password</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!--Change Name Dialog-->
    <md-dialog class="md-mod-full-dialog" md-open-from="#edit-name" md-close-to="#edit-name" ref="dialog-edit-name">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">Change Name</h2>
      </md-dialog-title>

      <md-dialog-content>
        <md-input-container>
          <label>First Name</label>
          <md-input v-model="edit.name.first"></md-input>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-content>
        <md-input-container>
          <label>Last Name</label>
          <md-input v-model="edit.name.last"></md-input>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel('dialog-edit-name')">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendEdit('dialog-edit-name', edit.name)">Change</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!--Display Name Dialog-->
    <md-dialog class="md-mod-full-dialog" md-open-from="#edit-displayname" md-close-to="#edit-displayname" ref="dialog-edit-displayname">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">Change Display Name</h2>
      </md-dialog-title>
      <md-dialog-content>
        <md-input-container>
          <label>Display Name</label>
          <md-input v-model="edit.displayname.name"></md-input>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel('dialog-edit-displayname')">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendEdit('dialog-edit-displayname', edit.displayname)">Change</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!--Short Bio Dialog-->
    <md-dialog class="md-mod-full-dialog" md-open-from="#edit-bio" md-close-to="#edit-bio" ref="dialog-edit-bio">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">Update Bio</h2>
      </md-dialog-title>
      <md-dialog-content>
        <md-input-container>
          <label>Short Bio</label>
          <md-textarea v-model="edit.bio.text" style="min-height: 72px;" maxlength="500"></md-textarea>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel('dialog-edit-bio')">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendEdit('dialog-edit-bio', edit.bio)">Update</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!--Location Dialog-->
    <md-dialog class="md-mod-full-dialog" md-open-from="#edit-location" md-close-to="#edit-location" ref="dialog-edit-location">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">Update Location</h2>
      </md-dialog-title>

      <md-dialog-content>
        <div class="gl-center-button">
          <md-button class="md-raised" @click.native="getLocation">Get My Location</md-button>
        </div>

        <iframe class="location-map" :src="mapURL"></iframe>
        <div>{{edit.location.name}}</div>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel('dialog-edit-location')">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendEdit('dialog-edit-location', edit.location)">Update</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!--Location Dialog-->
    <md-dialog class="md-mod-full-dialog" md-open-from="#edit-distance" md-close-to="#edit-distance" ref="dialog-edit-distance">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">Update Search Radius</h2>
      </md-dialog-title>

      <md-dialog-content>
        <div class="gl-center-button">
          <md-button class="md-raised" :class="{'md-primary': edit.distance.distance == 5}" @click.native="edit.distance.distance = 5">~5 Miles</md-button>
          <br>
          <md-button class="md-raised" :class="{'md-primary': edit.distance.distance == 20}" @click.native="edit.distance.distance = 20">~20 Miles</md-button>
          <br>
          <md-button class="md-raised" :class="{'md-primary': edit.distance.distance == 50}" @click.native="edit.distance.distance = 50">~50 Miles</md-button>
        </div>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel('dialog-edit-distance')">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendEdit('dialog-edit-distance', edit.distance)">Update</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!--Location Dialog-->
    <md-dialog class="md-mod-full-dialog" md-open-from="#edit-picture" md-close-to="#edit-picture" ref="dialog-edit-picture">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">Upload New Picture</h2>
      </md-dialog-title>

      <md-dialog-content>
        <!-- <img :src="edit.picture.data_crop" alt=""> -->
        <profile-crop :image="edit.picture.data_raw" @crop="image => { edit.picture.data_crop = image }"></profile-crop>
        <md-input-container>
          <label>Upload Picture</label>
          <md-file v-model="edit.picture.input" @change.native="getPicture" accept="image/*"></md-file>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel('dialog-edit-picture')">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendEdit('dialog-edit-picture', edit.picture)">Upload</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div>
</template>
<script>
import Firebase from 'firebase'
import ProfileCrop from '../components/ProfileCrop'

export default {
  name: 'settings',
  components: {
    ProfileCrop
  },
  methods: {
    sendEdit (ref, data) {
      let cleanData = JSON.parse(JSON.stringify(data))

      if (cleanData.change === 'displayname') {
        // TODO: Secure and validate
        this.$root.$firebaseRefs.user.child('displayName').set(cleanData.name)
        this.cancel(ref)
        return true
      }
      if (cleanData.change === 'name') {
        // TODO: Secure and validate
        this.$root.$firebaseRefs.user.child('firstName').set(cleanData.first)
        this.$root.$firebaseRefs.user.child('lastName').set(cleanData.last)
        this.cancel(ref)
        return true
      }
      if (cleanData.change === 'bio') {
        // TODO: Secure and validate
        this.$root.$firebaseRefs.user.child('bio').set(cleanData.text)
        this.cancel(ref)
        return true
      }
      if (cleanData.change === 'location') {
        // TODO: Secure and validate
        this.$root.$firebaseRefs.user.child('locationName').set(cleanData.name)
        this.$root.$firebaseRefs.user.child('locationLat').set(cleanData.lat)
        this.$root.$firebaseRefs.user.child('locationLong').set(cleanData.long)
        this.cancel(ref)
        return true
      }
      if (cleanData.change === 'distance') {
        // TODO: Secure and validate
        this.$root.$firebaseRefs.user.child('distance').set(cleanData.distance)
        this.cancel(ref)
        return true
      }
      if (cleanData.change === 'password') {
        var user = Firebase.auth().currentUser
        var credential = Firebase.auth.EmailAuthProvider.credential(
            user.email,
            cleanData.old
        )
        user.reauthenticate(credential).then(() => {
          user.updatePassword(cleanData.new).then(() => {
            this.cancel(ref)
            return true
          }, (error) => {
            window.alert(error.message)
            console.log(error)
            return false
          })
        }, (error) => {
          window.alert(error.message)
          console.log(error)
          return false
        })
      }
      if (cleanData.change === 'picture') {

      }

      // TODO: picture, birthday, sex
    },
    getPicture: function (event) {
      // TODO: Does not trigger when the same file is opend twice.
      let input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.edit.picture.data_raw = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    getLocation: function (event) {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.edit.location.name = 'Compute name later.'
          this.edit.location.lat = position.coords.latitude
          this.edit.location.long = position.coords.longitude
        }, (err) => {
          window.alert('Geolocation is not available! ')
          console.log(err)
        })
      } else {
        /* geolocation IS NOT available */
        window.alert('Geolocation is not available!')
      }
    },
    cancel (ref) {
      this.resetEdit()
      this.closeDialog(ref)
    },
    openDialog (ref) {
      this.resetEdit()
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    setEdit () {
      // Reference existing data
      let setAccount = this.$root.$data.user

      return {
        name: {
          change: 'name',
          first: setAccount.firstName,
          last: setAccount.lastName
        },
        distance: {
          change: 'distance',
          distance: setAccount.distance
        },
        picture: {
          change: 'picture',
          input: '',
          data_crop: '',
          data_raw: ''
        },
        location: {
          change: 'location',
          name: setAccount.locationName,
          lat: setAccount.locationLat,
          long: setAccount.locationLong
        },
        bio: {
          change: 'bio',
          text: setAccount.bio
        },
        displayname: {
          change: 'displayname',
          name: setAccount.displayName
        },
        password: {
          change: 'password',
          old: '',
          new: ''
        }
      }
    },
    resetEdit () {
      this.edit = this.setEdit()
    }
  },
  computed: {
    mapURL: function () {
      return 'https://www.google.com/maps/embed/v1/view?key=' + this.googleAPI + '&center=' + this.edit.location.lat + ',' + this.edit.location.long + '&zoom=14&maptype=satellite'
    }
  },
  data () {
    return {
      edit: this.setEdit(),
      googleAPI: 'AIzaSyC_pqSISPg49PEQyz6LTpPyFMomhqzeOT0'
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('purple')
    })
  }
}
</script>

<style lang="scss" scoped>
.settings {
}
.settings-card {
  background-color: white;
  padding: 24px;
  margin: 24px 5px 5px;
}
</style>

<style lang="scss">
</style>
