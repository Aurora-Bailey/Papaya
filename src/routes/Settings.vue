<template>
  <div class="settings using-sidebar">
    <div class="gl-narrow-wrapper-480">
      <md-whiteframe class="settings-card">

        <h2 class="md-title settings-title">Core Settings</h2>

        <md-list class="md-double-line">
          <md-list-item @click.native="openDialog('dialog-edit-name')">
            <md-ink-ripple />
            <md-icon class="md-primary" id="edit-name">face</md-icon>
            <div class="md-list-text-container">
              <span>{{$root.$data.user.firstName}} {{$root.$data.user.lastName}}</span>
              <span>Name</span>
            </div>
          </md-list-item>

          <md-list-item @click.native="openDialog('dialog-edit-displayname')">
            <md-ink-ripple />
            <md-icon class="md-primary" id="edit-displayname">person</md-icon>
            <div class="md-list-text-container">
              <span>{{$root.$data.user.displayName}}</span>
              <span>Display Name</span>
            </div>
          </md-list-item>

          <md-list-item @click.native="openDialog('dialog-edit-picture')">
            <md-ink-ripple />
            <md-icon class="md-primary" id="edit-picture">photo</md-icon>
            <div class="md-list-text-container">
              <span></span>
              <span>Profile Picture</span>
            </div>
          </md-list-item>

          <md-list-item @click.native="openDialog('dialog-edit-bio')">
            <md-ink-ripple />
            <md-icon class="md-primary" id="edit-bio">subject</md-icon>
            <div class="md-list-text-container">
              <span>{{$root.$data.user.bio}}</span>
              <span>Short Bio</span>
            </div>
            <md-divider class="md-inset"></md-divider>
          </md-list-item>

          <md-list-item @click.native="openDialog('dialog-edit-location')">
            <md-ink-ripple />
            <md-icon class="md-primary" id="edit-location">my_location</md-icon>
            <div class="md-list-text-container">
              <span>{{$root.$data.user.locationName}}</span>
              <span>Location</span>
            </div>
          </md-list-item>

          <md-list-item @click.native="openDialog('dialog-edit-distance')">
            <md-ink-ripple />
            <md-icon class="md-primary" id="edit-distance">directions_run</md-icon>
            <div class="md-list-text-container">
              <span>~{{$root.$data.user.distance}} Miles</span>
              <span>Search Radius</span>
            </div>
            <md-divider class="md-inset"></md-divider>
          </md-list-item>

          <md-list-item @click.native="openDialog('dialog-edit-email')">
            <md-ink-ripple />
            <md-icon class="md-primary" id="edit-email">email</md-icon>
            <div class="md-list-text-container">
              <span>{{$root.$data.user.email}}</span>
              <span>Email Address</span>
            </div>
          </md-list-item>

          <md-list-item @click.native="openDialog('dialog-edit-password')">
            <md-ink-ripple />
            <md-icon class="md-primary" id="edit-password">lock</md-icon>
            <div class="md-list-text-container">
              <span>************</span>
              <span>Password</span>
            </div>
          </md-list-item>

          <md-list-item @click.native="$router.push('/signout')">
            <md-ink-ripple />
            <md-icon class="md-primary">exit_to_app</md-icon>
            <div class="md-list-text-container">
              <span>Log Out<span>
            </div>
          </md-list-item>

        </md-list>

      </md-whiteframe>
    </div>


    <!--Password Dialog-->
    <md-dialog class="mod-md-full-dialog" md-open-from="#edit-password" md-close-to="#edit-password" ref="dialog-edit-password">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">Change Password</h2>
      </md-dialog-title>
      <md-dialog-content>
        <div class="gl-alert-text" v-if="edit.password.fail">
          <md-icon>warning</md-icon>
          <span>{{edit.password.fail}}</span>
        </div>
        <md-input-container :class="{'md-input-invalid': edit.password.fail_old}">
          <label>Old Password</label>
          <md-input v-model="edit.password.old" type="password"></md-input>
          <span class="md-error" v-if="edit.password.fail_old">{{edit.password.fail_old}}</span>
        </md-input-container>

        <md-input-container :class="{'md-input-invalid': edit.password.fail_new}">
          <label>New Password</label>
          <md-input v-model="edit.password.new" type="password"></md-input>
          <span class="md-error" v-if="edit.password.fail_new">{{edit.password.fail_new}}</span>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel('dialog-edit-password')">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendEdit('dialog-edit-password', edit.password)">Change Password</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!--Email Dialog-->
    <md-dialog class="mod-md-full-dialog" md-open-from="#edit-email" md-close-to="#edit-email" ref="dialog-edit-email">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">Change Email</h2>
      </md-dialog-title>
      <md-dialog-content>
        <div class="gl-alert-text" v-if="edit.email.fail">
          <md-icon>warning</md-icon>
          <span>{{edit.email.fail}}</span>
        </div>
        <md-input-container :class="{'md-input-invalid': edit.email.fail_password}">
          <label>Confirm Password</label>
          <md-input v-model="edit.email.password" type="password"></md-input>
          <span class="md-error" v-if="edit.email.fail_password">{{edit.email.fail_password}}</span>
        </md-input-container>

        <md-input-container :class="{'md-input-invalid': edit.email.fail_email}">
          <label>New Email Address</label>
          <md-input v-model="edit.email.email" type="email"></md-input>
          <span class="md-error" v-if="edit.email.fail_email">{{edit.email.fail_email}}</span>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel('dialog-edit-email')">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendEdit('dialog-edit-email', edit.email)">Change Email</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!--Change Name Dialog-->
    <md-dialog class="mod-md-full-dialog" md-open-from="#edit-name" md-close-to="#edit-name" ref="dialog-edit-name">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">Change Name</h2>
      </md-dialog-title>

      <md-dialog-content>
        <div class="gl-alert-text" v-if="edit.name.fail">
          <md-icon>warning</md-icon>
          <span>{{edit.name.fail}}</span>
        </div>
        <md-input-container :class="{'md-input-invalid': edit.name.fail_first}">
          <label>First Name</label>
          <md-input v-model="edit.name.first"></md-input>
          <span class="md-error" v-if="edit.name.fail_first">{{edit.name.fail_first}}</span>
        </md-input-container>

        <md-input-container :class="{'md-input-invalid': edit.name.fail_last}">
          <label>Last Name</label>
          <md-input v-model="edit.name.last"></md-input>
          <span class="md-error" v-if="edit.name.fail_last">{{edit.name.fail_last}}</span>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel('dialog-edit-name')">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendEdit('dialog-edit-name', edit.name)">Change Name</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!--Display Name Dialog-->
    <md-dialog class="mod-md-full-dialog" md-open-from="#edit-displayname" md-close-to="#edit-displayname" ref="dialog-edit-displayname">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">Change Display Name</h2>
      </md-dialog-title>
      <md-dialog-content>
        <div class="gl-alert-text" v-if="edit.displayname.fail">
          <md-icon>warning</md-icon>
          <span>{{edit.displayname.fail}}</span>
        </div>
        <md-input-container :class="{'md-input-invalid': edit.displayname.fail_name}">
          <label>Display Name</label>
          <md-input v-model="edit.displayname.name"></md-input>
          <span class="md-error" v-if="edit.displayname.fail_name">{{edit.displayname.fail_name}}</span>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel('dialog-edit-displayname')">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendEdit('dialog-edit-displayname', edit.displayname)">Change Display Name</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!--Short Bio Dialog-->
    <md-dialog class="mod-md-full-dialog" md-open-from="#edit-bio" md-close-to="#edit-bio" ref="dialog-edit-bio">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">Update Bio</h2>
      </md-dialog-title>
      <md-dialog-content>
        <div class="gl-alert-text" v-if="edit.bio.fail">
          <md-icon>warning</md-icon>
          <span>{{edit.bio.fail}}</span>
        </div>
        <md-input-container :class="{'md-input-invalid': edit.bio.fail_text}">
          <label>Short Bio</label>
          <md-textarea v-model="edit.bio.text" style="min-height: 72px;" maxlength="500"></md-textarea>
          <span class="md-error" v-if="edit.bio.fail_text">{{edit.bio.fail_text}}</span>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel('dialog-edit-bio')">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendEdit('dialog-edit-bio', edit.bio)">Update Bio</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!--Location Dialog-->
    <md-dialog class="mod-md-full-dialog" md-open-from="#edit-location" md-close-to="#edit-location" ref="dialog-edit-location">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">Update Location</h2>
      </md-dialog-title>

      <md-dialog-content>
        <div class="gl-alert-text" v-if="edit.location.fail">
          <md-icon>warning</md-icon>
          <span>{{edit.location.fail}}</span>
        </div>
        <div class="gl-center-button">
          <md-button class="md-raised md-primary" @click.native="autoLocation">Auto Find Location</md-button>
        </div>
        <div class="gl-center-button">
          <form @submit.stop.prevent="manualLocation">
            <md-input-container :class="{'md-input-invalid': edit.location.fail_search}">
              <label>Enter city name</label>
              <md-input v-model="edit.location.search"></md-input>
              <span class="md-error" v-if="edit.location.fail_search">{{edit.location.fail_search}}</span>
              <md-button class="md-icon-button" type="submit"><md-icon>search</md-icon></md-button>
            </md-input-container>
          </form>
        </div>

        <!-- <iframe class="location-map" :src="mapIFrameURL"></iframe> -->
        <img :src="mapStaticURL" alt="Google Maps">
        <!-- <div>{{edit.location.name}}</div> -->
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel('dialog-edit-location')">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendEdit('dialog-edit-location', edit.location)">Update Location</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!--Distance Dialog-->
    <md-dialog class="mod-md-full-dialog" md-open-from="#edit-distance" md-close-to="#edit-distance" ref="dialog-edit-distance">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">Update Search Radius</h2>
      </md-dialog-title>

      <md-dialog-content>
        <div class="gl-alert-text" v-if="edit.distance.fail">
          <md-icon>warning</md-icon>
          <span>{{edit.distance.fail}}</span>
        </div>
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
        <md-button class="md-primary md-raised" @click.native="sendEdit('dialog-edit-distance', edit.distance)">Update Distance</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!--Picture Dialog-->
    <md-dialog class="mod-md-full-dialog" md-open-from="#edit-picture" md-close-to="#edit-picture" ref="dialog-edit-picture">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">Upload New Picture</h2>
      </md-dialog-title>

      <md-dialog-content>
        <div class="gl-alert-text" v-if="edit.picture.fail">
          <md-icon>warning</md-icon>
          <span>{{edit.picture.fail}}</span>
        </div>
        <!-- <img :src="edit.picture.data_crop" alt=""> -->
        <profile-crop :image="edit.picture.data_raw" @crop="image => { edit.picture.data_crop = image }"></profile-crop>
        <md-input-container>
          <label>Upload Picture</label>
          <md-file v-model="edit.picture.input" @change.native="getPicture" accept="image/*"></md-file>
        </md-input-container>
        <md-progress :md-progress="edit.picture.progress"></md-progress>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel('dialog-edit-picture')">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendEdit('dialog-edit-picture', edit.picture)">Upload Picture</md-button>
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
        this.edit.displayname.fail = false
        this.edit.displayname.fail_name = false
        this.$root.$firebaseRefs.user.child('displayName').set(cleanData.name).then(() => {
          // Success
          this.cancel(ref)
        }, (error) => {
          // Fail
          this.edit.displayname.fail = error.message
        })
      }
      if (cleanData.change === 'name') {
        this.edit.name.fail = false
        this.edit.name.fail_first = false
        this.edit.name.fail_last = false
        let updates = {
          'firstName': cleanData.first,
          'lastName': cleanData.last
        }
        this.$root.$firebaseRefs.user.update(updates).then(() => {
          // Success
          this.cancel(ref)
        }, (error) => {
          // Fail
          this.edit.name.fail = error.message
        })
      }
      if (cleanData.change === 'bio') {
        this.edit.bio.fail = false
        this.edit.bio.fail_text = false
        this.$root.$firebaseRefs.user.child('bio').set(cleanData.text).then(() => {
          // Success
          this.cancel(ref)
        }, (error) => {
          // Fail
          this.edit.bio.fail = error.message
        })
      }
      if (cleanData.change === 'location') {
        this.edit.location.fail = false
        let updates = {
          'locationName': cleanData.name,
          'locationLat': cleanData.lat,
          'locationLong': cleanData.long
        }
        this.$root.$firebaseRefs.user.update(updates).then(() => {
          // Success
          this.cancel(ref)
        }, (error) => {
          // Fail
          this.edit.location.fail = error.message
        })
      }
      if (cleanData.change === 'distance') {
        this.edit.distance.fail = false
        this.$root.$firebaseRefs.user.child('distance').set(cleanData.distance).then(() => {
          // Success
          this.cancel(ref)
        }, (error) => {
          // Fail
          this.edit.distance.fail = error.message
        })
      }
      if (cleanData.change === 'password') {
        this.edit.password.fail = false
        this.edit.password.fail_old = false
        this.edit.password.fail_new = false
        let user = Firebase.auth().currentUser
        let credential = Firebase.auth.EmailAuthProvider.credential(
            user.email,
            cleanData.old
        )
        user.reauthenticate(credential).then(() => {
          user.updatePassword(cleanData.new).then(() => {
            this.cancel(ref)
          }, (error) => {
            if (error.code === 'auth/weak-password') this.edit.password.fail_new = error.message
            else this.edit.password.fail = error.message
          })
        }, (error) => {
          if (error.code === 'auth/wrong-password') this.edit.password.fail_old = error.message
          else this.edit.password.fail = error.message
        })
      }
      if (cleanData.change === 'email') {
        this.edit.email.fail = false
        this.edit.email.fail_password = false
        this.edit.email.fail_email = false
        let user = Firebase.auth().currentUser
        let credential = Firebase.auth.EmailAuthProvider.credential(
            user.email,
            cleanData.password
        )
        user.reauthenticate(credential).then(() => {
          user.updateEmail(cleanData.email).then(() => {
            this.$root.$firebaseRefs.user.child('email').set(cleanData.email).then(() => {
              // Success
              this.cancel(ref)
            }, (error) => {
              this.edit.email.fail = error.message
            })
          }, (error) => {
            if (error.code === 'auth/invalid-email') this.edit.email.fail_email = error.message
            else this.edit.email.fail = error.message
          })
        }, (error) => {
          if (error.code === 'auth/invalid-email') this.edit.email.fail_email = error.message
          else if (error.code === 'auth/user-disabled') this.edit.email.fail_email = error.message
          else if (error.code === 'auth/user-not-found') this.edit.email.fail_email = error.message
          else if (error.code === 'auth/wrong-password') this.edit.email.fail_password = error.message
          else this.edit.email.fail = error.message
        })
      }
      if (cleanData.change === 'picture') {
        this.edit.picture.fail = false
        if (this.edit.picture.data_crop === '') {
          this.edit.picture.fail = 'No picture selected!'
          return false
        }
        let user = Firebase.auth().currentUser
        let storageRef = Firebase.storage().ref('user/' + user.uid + '/profile.jpg')
        let uploadTask = storageRef.putString(cleanData.data_crop, 'data_url')
        uploadTask.on('state_changed', (snapshot) => {
          // Progress
          this.edit.picture.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        }, (error) => {
          // Fail
          this.edit.picture.fail = error.message
        }, () => {
          // Success
          // Now save url to user
          let downloadURL = uploadTask.snapshot.downloadURL
          this.$root.$firebaseRefs.user.child('pictureURL').set(downloadURL).then(() => {
            // Success
            this.cancel(ref)
          }, (error) => {
            // Fail
            this.edit.picture.fail = error.message
          })
        })
      }

      // TODO: birthday, sex
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
    autoLocation: function (event) {
      this.edit.location.fail = false
      this.edit.location.fail_search = false
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          // Reverse Geocoding will pull from this location
          this.edit.location.lat = +(Math.round(position.coords.latitude * 100) / 100)
          this.edit.location.long = +(Math.round(position.coords.longitude * 100) / 100)

          // Resolve city name
          this.$http.get(this.reverseGeocodingURL).then(response => {
            if (response.body.status !== 'OK') {
              this.edit.location.name = 'Unknown'
              this.edit.location.fail = response.body.status
              return false
            }
            try {
              let city = response.body.results[0]
              this.edit.location.name = '' + city.address_components[0].long_name + ', ' + city.address_components[2].short_name
              this.edit.location.search = this.edit.location.name
            } catch (error) {
              this.edit.location.name = 'Unknown'
              this.edit.location.fail = 'Unable to resolve city name!'
              console.log(error)
            }
          }, response => {
            this.edit.location.name = 'Unknown'
            if (response.body.status) this.edit.location.fail = response.body.status
            else this.edit.location.fail = 'Failed to load Google Maps API!'
            console.log(response)
          })
        }, (err) => {
          this.edit.location.fail = 'Geolocation is not available!'
          console.log(err)
        })
      } else {
        /* geolocation IS NOT available */
        this.edit.location.fail = 'Geolocation is not available!'
      }
    },
    manualLocation: function (event) {
      this.edit.location.fail = false
      this.edit.location.fail_search = false
      this.$http.get(this.geocodingURL).then(response => {
        if (response.body.status !== 'OK') {
          this.edit.location.fail_search = response.body.status
          return false
        }
        try {
          let city = response.body.results[0]
          this.edit.location.name = '' + city.address_components[0].long_name + ', ' + city.address_components[2].short_name
          this.edit.location.search = this.edit.location.name
          this.edit.location.lat = city.geometry.location.lat
          this.edit.location.long = city.geometry.location.lng
        } catch (error) {
          this.edit.location.fail_search = 'Unable to resolve location!'
          console.log(error)
        }
      }, response => {
        if (response.body.status) this.edit.location.fail_search = response.body.status
        else this.edit.location.fail_search = 'Failed to load Google Maps API!'
        console.log(response)
      })
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
          last: setAccount.lastName,
          fail: false,
          fail_first: false,
          fail_last: false
        },
        distance: {
          change: 'distance',
          distance: setAccount.distance,
          fail: false
        },
        picture: {
          change: 'picture',
          input: '',
          data_crop: '',
          data_raw: '',
          progress: 0,
          fail: false
        },
        location: {
          change: 'location',
          search: '',
          name: setAccount.locationName,
          lat: setAccount.locationLat,
          long: setAccount.locationLong,
          fail: false,
          fail_search: false
        },
        bio: {
          change: 'bio',
          text: setAccount.bio,
          fail: false,
          fail_text: false
        },
        displayname: {
          change: 'displayname',
          name: setAccount.displayName,
          fail: false,
          fail_name: false
        },
        password: {
          change: 'password',
          old: '',
          new: '',
          fail: false,
          fail_old: false,
          fail_new: false
        },
        email: {
          change: 'email',
          password: '',
          email: '',
          fail: false,
          fail_password: false,
          fail_email: false
        }
      }
    },
    resetEdit () {
      this.edit = this.setEdit()
    }
  },
  computed: {
    mapIFrameURL: function () {
      return 'https://www.google.com/maps/embed/v1/view?key=' + this.googleIFrameAPI + '&center=' + this.edit.location.lat + ',' + this.edit.location.long + '&zoom=14&maptype=satellite'
    },
    mapStaticURL: function () {
      return 'https://maps.googleapis.com/maps/api/staticmap?key=' + this.googleStaticAPI + '&center=' + this.edit.location.lat + ',' + this.edit.location.long + '&zoom=14&maptype=hybrid&size=640x360&markers=' + this.edit.location.lat + ',' + this.edit.location.long
    },
    geocodingURL: function () {
      return 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.googleAPI + '&address=' + this.edit.location.search + '&location_type=political'
    },
    reverseGeocodingURL: function () {
      return 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.googleAPI + '&latlng=' + this.edit.location.lat + ',' + this.edit.location.long + '&result_type=political'
    }
  },
  data () {
    return {
      edit: this.setEdit(),
      googleIFrameAPI: 'AIzaSyC_pqSISPg49PEQyz6LTpPyFMomhqzeOT0',
      googleStaticAPI: 'AIzaSyBVwyKUZONuIfaQt8io2gd3W1WtpjBUkLg',
      googleAPI: 'AIzaSyBpPBn7foYvT6yus0hh1wOMf7TWKXrdzUo'
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
.settings-title {
  text-align: center;
  color: rgba(0,0,0,0.54)
}
</style>

<style lang="scss">
</style>
