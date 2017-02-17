<template>
  <div class="display-people">
    <md-whiteframe md-elevation="1dp" class="person" v-for="person in people">
      <div class="person-profile"><router-link to="/profile"><img :src="person.profile" alt=""></router-link></div>

      <div class="person-text-content">
        <div class="person-name">{{person.name}}</div>
        <div class="person-age">{{person.age}}</div>
        <div class="person-location">{{person.location}}</div>
        <div class="person-bio">{{person.bio}}</div>
        <div class="person-likeness"><md-spinner :md-size="100" :md-progress="person.likeness"></md-spinner><div class="spinner-percent">{{person.likeness}}</div></div>
      </div>

      <md-button class="md-fab md-mini" :class="{'md-clean': !person.following}" @click.native="followPerson(person.userID)">
        <md-icon>star</md-icon>
      </md-button>


      <!-- userID: 3,
      name: 'Baz Hamilton',
      profile: 'https://placeimg.com/48/48/people/8',
      bio: 'asdf',
      bio: 'asdf' -->
    </md-whiteframe>
  </div>
</template>
<script>
export default {
  props: ['people'],
  name: 'display-people',
  components: {
  },
  methods: {
    followPerson (id) {
      this.$emit('follow', id)
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.display-people {
  column-width: 200px;
  column-gap: 0;
  margin-top: 12px;
}
.person {
  margin: 12px 5px 0;
  background-color: white;
  width: 200px;
  display: inline-block;
  text-align: left;
  position: relative;

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
    padding: 12px;
    font-weight: bold;
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
    position: relative;
    width: 100px;
    height: 100px;
    margin: 12px auto;

    .spinner-percent {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      font-size: 20px;
      color: rgba(0,0,0,0.54)
    }
  }
}
</style>

<style lang="scss">
</style>
