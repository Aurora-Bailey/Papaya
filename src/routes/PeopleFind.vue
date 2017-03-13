<template>
  <div class="find-people using-sidebar">
    <div class="gl-narrow-wrapper-840">
      <display-people :people="findPeople"></display-people>
    </div>
  </div>
</template>
<script>
import DisplayPeople from '../components/DisplayPeople'
import FirebaseSet from '../plugins/FirebaseSet'
import Firebase from 'firebase'
import _ from 'lodash'

export default {
  name: 'find-people',
  components: {
    DisplayPeople
  },
  mounted () {
    if (this.$root.uid) this.findPeopleTask()
  },
  watch: {
    '$root.uid': function () {
      this.findPeopleTask()
    }
  },
  beforeDestroy () {
    Firebase.database().ref('profile').off()
  },
  methods: {
    findPeopleTask () {
      FirebaseSet.findPeopleTask()
      .then(watching => {
        let uid = this.$root.uid
        let watchRef = Firebase.database().ref('computed/' + uid + '/' + watching)
        watchRef.on('value', snap => {
          let list = snap.val()
          if (list !== null) {
            watchRef.off()
            this.$set(this, 'findPeople', list)
            list.forEach((e, i) => {
              Firebase.database().ref('profile/' + e.uid)
              .once('value', snap => {
                this.$set(this.findPeople, i, _.assign(this.findPeople[i], snap.val()))
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
      findPeople: []
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
.find-people {
}
</style>

<style lang="scss">
</style>
