<template>
  <div class="planning-events using-sidebar">
    <div class="gl-narrow-wrapper-600">
      <md-whiteframe md-elevation="4dp" class="event" v-for="event in events">
        <div class="event-likeness"><md-spinner :md-size="100" :md-progress="event.likeness"></md-spinner><div class="spinner-percent">{{event.likeness}}</div></div>
        <div class="event-title">
          {{event.title}}
        </div>
        <div class="event-logistics">
          {{event.locationPublic}}
          {{event.closeDate | date}}
        </div>
        <div class="event-description">
          {{event.description}}
        </div>
        <div class="private-container">
          <div class="event-private-location">
            <span class="private-pretext">Private Location: </span>
            {{event.locationPrivate}}
          </div>
          <div class="event-private-details">
            <span class="private-pretext">Private Details : </span>
            {{event.detailsPrivate}}
          </div>
        </div>
        <div class="event-gorup">
          <div class="event-person" v-for="person in event.peopleInGroup">
            <div class="person-open" v-if="person.open">
            </div>
            <router-link to="/profile" class="person-avatar" v-if="!person.open">
              <img :src="person.profile" alt="person.name">
              <md-tooltip md-direction="bottom">{{person.name}}</md-tooltip>
            </router-link>
          </div>
        </div>
        <div class="event-action">
          <router-link to="/mail/234/Chat_Room"><md-button class="md-raised md-icon-button md-accent"><md-icon>mail</md-icon></md-button></router-link>
          <md-button class="md-raised" @click.native="leaveEvent(event.eventID)">Leave Event</md-button>
        </div>
      </md-whiteframe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'planning-events',
  methods: {
    leaveEvent (eventID) {
      if (window.confirm('Are you sure you want to leave this event?')) {
        // only designed to remove 1 element
        this.events.forEach((e, i, o) => {
          if (e.eventID === eventID) {
            o.splice(i, 1)
          }
        })
      }
    }
  },
  data () {
    return {
      events: [
        {
          eventID: 0,
          ownerID: 3,
          postDate: 1487008034000,
          closeDate: Date.now() - 100000,
          title: 'Chillin and playing DOTA2',
          description: 'Mini LAN at Johns house. Bring your own computer. Also feel free to bring any snacks or food :)',
          locationPublic: 'Logan, UT',
          locationPrivate: '123N 456E Logan, UT',
          detailsPrivate: 'Nullam aliquet commodo laoreet. Sed urna ligula, placerat sit amet lectus eu, accumsan dictum mi. ',
          moderate: false,
          likeness: 95,
          peopleInGroup: [
            {open: false, userID: 1, name: 'Baz Hamilton', profile: 'https://placeimg.com/36/36/people/1'},
            {open: false, userID: 1, name: 'Baz Hamilton', profile: 'https://placeimg.com/36/36/people/2'},
            {open: false, userID: 1, name: 'Baz Hamilton', profile: 'https://placeimg.com/36/36/people/3'},
            {open: false, userID: 1, name: 'Baz Hamilton', profile: 'https://placeimg.com/36/36/people/4'},
            {open: true}
          ]
        },
        {
          eventID: 1,
          ownerID: 3,
          postDate: 1487008034000,
          closeDate: Date.now() - 100000,
          title: 'Maroon 5 Concert',
          description: 'We are planning on going to the Maroon 5 concert this weekend. Our car fits 7, we have 5 open seats. Note: You will need your own ticket.',
          locationPublic: 'Logan, UT',
          locationPrivate: '123N 456E Logan, UT',
          detailsPrivate: 'Nullam aliquet commodo laoreet. Sed urna ligula, placerat sit amet lectus eu, accumsan dictum mi. ',
          moderate: true,
          likeness: 20,
          peopleInGroup: [
            {open: false, userID: 1, name: 'Baz Hamilton', profile: 'https://placeimg.com/36/36/people/8'},
            {open: false, userID: 1, name: 'Baz Hamilton', profile: 'https://placeimg.com/36/36/people/7'},
            {open: true},
            {open: true},
            {open: true},
            {open: true},
            {open: true}
          ]
        },
        {
          eventID: 2,
          ownerID: 3,
          postDate: 1487008034000,
          closeDate: Date.now() - 100000,
          title: 'Lorem ipsum dolor sit amet',
          description: 'Suspendisse ultricies sed lorem non posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
          locationPublic: 'Logan, UT',
          locationPrivate: '123N 456E Logan, UT',
          detailsPrivate: 'Nullam aliquet commodo laoreet. Sed urna ligula, placerat sit amet lectus eu, accumsan dictum mi. ',
          moderate: true,
          likeness: 19,
          peopleInGroup: [
            {open: false, userID: 1, name: 'Baz Hamilton', profile: 'https://placeimg.com/36/36/people/8'},
            {open: false, userID: 1, name: 'Baz Hamilton', profile: 'https://placeimg.com/36/36/people/7'},
            {open: true},
            {open: true},
            {open: true},
            {open: true},
            {open: true},
            {open: true},
            {open: true},
            {open: true},
            {open: true},
            {open: true},
            {open: true},
            {open: true},
            {open: true},
            {open: true},
            {open: true},
            {open: true},
            {open: true},
            {open: true}
          ]
        },
        {
          eventID: 3,
          ownerID: 3,
          postDate: 1487008034000,
          closeDate: Date.now() - 100000,
          title: 'Lorem ipsum dolor sit amet',
          description: 'Suspendisse ultricies sed lorem non posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
          locationPublic: 'Logan, UT',
          locationPrivate: '123N 456E Logan, UT',
          detailsPrivate: 'Nullam aliquet commodo laoreet. Sed urna ligula, placerat sit amet lectus eu, accumsan dictum mi. ',
          moderate: false,
          likeness: 16,
          peopleInGroup: [
            {open: false, userID: 1, name: 'Baz Hamilton', profile: 'https://placeimg.com/36/36/people/8'},
            {open: false, userID: 1, name: 'Baz Hamilton', profile: 'https://placeimg.com/36/36/people/7'},
            {open: true},
            {open: true},
            {open: true},
            {open: true}
          ]
        },
        {
          eventID: 4,
          ownerID: 3,
          postDate: 1487008034000,
          closeDate: Date.now() - 100000,
          title: 'Lorem ipsum dolor sit amet',
          description: 'Suspendisse ultricies sed lorem non posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
          locationPublic: 'Logan, UT',
          locationPrivate: '123N 456E Logan, UT',
          detailsPrivate: 'Nullam aliquet commodo laoreet. Sed urna ligula, placerat sit amet lectus eu, accumsan dictum mi. ',
          moderate: true,
          likeness: 5,
          peopleInGroup: [
            {open: false, userID: 1, name: 'Baz Hamilton', profile: 'https://placeimg.com/36/36/people/8'},
            {open: false, userID: 1, name: 'Baz Hamilton', profile: 'https://placeimg.com/36/36/people/7'},
            {open: true},
            {open: true},
            {open: true},
            {open: true}
          ]
        }
      ]
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('orange')
    })
  }
}
</script>

