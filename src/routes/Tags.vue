<template>
  <div class="tags using-sidebar">
    <div class="gl-narrow-wrapper-840">
      <md-whiteframe class="tag-card">
        <md-input-container :class="{'md-input-invalid': addTagFail}">
          <label>Add a new tag...</label>
          <md-input v-model="addTagInput" maxlength="120" autocomplete="off"></md-input>
          <span class="md-error gl-input-error" v-if="addTagFail">{{addTagFail}}</span>
        </md-input-container>
        <auto-complete :search="addTagInput" @submit="val => { addTag(val) }"></auto-complete>
        <div class="tag-container">
          <div v-for="(tag, index) in tags" class="gl-chip buttons-visible" :class="{'chip-highlight': tag.level === 1}">
            <span class="chip-text">{{tag.name}}</span>
            <md-button class="chip-button md-icon-button" v-on:click.native.stop="removeTag(tag['.key'])">
              <md-icon>cancel</md-icon>
            </md-button>
          </div>
        </div>
      </md-whiteframe>
    </div>
  </div>
</template>
<script>
import Firebase from 'firebase'
import FirebaseSet from '../plugins/FirebaseSet'
import AutoComplete from '../components/AutoComplete'
import _ from 'lodash'

export default {
  name: 'tags',
  components: {
    AutoComplete
  },
  mounted () {
    this.bindTags()
  },
  watch: {
    '$root.uid': function () {
      this.bindTags()
    },
    'addTagInput': _.debounce(function () {
      // Snap the input back to a sanitized format
      this.addTagInput = FirebaseSet.tagSanitize(this.addTagInput)
      // Remove any errors
      this.addTagFail = null
    }, 300)
  },
  methods: {
    bindTags () {
      let uid = this.$root.uid
      // Remove any old bindings
      if (this.$firebaseRefs && this.$firebaseRefs['tags']) this.$unbind('tags')
      // Set new bindings
      if (uid) {
        this.$bindAsArray('tags', Firebase.database().ref('userTags/' + uid))
      } else {
        this.tags = []
      }
    },
    addTag (tag) {
      // Only called by autocomplete
      // Upload tag
      this.addTagFail = null
      FirebaseSet.addTag(tag, 50, 0)
      .then(() => {
        // Success
        this.addTagInput = ''
      }, error => {
        // TODO: interface for weight and level
        // TODO: autocomplete based on global tags and tag count
        this.addTagFail = error.message
        if (error.query) this.addTagInput = error.query // Let the user know exactly what failed
        console.error(error)
      })
    },
    removeTag (key) {
      FirebaseSet.removeTag(key)
      .then(() => {
        // Success
      }, error => {
        console.error(error)
      })
    }
  },
  data () {
    return {
      addTagInput: '',
      addTagFail: null,
      tags: [] // bind to firebase
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('teal')
    })
  }
}
</script>

<style lang="scss" scoped>
.tags {
}
.tag-card {
  background-color: white;
  padding: 24px;
  margin: 24px 5px 5px;
}
.tag-container {
  padding-top: 24px;
  text-align: center;
}
</style>

<style lang="scss">
</style>
