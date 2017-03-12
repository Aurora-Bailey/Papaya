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

      <div class="person-likeness"><md-spinner :md-size="100" :md-progress="person.weight"></md-spinner><div class="spinner-percent">{{person.weight}}</div></div>

      <md-button class="md-fab md-mini" :class="{'md-clean': !person.following}" @click.native="followPerson(person.uid)">
        <md-icon>star</md-icon>
      </md-button>
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
  margin-top: 12px;
  text-align: center;
}
.person {
  margin: 12px 5px 0;
  background-color: white;
  width: 200px;
  height: 520px;
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
    width: 100px;
    height: 100px;
    margin: 12px auto;
    position: absolute;
    bottom: 12px;
    right: 0;
    left: 0;

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
