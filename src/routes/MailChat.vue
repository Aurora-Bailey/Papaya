<template>
  <div class="mail-chat using-sidebar">
    <div class="gl-narrow-wrapper-840">
      <md-whiteframe class="mail-chat-card">
        <div class="chat-header">
          <md-button class="md-icon-button" @click.native="$router.push('/mail')">
            <md-icon>arrow_back</md-icon>
          </md-button>
          <span class="chat-title">{{chat.title}}</span>
        </div>
        <div class="chat-text">
          <div class="chat-msg" v-for="msg in chat.messages" :class="{'swap-sides': msg.userID === 1}">
            <div class="chat-msg-header">
              <span class="chat-msg-date">{{msg.date | elapsed}}</span>
              <div class="chat-profile">
                <img :src="msg.avatar" alt="">
              </div>
              <span class="chat-msg-name">{{msg.name}}</span>
            </div>
            <p class="chat-msg-text">{{msg.text}}</p>
          </div>
        </div>
        <div class="chat-input">
          <form class="chat-make-comment" @submit.stop.prevent="pseudoMakeComment()">
            <div class="chat-profile">
              <img src="https://placeimg.com/24/24/people/1" alt="">
            </div>

            <md-input-container>
              <label>Say something...</label>
              <md-input v-model="chat.input" maxlength="250"></md-input>
            </md-input-container>
            <md-button class="md-icon-button" type="submit">
              <md-icon>send</md-icon>
            </md-button>
          </form>
        </div>
      </md-whiteframe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mail-chat',
  methods: {
    pseudoMakeComment () {
      this.chat.messages.push({userID: 1, avatar: 'https://placeimg.com/24/24/people/1', name: 'Baz Hamilton', text: this.chat.input, date: Date.now()})
      this.chat.input = ''
    }
  },
  data () {
    return {
      chat: {
        title: 'Chillin and playing DOTA 2',
        messages: [
          {userID: 1, name: 'Baz Hamilton', avatar: 'https://placeimg.com/24/24/people/1', text: 'A writer is an eerie plastic. Some assert that they were lost without the unpriced dentist that composed their french. A sailboat is a twelvefold visitor.', date: 1487008034000},
          {userID: 5, name: 'Thomas Pesquet', avatar: 'https://placeimg.com/24/24/people/5', text: 'I\'ll be sure to note that in my log. And blowing into maximum warp speed, you appeared for an instant to be in two places at once. How long can two people talk about nothing?', date: 1487008034000},
          {userID: 5, name: 'Dmitrii Abramov', avatar: 'https://placeimg.com/24/24/people/4', text: 'European minnow priapumfish mosshead warbonnet shrimpfish bigscale. Cutlassfish porbeagle shark ricefish walking catfish glassfish Black swallower.', date: 1487008034000}
        ],
        input: ''
      }
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
.mail-chat {
}
.mail-chat-card {
  background-color: white;
  padding: 24px;
  margin: 24px 5px 5px;
}

.chat-header {
  display: flex;
  align-items: center;

  .chat-title {
    flex: 1;
    font-size: 1.2em;
    line-height: 1.4em;
    text-align: center;
  }
}

.chat-text {
  padding: 24px 0;
}
.chat-msg {
  padding: 10px;
  position: relative;
  .chat-msg-header {
    // border-top: 1px solid rgba(0,0,0,0.12);
    padding: 8px 0;
  }
  .chat-msg-name {
    line-height: 24px;
    font-weight: bold;
    vertical-align: top;
    padding: 0 5px;
  }
  .chat-msg-date {
    line-height: 24px;
    float: right;
  }

  .chat-msg-text {
    vertical-align: top;
    white-space: pre-line;
    margin: 0;
  }

  .chat-profile {
    vertical-align: top;
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
  }

  &.swap-sides {
    .chat-profile {
      float: right;
    }
    .chat-msg-name {
      float: right;
    }
    .chat-msg-date {
      float: none;
    }
  }
}

.chat-profile {
  border-radius: 100px;
  overflow: hidden;
  display: inline-block;
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  user-select: none;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.chat-make-comment {
  padding: 5px 15px;
  overflow: auto;
  display: flex;
  align-items: center;

  .chat-profile {
    margin-right: 8px;
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
  }
}
</style>

<style lang="scss">
</style>
