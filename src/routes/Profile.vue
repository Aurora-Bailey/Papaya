<template>
  <div class="profile using-sidebar">
    <md-whiteframe class="profile-section" md-elevation="1dp" v-for="profile in profileData">
      <div class="gl-narrow-wrapper-600">
        <div class="profile-content">
          <div class="profile-pic">
            <img :src="profile.pictureURL" alt="">
            <div class="profile-likeness">
              <span class="person-weight my-weight">
                {{profile.mw}}
                <md-tooltip md-direction="bottom">Weight I gave to matching tags</md-tooltip>
              </span>
              /
              <span class="person-weight your-weight">
                {{profile.yw}}
                <md-tooltip md-direction="bottom">Weight {{profile.displayName}} gave to matching tags</md-tooltip>
              </span>
            </div>
          </div>
          <div class="profile-info">
            <div class="profile-follow">
              <router-link to="/mail/23423">
                <md-button class="md-raised md-icon-button md-accent" >
                  <md-icon>mail</md-icon>
                </md-button>
              </router-link>
              <md-button class="md-raised" :class="{'md-accent': !$root.userFollowing[profile.uid]}" @click.native="followPerson(profile.uid)">
                <span v-if="!$root.userFollowing[profile.uid]">Follow</span>
                <span v-else>Un-Follow</span>
              </md-button>
            </div>
            <div class="profile-person">
              <div class="profile-name">{{profile.displayName}}</div>
              <div class="profile-age">{{profile.age}}</div>
              <div class="profile-location">{{profile.locationName}}</div>
            </div>
            <div>
              <p class="profile-bio">{{profile.bio}}</p>
            </div>
          </div>
        </div>
        <div class="common-tags-title">
          Tags both you and {{profile.displayName}} have in common
        </div>
        <div class="common-tags" :class="{'show-all-tags': showAllTags}">
          <div v-for="(tag, index) in tagsFiltered" class="gl-chip" :class="{'chip-highlight-red': tag.l === 1, 'chip-highlight-blue': tag.l === 2, 'chip-highlight-purple': tag.l === 3}">
            <span class="chip-text">{{tag.n}} {{tag.w}}</span>
          </div>
        </div>
      </div>
      <div class="expand-tags-button" @click="showAllTags=!showAllTags">
        <md-ink-ripple />
        <md-icon class="md-size-2x" v-if="showAllTags">expand_less</md-icon>
        <md-icon class="md-size-2x" v-if="!showAllTags">expand_more</md-icon>
      </div>
    </md-whiteframe>
    <div class="gl-narrow-wrapper-600">
      <display-posts :postable="false"></display-posts>
    </div>
  </div>
</template>
<script>
import DisplayPosts from '../components/DisplayPosts'
import Firebase from 'firebase'
import FirebaseSet from '../plugins/FirebaseSet'
import _ from 'lodash'

export default {
  name: 'profile',
  components: {
    DisplayPosts
  },
  mounted () {
    if (this.$root.uid) this.profileUpdate()
  },
  watch: {
    '$root.uid': function () {
      this.profileUpdate()
    },
    '$route': function () {
      if (this.$root.uid) this.profileUpdate()
    }
  },
  methods: {
    followPerson (uid) {
      FirebaseSet.followPerson(uid, !this.$root.userFollowing[uid])
      .then(() => {

      }, error => {
        console.error(error)
      })
    },
    profileUpdate () {
      let profileuid = this.$root.uid
      if (this.$route.params.uid) profileuid = this.$route.params.uid
      FirebaseSet.profilePeopleTask([profileuid])
      .then(watching => {
        let uid = this.$root.uid
        let watchRef = Firebase.database().ref('computed/' + uid + '/' + watching)
        watchRef.on('value', snap => {
          let list = snap.val()
          if (list !== null) {
            watchRef.off()
            this.emptyTask = false
            if (list === 'empty') {
              this.emptyTask = true
              return false
            }
            this.$set(this, 'profileData', list)
            list.forEach((e, i) => {
              Firebase.database().ref('profile/' + e.uid)
              .once('value', snap => {
                this.$set(this.profileData, i, _.assign(this.profileData[i], snap.val()))
              })
            })
          }
        })
        // End bind
      }, error => {
        console.error(error)
      })
    }
  },
  computed: {
    tagsFiltered () {
      if (!this.profileData[0] || !this.profileData[0].tags) return []
      if (this.showAllTags) return this.profileData[0].tags

      let limit = 20
      let deepCopy = JSON.parse(JSON.stringify(this.profileData[0].tags))
      deepCopy.sort((a, b) => {
        if (a.l > b.l) return -1
        if (a.l < b.l) return 1
        if (a.w > b.w) return -1
        if (a.w < b.w) return 1
        return 0
      })

      let top = deepCopy.splice(0, limit)
      return top
    }
  },
  data () {
    return {
      profileData: [], // Profile is pulled as an array to allow for the underlying function to pull multiple users
      emptyTask: false,
      showAllTags: false
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('cyan')
    })
  }
}
</script>

<style lang="scss" scoped>
.profile {
  overflow: auto;
}
.profile-section {
  padding-top: 48px;
  background-color: white;
  animation-name: profile-enter;
  animation-duration: .4s;
  animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  z-index: 2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
@keyframes profile-enter {
  0%   {max-height: 0}
  100% {max-height: 500px;}
}
.profile-content {
  display: flex;
  align-items: center;
  padding: 0 5px;

  @media (max-width: 600px) {
    display: block;
    .profile-info {
      margin: 24px;
      padding: 0;
    }
  }
}
.profile-info {
  flex: 1;
  padding-left: 24px;
  position: relative;
}
.profile-follow {
  position: absolute;
  top: 0;
  right: 0;
  .md-button {
    margin: 0 0 0 6px;
  }
}
.profile-person {
  .profile-name {
    font-weight: bold;
    font-size: 20px;
  }
  .profile-age {
    display: inline-block;
    color: rgba(0,0,0,0.54);
    vertical-align: middle;
  }
  .profile-location {
    display: inline-block;
    color: rgba(0,0,0,0.54);
    vertical-align: middle;
  }
}
.profile-bio {
  margin: 0;
  padding-top: 24px;
}
.profile-pic {
  width: 200px;
  min-width: 200px;
  height: 240px; // Hack job for likeness padding
  min-height: 240px; // Hack job for likeness padding
  margin: auto;
  position: relative;
  user-select: none;

  img {
    border-radius: 200px;
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
}
.common-tags-title {
  text-align: center;
  padding: 48px 5px 0;
  color: rgba(0,0,0,0.38)
}
.common-tags {
  padding: 0 5px;
  margin-top: 12px;
  max-height: 72px;
  overflow: hidden;
  transition: all 0.4s linear;
  text-align: center;

  &.show-all-tags {
    max-height: 50vh;
    overflow: auto;
  }
}
.expand-tags-button {
  text-align: center;
  height: 48px;
  position: relative;
  display: block;
  cursor: pointer;

  .md-icon {
    pointer-events: none;
    user-select: none;
  }
}
.profile-likeness {
  margin: 12px auto;
  color: rgba(0,0,0,0.54);
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;

  .person-weight {
    font-size: 24px;
    padding: 5px;
    font-weight: bold;

    &.your-weight {
      font-size: 18px;
    }
  }
}
</style>

<style lang="scss">
</style>
