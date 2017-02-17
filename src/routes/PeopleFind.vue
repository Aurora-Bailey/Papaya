<template>
  <div class="find-people using-sidebar">
    <div class="gl-narrow-wrapper-840">
      <display-people :people="people" @follow="followPerson"></display-people>
    </div>
  </div>
</template>
<script>
import DisplayPeople from '../components/DisplayPeople'

export default {
  name: 'find-people',
  components: {
    DisplayPeople
  },
  methods: {
    followPerson (id) {
      this.people[id].following = !this.people[id].following
    }
  },
  data () {
    return {
      people: [
        {
          userID: 0,
          name: 'Dmitrii Abramov',
          age: '32',
          location: 'Silicon Valley, CA',
          profile: 'https://pbs.twimg.com/profile_images/644529861004931072/ItiZQelK_400x400.jpg',
          bio: 'front-end engineer @facebook, musician, husband, christian. I build things together with @cpojer and play metal when i\'m not coding',
          following: false,
          likeness: 90
        },
        {
          userID: 1,
          name: 'Baz Hamilton',
          age: '65',
          location: 'San Francisco, CA',
          profile: 'https://placeimg.com/200/200/people/3',
          bio: 'Lorem ipsum dolor sit amet.',
          following: false,
          likeness: 70
        },
        {
          userID: 2,
          name: 'Thomas Pesquet',
          age: '65',
          location: 'San Francisco, CA',
          profile: 'https://pbs.twimg.com/profile_images/831136830745636865/PR5Py0ZR_400x400.jpg',
          bio: 'Européen Français, pilote de vaisseau spatial à l\'ESA en mission pour six mois sur l\'ISS / Euro-French spacecraft pilot at ESA, now on 6-month ISS mission',
          following: true,
          likeness: 70
        },
        {
          userID: 3,
          name: 'Baz Hamilton',
          age: '65',
          location: 'San Francisco, CA',
          profile: 'https://placeimg.com/200/200/people/4',
          bio: 'Lorem ipsum dolor sit amet.',
          following: false,
          likeness: 60
        },
        {
          userID: 4,
          name: 'Baz Hamilton',
          age: '65',
          location: 'San Francisco, CA',
          profile: 'https://placeimg.com/200/200/people/5',
          bio: 'Lorem ipsum dolor sit amet.',
          following: false,
          likeness: 40
        },
        {
          userID: 5,
          name: 'Baz Hamilton',
          age: '65',
          location: 'San Francisco, CA',
          profile: 'https://placeimg.com/200/200/people/6',
          bio: 'Lorem ipsum dolor sit amet.',
          following: false,
          likeness: 9
        },
        {
          userID: 6,
          name: 'Baz Hamilton',
          age: '65',
          location: 'San Francisco, CA',
          profile: 'https://placeimg.com/200/200/people/7',
          bio: 'Lorem ipsum dolor sit amet.',
          following: false,
          likeness: 0.45
        }
      ]
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('green')
    })
  }
}
</script>

<style lang="scss" scoped>
.find-people {
}
</style>

<style lang="scss">
</style>
