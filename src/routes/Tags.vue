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
          <div v-for="(tag, index) in $root.userTags" class="gl-chip" :class="{'chip-highlight-red': tag.level === 1, 'chip-highlight-blue': tag.level === 2, 'chip-highlight-purple': tag.level === 3}" @click="openTag(index)">
            <span class="chip-text">{{tag.name}}</span>
            <span class="chip-text chip-new" v-if="tagsJustAdded[tag.name]">(New)</span>
          </div>
        </div>
      </md-whiteframe>
    </div>

    <md-dialog class="mod-md-full-dialog tag-dialog" ref="ref-tag-dialog" @close="onCloseTag()">
      <md-dialog-content v-if="tagOpen !== null">
        <div class="tag-preview">
          <div>Tag</div>
          <div class="tag-preview-content">
            <div class="gl-chip" :class="{'chip-highlight-red': $root.userTags[tagOpen].level === 1, 'chip-highlight-blue': $root.userTags[tagOpen].level === 2, 'chip-highlight-purple': $root.userTags[tagOpen].level === 3}">
              <span class="chip-text">{{$root.userTags[tagOpen].name}}</span>
              <span class="chip-text chip-new" v-if="tagsJustAdded[$root.userTags[tagOpen].name]">(New)</span>
            </div>
            <md-button class="md-warn md-raised md-icon-button md-dense" @click.native="removeTag(tagOpen); $refs['ref-tag-dialog'].close()">
              <md-icon>delete</md-icon>
            </md-button>
          </div>
        </div>
        <div class="tag-weight">
          <div>Weight</div>
          <md-button-toggle md-single class="md-primary">
            <md-button class="md-icon-button" :class="{'md-toggle': $root.userTags[tagOpen].weight === 1}" @click.native="setTagWeight(tagOpen, 1)">1</md-button>
            <md-button class="md-icon-button" :class="{'md-toggle': $root.userTags[tagOpen].weight === 2}" @click.native="setTagWeight(tagOpen, 2)">2</md-button>
            <md-button class="md-icon-button" :class="{'md-toggle': $root.userTags[tagOpen].weight === 4}" @click.native="setTagWeight(tagOpen, 4)">4</md-button>
            <md-button class="md-icon-button" :class="{'md-toggle': $root.userTags[tagOpen].weight === 8}" @click.native="setTagWeight(tagOpen, 8)">8</md-button>
            <md-button class="md-icon-button" :class="{'md-toggle': $root.userTags[tagOpen].weight === 16}" @click.native="setTagWeight(tagOpen, 16)">16</md-button>
            <md-button class="md-icon-button" :class="{'md-toggle': $root.userTags[tagOpen].weight === 32}" @click.native="setTagWeight(tagOpen, 32)">32</md-button>
          </md-button-toggle>
        </div>
        <div class="tag-highlight">
          <div>Highlight</div>
          <div class="tag-highlight-content">
            <div class="gl-chip" @click="setTagHighlight(tagOpen, 0)"><span class="chip-text">None</span></div>
            <div class="gl-chip chip-highlight-red" @click="setTagHighlight(tagOpen, 1)"><span class="chip-text">Passion</span></div>
            <div class="gl-chip chip-highlight-blue" @click="setTagHighlight(tagOpen, 2)"><span class="chip-text">Expert</span></div>
            <div class="gl-chip chip-highlight-purple" @click="setTagHighlight(tagOpen, 3)"><span class="chip-text">Lifeblood</span></div>
          </div>
        </div>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click.native="$refs['ref-tag-dialog'].close()">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>
<script>
// import Firebase from 'firebase'
import FirebaseSet from '../plugins/FirebaseSet'
import AutoComplete from '../components/AutoComplete'
import _ from 'lodash'

export default {
  name: 'tags',
  components: {
    AutoComplete
  },
  watch: {
    'addTagInput': _.debounce(function () {
      // Snap the input back to a sanitized format
      this.addTagInput = FirebaseSet.tagSanitize(this.addTagInput)
      // Remove any errors
      this.addTagFail = null
    }, 300)
  },
  methods: {
    addTag (tag) {
      // Only called by autocomplete
      // Upload tag
      this.addTagFail = null
      FirebaseSet.addTag(tag, 4, 0)
      .then(() => {
        // Success
        this.tagsJustAdded[tag] = true
        this.addTagInput = ''
      }, error => {
        // TODO: interface for weight and level
        // TODO: autocomplete based on global tags and tag count
        this.addTagFail = error.message
        if (error.query) this.addTagInput = error.query // Let the user know exactly what failed
        console.error(error)
      })
    },
    setTagHighlight (tagIndex, level) {
      FirebaseSet.setTagHighlight(this.$root.userTags[tagIndex]['.key'], level)
      .then(() => {
        // Success
      }, error => {
        console.error(error)
      })
    },
    setTagWeight (tagIndex, weight) {
      FirebaseSet.setTagWeight(this.$root.userTags[tagIndex]['.key'], weight)
      .then(() => {
        // Success
      }, error => {
        console.error(error)
      })
    },
    removeTag (tagIndex) {
      FirebaseSet.removeTag(this.$root.userTags[tagIndex]['.key'])
      .then(() => {
        // Success
      }, error => {
        console.error(error)
      })
    },
    openTag (tagIndex) {
      this.tagOpen = tagIndex
      this.$refs['ref-tag-dialog'].open()
    },
    onCloseTag () {
      this.tagOpen = null
    }
  },
  data () {
    return {
      addTagInput: '',
      addTagFail: null,
      tagOpen: null,
      tagsJustAdded: {}
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
.tag-dialog {
  .tag-preview {
    padding: 0 0 12px;
    .tag-preview-content {
      text-align: center;
    }
  }
  .tag-weight {
    padding: 0 0 12px;
    .md-button-toggle {
      justify-content: center;
    }
  }
  .tag-highlight {
    .tag-highlight-content {
      text-align: center;
    }
  }
}
</style>

<style lang="scss">
</style>
