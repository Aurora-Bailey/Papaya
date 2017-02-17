<template>
  <div class="profile using-sidebar">
    <md-whiteframe class="profile-section" md-elevation="1dp">
      <div class="gl-narrow-wrapper-600">
        <div class="profile-content">
          <div class="profile-pic">
            <img :src="person.pic" alt="">
            <md-spinner :md-size="250" :md-stroke="1.2" :md-progress="person.likeness"></md-spinner>
          </div>
          <div class="profile-info">
            <md-button class="profile-follow md-fab" :class="{'md-clean': !person.following}" @click.native="person.following=!person.following"><md-icon>star</md-icon></md-button>
            <div class="profile-person">
              <div class="profile-name">{{person.name}}</div>
              <div class="profile-age">{{person.age}}</div>
              <div class="profile-location">{{person.location}}</div>
            </div>
            <div>
              <p class="profile-bio">{{person.bio}}</p>
            </div>
          </div>
        </div>
        <div class="common-tags-title">
          Tags both you and {{person.name}} have in common
        </div>
        <div class="common-tags" :class="{'show-all-tags': showAllTags}">
          <div class="gl-chip" v-for="tag in tagsFiltered" :class="{'chip-highlight': tag.fav}">
            <span class="chip-text">{{tag.name}}</span>
          </div>
        </div>
      </div>
      <div class="expand-tags-button" @click="showAllTags=!showAllTags">
        <md-ink-ripple />
        <md-icon class="md-size-2x" v-if="showAllTags">expand_less</md-icon>
        <md-icon class="md-size-2x" v-if="!showAllTags">expand_more</md-icon>
      </div>
    </md-whiteframe>
    <div class="gl-narrow-wrapper-600">
      <display-posts :postable="false"></display-posts>
    </div>
  </div>
</template>
<script>
import DisplayPosts from '../components/DisplayPosts'

export default {
  name: 'profile',
  components: {
    DisplayPosts
  },
  computed: {
    tagsFiltered () {
      if (this.showAllTags) return this.person.tags

      let limit = 20
      let deepCopy = JSON.parse(JSON.stringify(this.person.tags))
      deepCopy.sort((a, b) => {
        if (a.fav && !b.fav) return -1
        if (!a.fav && b.fav) return 1
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })

      let top = deepCopy.splice(0, limit)
      return top
    }
  },
  data () {
    return {
      showAllTags: false,
      person: {
        name: 'Dmitrii Abramov',
        age: '32',
        location: 'Silicon Valley, CA',
        pic: 'https://pbs.twimg.com/profile_images/644529861004931072/ItiZQelK_400x400.jpg',
        bio: 'front-end engineer @facebook, musician, husband, christian. I build things together with @cpojer and play metal when i\'m not coding',
        following: false,
        likeness: 70,
        tags: [
          {id: 1, name: 'Apple', fav: false},
          {id: 1, name: 'Apricot', fav: true},
          {id: 1, name: 'Avocado', fav: false},
          {id: 1, name: 'Banana', fav: false},
          {id: 1, name: 'Bilberry', fav: false},
          {id: 1, name: 'Blackberry', fav: false},
          {id: 1, name: 'Blackcurrant', fav: false},
          {id: 1, name: 'Blueberry', fav: false},
          {id: 1, name: 'Boysenberry', fav: false},
          {id: 1, name: 'Currant', fav: false},
          {id: 1, name: 'Cherry', fav: true},
          {id: 1, name: 'Cherimoya', fav: false},
          {id: 1, name: 'Cloudberry', fav: false},
          {id: 1, name: 'Coconut', fav: false},
          {id: 1, name: 'Cranberry', fav: false},
          {id: 1, name: 'Cucumber', fav: false},
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
          {id: 1, name: 'Raisin', fav: false},
          {id: 1, name: 'Grapefruit', fav: false},
          {id: 1, name: 'Guava', fav: true},
          {id: 1, name: 'Honeyberry', fav: false},
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
          {id: 1, name: 'Loquat', fav: false},
          {id: 1, name: 'Longan', fav: false},
          {id: 1, name: 'Lychee', fav: false},
          {id: 1, name: 'Mango', fav: true},
          {id: 1, name: 'Marionberry', fav: false},
          {id: 1, name: 'Melon', fav: false},
          {id: 1, name: 'Cantaloupe', fav: false},
          {id: 1, name: 'Honeydew', fav: false},
          {id: 1, name: 'Watermelon', fav: false},
          {id: 1, name: 'Miracle fruit', fav: false},
          {id: 1, name: 'Mulberry', fav: false},
          {id: 1, name: 'Nectarine', fav: false},
          {id: 1, name: 'Nance', fav: false},
          {id: 1, name: 'Olive', fav: false},
          {id: 1, name: 'Orange', fav: true},
          {id: 1, name: 'Blood orange', fav: false},
          {id: 1, name: 'Clementine', fav: false},
          {id: 1, name: 'Mandarine', fav: false},
          {id: 1, name: 'Tangerine', fav: false},
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
          {id: 1, name: 'Raspberry', fav: true},
          {id: 1, name: 'Salmonberry', fav: false},
          {id: 1, name: 'Rambutan', fav: false},
          {id: 1, name: 'Redcurrant', fav: false},
          {id: 1, name: 'Salal berry', fav: false},
          {id: 1, name: 'Salak', fav: false},
          {id: 1, name: 'Satsuma', fav: false},
          {id: 1, name: 'Star fruit', fav: false},
          {id: 1, name: 'Solanum quitoense', fav: false},
          {id: 1, name: 'Strawberry', fav: true},
          {id: 1, name: 'Tamarillo', fav: false},
          {id: 1, name: 'Tamarind', fav: false},
          {id: 1, name: 'Ugli fruit', fav: false},
          {id: 1, name: 'Yuzu', fav: false}
        ]
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('cyan')
    })
  }
}
</script>

<style lang="scss" scoped>
.profile {
  overflow: auto;
}
.profile-section {
  padding-top: 48px;
  background-color: white;
}
.profile-content {
  display: flex;
  align-items: center;
  padding: 0 5px;

  @media (max-width: 600px) {
    display: block;
    .profile-info {
      margin: 24px;
      padding: 0;
    }
  }
}
.profile-info {
  flex: 1;
  padding-left: 24px;
  position: relative;
}
.profile-follow {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
}
.profile-person {
  font-size: 1.2em;
  line-height:1.4em;
  .profile-name {
    display: inline-block;
    font-weight: bold;
  }
  .profile-age {
    display: inline-block;
    color: rgba(0,0,0,0.54)
  }
  .profile-location {
    color: rgba(0,0,0,0.54)
  }
}
.profile-bio {
  margin: 0;
  padding-top: 24px;
}
.profile-pic {
  width: 200px;
  min-width: 200px;
  height: 200px;
  min-height: 200px;
  margin: auto;
  position: relative;

  user-select: none;

  .md-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    border-radius: 200px;
    width: 100%;
    height: 100%;
    display: block;
  }
}
.common-tags-title {
  text-align: center;
  padding: 48px 5px 0;
  color: rgba(0,0,0,0.38)
}
.common-tags {
  padding: 0 5px;
  margin-top: 12px;
  max-height: 72px;
  overflow: hidden;
  transition: all 0.4s linear;

  &.show-all-tags {
    max-height: 50vh;
    overflow: auto;
  }
}
.expand-tags-button {
  text-align: center;
  height: 48px;
  position: relative;
  display: block;
  cursor: pointer;

  .md-icon {
    pointer-events: none;
    user-select: none;
  }
}
</style>

<style lang="scss">
</style>
