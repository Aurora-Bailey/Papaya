<template>
  <div class="people-following using-sidebar">
    <div class="gl-narrow-wrapper-840">
      <display-people :people="listPeople"></display-people>
      <div class="gl-large-center-text" v-if="emptyTask">
        <md-icon>search</md-icon>
        <span>We've searched, but found nothing!</span>
      </div>
    </div>
  </div>
</template>
<script>
import DisplayPeople from '../components/DisplayPeople'
import FirebaseSet from '../plugins/FirebaseSet'
import Firebase from 'firebase'
import _ from 'lodash'

export default {
  name: 'people-following',
  components: {
    DisplayPeople
  },
  mounted () {
    if (this.$root.uid) this.profilePeopleTask()
  },
  watch: {
    '$root.userFollowing': function () {
      if (this.$root.userFollowing['.key']) this.profilePeopleTask()
    }
  },
  methods: {
    profilePeopleTask () {
      FirebaseSet.profilePeopleTask(_.keys(_.omit(this.$root.userFollowing, ['.key', '.value'])))
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
            this.$set(this, 'listPeople', list)
            list.forEach((e, i) => {
              Firebase.database().ref('profile/' + e.uid)
              .once('value', snap => {
                this.$set(this.listPeople, i, _.assign(this.listPeople[i], snap.val()))
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
  data () {
    return {
      listPeople: [],
      emptyTask: false
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('green')
    })
  }
}
</script>

<style lang="scss" scoped>
.people-following {
}
</style>

<style lang="scss">
</style>
