<template>
  <div class="mail using-sidebar">
    <div class="gl-narrow-wrapper-840">
      <md-whiteframe class="mail-card">
        <md-list class="md-double-line">
          <md-list-item v-for="msg in mail" :class="{'md-primary': !msg.read}">
            <md-ink-ripple />
            <router-link :to="'/mail/' + msg.id + '/' + urlTitle(msg.title)">
              <md-icon>{{msg.icon}}</md-icon>
              <div class="md-list-text-container">
                <span>{{msg.preview}}</span>
                <span>{{msg.title}}</span>
              </div>
              <div class="md-list-action">
                {{msg.active | elapsed}}
              </div>
            </router-link>
          </md-list-item>
        </md-list>
        <div class="load-more gl-center-button">
          <md-button class="" @click.native="loadMore">Load More</md-button>
        </div>
      </md-whiteframe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mail',
  methods: {
    urlTitle (text) {
      return text.replace(/\s/g, '_').replace(/\W/g, '').substr(0, 50)
    },
    loadMore (e) {
      this.mail.push(JSON.parse(JSON.stringify(this.mail[0])))
      this.mail.push(JSON.parse(JSON.stringify(this.mail[1])))
      this.mail.push(JSON.parse(JSON.stringify(this.mail[2])))
      this.mail.push(JSON.parse(JSON.stringify(this.mail[3])))
    }
  },
  data () {
    return {
      mail: [
        {
          id: 123,
          icon: 'event',
          preview: 'What If Everybody Lived In the Same Building?',
          title: 'Chillin and playing DOTA 2',
          read: true,
          active: 1487374823000

        },
        {
          id: 321,
          icon: 'person',
          preview: 'I won\'t be able to make it to our meeting tonight. You are welcome to hold it without me if you would like. I have to work late due to some of my new responsibilities and I have no idea if I\'ll get home before 10 or 11pm tonight. Let\'s try to get together on the weekend if possible.',
          title: 'Baz Hamilton',
          read: false,
          active: 1487374813000

        },
        {
          id: 231,
          icon: 'notifications',
          preview: 'Your location has been updated to "Logan, UT"',
          title: 'Notification',
          read: true,
          active: 1487353823000

        },
        {
          id: 132,
          icon: 'comment',
          preview: 'Layouts over 1600dp wide may let the layout grow until it hits a max width. At this point, the grid may do one of the following',
          title: 'Baz Hamilton - Intel Core i7-6900K 20M Broadwell-E 8-Core 3.2 GHz LGA 2011-v3',
          read: true,
          active: 1487174823000

        },
        {
          id: 132,
          icon: 'comment',
          preview: 'Test for a long title',
          title: 'I won\'t be able to make it to our meeting tonight. You are welcome to hold it without me if you would like. I have to work late due to some of my new responsibilities and I have no idea if I\'ll get home before 10 or 11pm tonight. Let\'s try to get together on the weekend if possible.',
          read: true,
          active: 1477374823000

        }
      ]
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('red')
    })
  }
}
</script>

<style lang="scss" scoped>
.mail {
}
.mail-card {
  background-color: white;
  padding: 24px;
  margin: 24px 5px 5px;
}
</style>

<style lang="scss">
</style>
