<!-- Example usage
-->
<template>
  <div class="auto-complete" v-if="active">
    <md-whiteframe md-elevation="6" class="list-viewport">
      <md-list class="md-dense">
        <md-list-item v-for="(item, index) in list" @click.native.prevent.stop="choose(item.option)" :class="{'item-selected': index === arrowSelect}">
          <span class="item-option">{{item.option}}</span>
          <span class="item-right">{{item.right | shortnumber}}</span>
        </md-list-item>
      </md-list>
    </md-whiteframe>
  </div>
</template>

<script>
export default {
  props: ['active', 'list_asdf'],
  name: 'auto-complete',
  created () {
    console.log('addEventListener')
    window.addEventListener('keyup', this.handleArrowKeys)
  },
  beforeDestroy () {
    console.log('remove event listener')
    window.removeEventListener('keyup', this.handleArrowKeys)
  },
  data () {
    return {
      arrowSelect: -1,
      list: [
        {option: 'Mary Johnson 1', right: '2545'},
        {option: 'Mary Johnson 2', right: '45'},
        {option: 'Mary Johnson 3', right: '453'},
        {option: 'Mary Johnson 4', right: '4535'},
        {option: 'Mary Johnson 5', right: '45357'},
        {option: 'Mary Johnson 6', right: '753576'},
        {option: 'Mary Johnson 7', right: '4353761'},
        {option: 'Mary Johnson 8', right: '43537621'}
      ]
    }
  },
  methods: {
    handleArrowKeys (event) {
      if (event.keyCode === 38) { // Up
        this.arrowSelect--
        this.arrowSelect = this.arrowSelect % this.list.length
        if (this.arrowSelect < 0) this.arrowSelect = this.list.length - 1
        this.suggest(this.list[this.arrowSelect].option)
      } else if (event.keyCode === 40) { // Down
        this.arrowSelect++
        this.arrowSelect = this.arrowSelect % this.list.length
        if (this.arrowSelect < 0) this.arrowSelect = this.list.length - 1
        this.suggest(this.list[this.arrowSelect].option)
      }
    },
    suggest (item) {
      this.$emit('suggest', item)
    },
    choose (item) {
      this.$emit('choose', item)
    }
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
.item-right {
  font-weight: bold;
  color: rgba(0,0,0,0.54)
}
.item-selected {
  background-color: rgba(0,0,0,0.12);
}
</style>
