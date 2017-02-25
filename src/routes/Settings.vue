<template>
  <div class="settings using-sidebar">
    <div class="gl-narrow-wrapper-480">
      <md-whiteframe class="settings-card">

        <md-list class="md-double-line">
          <md-list-item>
            <md-ink-ripple />
            <md-icon class="md-primary">person</md-icon>
            <div class="md-list-text-container">
              <span>{{account.name}}</span>
              <span>Name</span>
            </div>
          </md-list-item>

          <md-list-item class="md-inset">
            <md-ink-ripple />
            <div class="md-list-text-container">
              <span>{{account.displayname}}</span>
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
              <span>{{account.location.name}}</span>
              <span>Location</span>
            </div>
            <md-button class="md-icon-button md-list-action" id="edit-location" @click.native="openDialog('dialog-edit-location')">
              <md-icon>edit</md-icon>
            </md-button>
          </md-list-item>

          <md-list-item class="md-inset">
            <md-ink-ripple />
            <div class="md-list-text-container">
              <span>~{{account.distance}} Miles</span>
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
              <span>{{account.email}}</span>
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
    <md-dialog md-open-from="#edit-password" md-close-to="#edit-password" ref="dialog-edit-password">
      <md-dialog-title>
        <h2 class="md-title">Change Password</h2>
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

        <md-input-container>
          <label>Confirm New Password</label>
          <md-input v-model="edit.password.confirm" type="password"></md-input>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel('dialog-edit-password')">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendEdit('dialog-edit-password', edit.password)">Change Password</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!--Display Name Dialog-->
    <md-dialog md-open-from="#edit-displayname" md-close-to="#edit-displayname" ref="dialog-edit-displayname">
      <md-dialog-title>
        <h2 class="md-title">Change Display Name</h2>
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
    <md-dialog md-open-from="#edit-bio" md-close-to="#edit-bio" ref="dialog-edit-bio">
      <md-dialog-title>
        <h2 class="md-title">Update Bio</h2>
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
    <md-dialog md-open-from="#edit-location" md-close-to="#edit-location" ref="dialog-edit-location">
      <md-dialog-title>
        <h2 class="md-title">Update Location</h2>
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
    <md-dialog md-open-from="#edit-distance" md-close-to="#edit-distance" ref="dialog-edit-distance">
      <md-dialog-title>
        <h2 class="md-title">Update Search Radius</h2>
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
    <md-dialog md-open-from="#edit-picture" md-close-to="#edit-picture" ref="dialog-edit-picture">
      <md-dialog-title>
        <h2 class="md-title">Upload New Picture</h2>
      </md-dialog-title>

      <md-dialog-content>
        <div class="picture-preview" v-if="edit.picture.data !== ''" :style="{backgroundImage: 'url(' + edit.picture.data + ')'}"></div>
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
export default {
  name: 'settings',
  methods: {
    getPicture: function (event) {
      let input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()

        reader.onload = (e) => {
          this.edit.picture.data = e.target.result
        }

        reader.readAsDataURL(input.files[0])
      }
    },
    getLocation: function (event) {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
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
    sendEdit (ref, data) {
      let cleanData = JSON.parse(JSON.stringify(data))

      // temp
      console.log(cleanData)
      if (cleanData.change === 'displayname') {
        this.account.displayname = cleanData.name
      }
      if (cleanData.change === 'distance') {
        this.account.distance = cleanData.distance
      }

      this.cancel(ref)
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
      let setAccount = {}
      if (this.account) {
        setAccount = this.account
      } else {
        setAccount = this.setAccount()
      }

      return {
        distance: {
          change: 'distance',
          distance: setAccount.distance
        },
        picture: {
          change: 'picture',
          input: '',
          data: ''
        },
        location: {
          change: 'location',
          name: setAccount.location.name,
          lat: setAccount.location.lat,
          long: setAccount.location.long
        },
        bio: {
          change: 'bio',
          text: setAccount.bio
        },
        displayname: {
          change: 'displayname',
          name: setAccount.displayname
        },
        password: {
          change: 'password',
          old: '',
          new: '',
          confirm: ''
        }
      }
    },
    resetEdit () {
      this.edit = this.setEdit()
    },
    setAccount () {
      return {
        name: 'Dmitrii Abramov',
        displayname: '',
        email: 'dmitrii.abramov@example.com',
        location: {
          name: 'Silicon Valley, CA',
          lat: '37.3874',
          long: '-122.0575'
        },
        distance: 5,
        bio: 'front-end engineer @facebook, musician, husband, christian. I build things together with @cpojer and play metal when i\'m not coding',
        pic: 'https://pbs.twimg.com/profile_images/644529861004931072/ItiZQelK_400x400.jpg'
      }
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
      account: this.setAccount(),
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
.picture-preview {
  width: 200px;
  height: 200px;
  border-radius: 200px;
  margin: auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

<style lang="scss">
</style>
