<template>
  <div class="find-events using-sidebar">
    <div class="gl-large-center-text extra-padding" v-if="emptyTask">
      <md-icon>search</md-icon>
      <span>We've searched, but found nothing!</span>
    </div>
    <div class="gl-narrow-wrapper-600">
      <md-whiteframe md-elevation="4dp" class="event" v-for="event in findEvents">
        <div class="event-likeness"><md-spinner :md-size="100" :md-progress="25"></md-spinner><div class="spinner-percent">{{25}}</div></div>
        <div class="event-title">
          {{event.title}}
        </div>
        <div class="event-logistics">
          {{event.locationPublic}}
          {{event.close | datetime}}
        </div>
        <div class="event-description">
          {{event.description}}
        </div>
        <!-- <div class="event-gorup">
          <div class="event-person" v-for="person in event.peopleInGroup">
            <div class="person-open" v-if="person.open">
            </div>
            <router-link to="/profile" class="person-avatar" v-if="!person.open">
              <img :src="person.profile" alt="person.name">
              <md-tooltip md-direction="bottom">{{person.name}}</md-tooltip>
            </router-link>
          </div>
        </div> -->
        <div class="event-action">
          <md-button class="md-raised md-primary mod-md-text-white" @click.native="sendJoinRequest(event.eid)" v-if="!event.moderate">Join</md-button>
          <md-button class="md-raised md-primary mod-md-text-white" @click.native="openRequestDialog(event.eid)" v-if="event.moderate"><md-icon>lock</md-icon> Request Join</md-button>
        </div>
      </md-whiteframe>
    </div>

    <!--Request Join Dialog-->
    <md-dialog class="mod-md-full-dialog" ref="dialog-request-join">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">Send request to join.</h2>
      </md-dialog-title>

      <md-dialog-content>
        <md-input-container>
          <label>Optional Message...</label>
          <md-textarea v-model="request.input" style="min-height: 72px" maxlength="250"></md-textarea>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="closeRequestDialog()">Cancel</md-button>
        <md-button class="md-primary md-raised mod-md-text-white" @click.native="sendJoinRequest()">Send Request</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>
<script>
import FirebaseSet from '../plugins/FirebaseSet'
import Firebase from 'firebase'
import _ from 'lodash'

export default {
  name: 'find-events',
  mounted () {
    if (this.$root.uid) this.findEventsTask()
  },
  watch: {
    '$root.uid': function () {
      this.findEventsTask()
    }
  },
  methods: {
    findEventsTask () {
      FirebaseSet.findEventsTask()
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
              this.$set(this, 'findEvents', [])
              return false
            }
            this.$set(this, 'findEvents', list)
            list.forEach((e, i) => {
              Firebase.database().ref('event/' + e.eid)
              .once('value', snap => {
                this.$set(this.findEvents, i, _.assign(this.findEvents[i], snap.val()))
              })
            })
          }
        })
        // End bind
      }, error => {
        console.error(error)
      })
    },
    openRequestDialog (eventID) {
      this.request.eventID = eventID
      this.request.input = ''
      this.$refs['dialog-request-join'].open()
    },
    closeRequestDialog () {
      this.request.input = ''
      this.$refs['dialog-request-join'].close()
    },
    sendJoinRequest (eventID = this.request.eventID) {
      this.request.eventID = eventID
      // let deepCopy = JSON.parse(JSON.stringify(this.request))

      // only designed to remove 1 element
      this.events.forEach((e, i, o) => {
        if (e.eventID === this.request.eventID) {
          o.splice(i, 1)
        }
      })
      this.closeRequestDialog()
    }
  },
  data () {
    return {
      findEvents: [],
      emptyTask: false,
      request: {
        eventID: null,
        input: ''
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
.find-events {
}
.event {
  margin: 24px 5px 5px;
  background-color: white;
  position: relative;
  padding-left: 112px;
  overflow: auto;

  @media (max-width: 480px) {
    padding-left: 0;
  }

  .event-title {
    padding: 12px;
    font-weight: bold;
    font-size: 16px;
  }

  .event-logistics {
    padding: 0px 12px 12px;
  }

  .event-description {
    padding: 0px 12px 12px;
  }

  .event-gorup {
    padding: 0 12px 12px;

    .event-person {
      display: inline-block;
      padding: 2px;
    }

    .person-open {
      border-radius: 100px;
      overflow: hidden;
      display: inline-block;
      width: 36px;
      height: 36px;
      min-width: 36px;
      min-height: 36px;
      user-select: none;
      vertical-align: top;
      border: 2px solid rgba(0,0,0,0.54)
    }

    .person-avatar {
      border-radius: 100px;
      overflow: hidden;
      display: inline-block;
      width: 36px;
      height: 36px;
      min-width: 36px;
      min-height: 36px;
      user-select: none;
      vertical-align: top;

      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }

  .event-likeness {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 12px;
    bottom: 0;
    margin: auto;
    @media (max-width: 480px) {
      position: relative;
      top: auto;
      left: auto;
      right: auto;
      bottom: auto;
      margin: 12px auto;
    }

    .spinner-percent {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      font-size: 20px;
      color: rgba(0,0,0,0.54)
    }
  }

  .event-action {
    text-align: right;
    padding: 0 12px 12px;
  }
}
</style>

<style lang="scss">
</style>