<style lang="scss" scoped>
.planning-events {
}
.event {
  margin: 24px 5px 5px;
  background-color: white;
  position: relative;
  padding-left: 112px;
  overflow: auto;

  @media (max-width: 480px) {
    padding-left: 0;
  }

  .event-title {
    padding: 12px;
    font-weight: bold;
    font-size: 16px;
  }

  .event-logistics {
    padding: 0px 12px 12px;
  }

  .private-container {
    margin: 0px 12px 12px;
    padding-top: 12px;
    border: 2px solid rgba(0,0,0,0.12);
    border-radius: 5px;
  }
  .event-private-location {
    padding: 0px 12px 12px;
  }
  .event-private-details {
    padding: 0px 12px 12px;
  }
  .private-pretext {
    font-weight: bold;
  }

  .event-description {
    padding: 0px 12px 12px;
  }

  .event-gorup {
    padding: 0 12px 12px;

    .event-person {
      display: inline-block;
      padding: 2px;
    }

    .person-open {
      border-radius: 100px;
      overflow: hidden;
      display: inline-block;
      width: 36px;
      height: 36px;
      min-width: 36px;
      min-height: 36px;
      user-select: none;
      vertical-align: top;
      border: 2px solid rgba(0,0,0,0.54)
    }

    .person-avatar {
      border-radius: 100px;
      overflow: hidden;
      display: inline-block;
      width: 36px;
      height: 36px;
      min-width: 36px;
      min-height: 36px;
      user-select: none;
      vertical-align: top;

      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }

  .event-likeness {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 12px;
    bottom: 0;
    margin: auto;
    @media (max-width: 480px) {
      position: relative;
      top: auto;
      left: auto;
      right: auto;
      bottom: auto;
      margin: 12px auto;
    }

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

  .event-action {
    text-align: right;
    padding: 0 12px 12px;
  }
}
</style>

<style lang="scss">
</style>
