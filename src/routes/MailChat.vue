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
      </md-whiteframe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mail-chat',
  data () {
    return {
      chat: {
        title: 'Chillin and playing DOTA 2'
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
</style>

<style lang="scss">
</style>
