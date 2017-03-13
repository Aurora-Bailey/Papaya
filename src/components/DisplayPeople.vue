<template>
  <div class="display-people">
    <md-whiteframe md-elevation="1dp" class="person" v-for="person in people">
      <div class="person-profile"><router-link :to="'/profile/' + person.uid"><img :src="person.pictureURL" alt=""></router-link></div>

      <div class="person-text-content">
        <div class="person-name">{{person.displayName}}</div>
        <div class="person-age">{{person.age}}</div>
        <div class="person-location">{{person.locationName}}</div>
        <div class="person-bio">{{person.bio}}</div>
      </div>
      <div class="person-likeness" @click="openTags(person.tags)">
        <span class="person-weight my-weight">
          {{person.mw}}
          <md-tooltip md-direction="bottom">Weight I gave to matching tags</md-tooltip>
        </span>
        /
        <span class="person-weight your-weight">
          {{person.yw}}
          <md-tooltip md-direction="bottom">Weight {{person.displayName}} gave to matching tags</md-tooltip>
        </span>
      </div>

      <md-button class="md-fab md-mini" :class="{'md-clean': !person.following}" @click.native="followPerson(person.uid)">
        <md-icon>star</md-icon>
      </md-button>
    </md-whiteframe>

    <md-dialog class="mod-md-full-dialog viewtags-dialog" ref="ref-viewtags-dialog" @close="onCloseTags()">
      <md-dialog-content>
        <div class="dialog-tag-container">
          <div class="gl-chip" v-for="tag in tagsInDialog" :class="{'chip-highlight-red': tag.l === 1, 'chip-highlight-blue': tag.l === 2, 'chip-highlight-purple': tag.l === 3}">
            <span class="chip-text">{{tag.n}} {{tag.w}}</span>
          </div>
        </div>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click.native="$refs['ref-viewtags-dialog'].close()">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>
<script>
export default {
  props: ['people'],
  name: 'display-people',
  components: {
  },
  methods: {
    openTags (tags) {
      // this.tagOpen = tagIndex
      this.tagsInDialog = tags
      this.$refs['ref-viewtags-dialog'].open()
    },
    onCloseTags () {
      this.tagsInDialog = []
    },

    followPerson (id) {
      this.$emit('follow', id)
    }
  },
  data () {
    return {
      tagsInDialog: []
    }
  }
}
</script>

<style lang="scss" scoped>
.display-people {
  margin-top: 12px;
  text-align: center;
}
.dialog-tag-container {
  max-width: 480px;
  text-align: center;
}
.person {
  margin: 12px 5px 0;
  background-color: white;
  width: 200px;
  height: 470px;
  display: inline-block;
  text-align: left;
  position: relative;
  vertical-align: top;
  padding-bottom: 136px;

  .person-profile {
    width: 200px;
    height: 200px;
    overflow: hidden;

    img {
      height: 100%;
      display: block;
    }
  }

  .md-fab {
    position: absolute;
    top: 180px;
    right: 6px;
    margin: 0;
  }

  .person-text-content {
    margin: 12px;
    font-weight: bold;
    max-height: 172px;
    overflow: hidden;
  }
  .person-name {
    display: inline-block;
  }
  .person-age {
    display: inline-block;
    color: rgba(0,0,0,0.54)
  }
  .person-location {
    display: inline-block;
    color: rgba(0,0,0,0.54)
  }
  .person-bio {
    font-weight: normal;
    padding-top: 12px;
  }
  .person-likeness {
    height: 50px;
    margin: 12px auto;
    position: absolute;
    bottom: 12px;
    right: 0;
    left: 0;
    cursor: pointer;
    color: rgba(0,0,0,0.54);
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: rgba(0,0,0,0.87);
    }

    .person-weight {
      font-size: 24px;
      padding: 5px;
      font-weight: bold;

      &.your-weight {
        font-size: 18px;
      }
    }
  }
}
</style>

<style lang="scss">
</style>
