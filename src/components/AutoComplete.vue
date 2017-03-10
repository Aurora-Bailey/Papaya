<!-- Example usage
-->
<template>
  <div class="auto-complete" v-show="options.length > 0">
    <md-whiteframe md-elevation="6" class="list-viewport">
      <md-list class="md-dense">
        <md-list-item v-for="(item, index) in options" @click.native.prevent.stop="arrowSelect = index; submit()" :class="{'item-selected': index === arrowSelect}">
          <span class="item-key">{{item.name}}</span>
          <span class="item-value">{{item.count | shortnumber}}</span>
        </md-list-item>
      </md-list>
    </md-whiteframe>
  </div>
</template>

<script>
import Firebase from 'firebase'
import FirebaseSet from '../plugins/FirebaseSet'
import _ from 'lodash'

export default {
  props: ['search'],
  name: 'auto-complete',
  created () {
    window.addEventListener('keyup', this.handleArrowKeys)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.handleArrowKeys)
  },
  data () {
    return {
      arrowSelect: 0,
      list: {}
    }
  },
  watch: {
    'list': function () {
      this.arrowSelect = 0
    },
    'search': function () {
      this.pullAutoComplete()
    }
  },
  computed: {
    options: function () {
      // Convert list object to array of objects
      let arr = []
      let keys = Object.keys(this.list)
      keys.forEach(key => {
        arr.push({name: key, count: this.list[key]})
      })
      return arr
    }
  },
  methods: {
    pullAutoComplete: _.debounce(function () {
      let cleanSearch = FirebaseSet.tagSanitize(this.search)
      if (cleanSearch === '') {
        this.list = {}
        return false
      }
      let ifNoResults = {}
      ifNoResults[cleanSearch] = 0
      console.log(cleanSearch)
      Firebase.database().ref().child('tags').orderByKey().startAt(cleanSearch).endAt(cleanSearch + '~').limitToFirst(5).once('value', snap => {
        this.$set(this, 'list', _.assign(ifNoResults, snap.val()))
      })
    }, 300),
    handleArrowKeys (event) {
      if (event.keyCode === 13) { // Enter
        this.submit()
      }
      if (this.options.length === 0) return false
      if (event.keyCode === 38) { // Up
        this.arrowSelect--
        this.arrowSelect = this.arrowSelect % this.options.length
        if (this.arrowSelect < 0) this.arrowSelect = this.options.length - 1
      } else if (event.keyCode === 40) { // Down
        this.arrowSelect++
        this.arrowSelect = this.arrowSelect % this.options.length
        if (this.arrowSelect < 0) this.arrowSelect = this.options.length - 1
      }
    },
    submit: _.debounce(function () {
      if (this.options.length === 0) return false
      this.$emit('submit', this.options[this.arrowSelect].name)
    }, 300)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.auto-complete {
  position: relative
}
.list-viewport {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
}
.item-value {
  font-weight: bold;
  color: rgba(0,0,0,0.54)
}
.item-selected {
  background-color: rgba(0,0,0,0.12);
}
</style>
