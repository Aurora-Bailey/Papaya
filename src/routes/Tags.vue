<template>
  <div class="tags using-sidebar">
    <div class="gl-narrow-wrapper-840">
      <md-whiteframe class="tag-card">
        <form @submit.stop.prevent="addTag">
          <md-input-container :class="{'md-input-invalid': addTagFail}">
            <label>Add a new tag...</label>
            <md-input v-model="addTagInput" maxlength="120"></md-input>
            <span class="md-error gl-input-error" v-if="addTagFail">{{addTagFail}}</span>
            <md-button class="md-icon-button" type="submit"><md-icon>arrow_forward</md-icon></md-button>
          </md-input-container>
        </form>
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

export default {
  name: 'tags',
  mounted () {
    this.bindTags()
  },
  watch: {
    '$root.uid': function () {
      this.bindTags()
    }
  },
  methods: {
    bindTags: function (e) {
      let uid = this.$root.uid
      if (uid) {
        this.$bindAsArray('tags', Firebase.database().ref('userTags/' + uid))
      } else {
        this.tags = []
      }
    },
    addTag (event) {
      // Check for duplicate tags
      let duplicate = false
      this.tags.forEach(val => {
        if (val.name === this.addTagInput) duplicate = true
      })
      if (duplicate) {
        this.addTagFail = 'You already have this Tag!'
        return false
      }
      // Upload tag
      this.addTagFail = null
      FirebaseSet.addTag(this.addTagInput, 50, 0)
      .then(() => {
        // Success
        this.addTagInput = ''
      }, error => {
        // TODO: interface for weight and level
        // TODO: autocomplete based on global tags and tag count
        this.addTagFail = error.message
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
      tags: []
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
