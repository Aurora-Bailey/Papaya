<template>
  <div class="tags using-sidebar">
    <div class="gl-narrow-wrapper-840">
      <md-whiteframe class="tag-card">
        <form @submit.stop.prevent="addTag">
          <md-input-container>
            <label>Add a new tag...</label>
            <md-input v-model="addTagInput"></md-input>
            <md-button class="md-icon-button" type="submit"><md-icon>arrow_forward</md-icon></md-button>
          </md-input-container>
        </form>
        <div class="tag-container">
          <div v-for="(tag, index) in tags" class="gl-chip buttons-visible" :class="{'chip-highlight': tag.fav}" v-on:click="tag.fav=!tag.fav">
            <span class="chip-text">{{tag.name}}</span>
            <md-button class="chip-button md-icon-button" v-on:click.native.stop="removeTag(index)">
              <md-icon>cancel</md-icon>
            </md-button>
          </div>
        </div>
      </md-whiteframe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tags',
  methods: {
    addTag (e) {
      this.tags.push({id: 1, name: this.addTagInput, fav: false})
      this.tags.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
        return 0
      })

      console.log(JSON.stringify(this.tags))
      this.addTagInput = ''
    },
    removeTag (i) {
      this.tags.splice(i, 1)
    }
  },
  data () {
    return {
      addTagInput: '',
      tags: [
        {id: 1, name: 'Apple', fav: false},
        {id: 1, name: 'Apricot', fav: true},
        {id: 1, name: 'Avocado', fav: false},
        {id: 1, name: 'Banana', fav: false},
        {id: 1, name: 'Bilberry', fav: false},
        {id: 1, name: 'Blackberry', fav: false},
        {id: 1, name: 'Blackcurrant', fav: false},
        {id: 1, name: 'Blood orange', fav: false},
        {id: 1, name: 'Blueberry', fav: false},
        {id: 1, name: 'Boysenberry', fav: false},
        {id: 1, name: 'Cantaloupe', fav: false},
        {id: 1, name: 'Cherimoya', fav: false},
        {id: 1, name: 'Cherry', fav: true},
        {id: 1, name: 'Clementine', fav: false},
        {id: 1, name: 'Cloudberry', fav: false},
        {id: 1, name: 'Coconut', fav: false},
        {id: 1, name: 'Cranberry', fav: false},
        {id: 1, name: 'Cucumber', fav: false},
        {id: 1, name: 'Currant', fav: false},
        {id: 1, name: 'Custard apple', fav: false},
        {id: 1, name: 'Damson', fav: false},
        {id: 1, name: 'Date', fav: false},
        {id: 1, name: 'Dragonfruit', fav: false},
        {id: 1, name: 'Durian', fav: false},
        {id: 1, name: 'Elderberry', fav: false},
        {id: 1, name: 'Feijoa', fav: false},
        {id: 1, name: 'Fig', fav: false},
        {id: 1, name: 'Goji berry', fav: false},
        {id: 1, name: 'Gooseberry', fav: false},
        {id: 1, name: 'Grape', fav: false},
        {id: 1, name: 'Grapefruit', fav: false},
        {id: 1, name: 'Guava', fav: true},
        {id: 1, name: 'Honeyberry', fav: false},
        {id: 1, name: 'Honeydew', fav: false},
        {id: 1, name: 'Huckleberry', fav: false},
        {id: 1, name: 'Jabuticaba', fav: false},
        {id: 1, name: 'Jackfruit', fav: false},
        {id: 1, name: 'Jambul', fav: false},
        {id: 1, name: 'Jujube', fav: false},
        {id: 1, name: 'Juniper berry', fav: false},
        {id: 1, name: 'Kiwi', fav: false},
        {id: 1, name: 'Kumquat', fav: false},
        {id: 1, name: 'Lemon', fav: false},
        {id: 1, name: 'Lime', fav: false},
        {id: 1, name: 'Longan', fav: false},
        {id: 1, name: 'Loquat', fav: false},
        {id: 1, name: 'Lychee', fav: false},
        {id: 1, name: 'Mandarine', fav: false},
        {id: 1, name: 'Mango', fav: true},
        {id: 1, name: 'Marionberry', fav: false},
        {id: 1, name: 'Melon', fav: false},
        {id: 1, name: 'Miracle fruit', fav: false},
        {id: 1, name: 'Mulberry', fav: false},
        {id: 1, name: 'Nance', fav: false},
        {id: 1, name: 'Nectarine', fav: false},
        {id: 1, name: 'Olive', fav: false},
        {id: 1, name: 'Orange', fav: true},
        {id: 1, name: 'Papaya', fav: true},
        {id: 1, name: 'Passionfruit', fav: false},
        {id: 1, name: 'Peach', fav: true},
        {id: 1, name: 'Pear', fav: true},
        {id: 1, name: 'Persimmon', fav: false},
        {id: 1, name: 'Physalis', fav: false},
        {id: 1, name: 'Plantain', fav: false},
        {id: 1, name: 'Plum', fav: true},
        {id: 1, name: 'Pomegranate', fav: false},
        {id: 1, name: 'Pomelo', fav: false},
        {id: 1, name: 'Purple mangosteen', fav: false},
        {id: 1, name: 'Quince', fav: false},
        {id: 1, name: 'Raisin', fav: false},
        {id: 1, name: 'Rambutan', fav: false},
        {id: 1, name: 'Raspberry', fav: true},
        {id: 1, name: 'Redcurrant', fav: false},
        {id: 1, name: 'Salak', fav: false},
        {id: 1, name: 'Salal berry', fav: false},
        {id: 1, name: 'Salmonberry', fav: false},
        {id: 1, name: 'Satsuma', fav: false},
        {id: 1, name: 'Solanum quitoense', fav: false},
        {id: 1, name: 'Star fruit', fav: false},
        {id: 1, name: 'Strawberry', fav: true},
        {id: 1, name: 'Tamarillo', fav: false},
        {id: 1, name: 'Tamarind', fav: false},
        {id: 1, name: 'Tangerine', fav: false},
        {id: 1, name: 'Ugli fruit', fav: false},
        {id: 1, name: 'Watermelon', fav: false},
        {id: 1, name: 'Yuzu', fav: false}
      ]
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
