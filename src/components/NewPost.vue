<template>
  <div class="new-post">
    <md-dialog class="mod-md-full-dialog" md-open-from="#post-fab" md-close-to="#post-fab" @open="onOpen" @close="onClose" ref="dialog">
      <md-dialog-title>
        <h2 class="md-title gl-no-margin">New Post</h2>
      </md-dialog-title>

      <md-dialog-content>
        <img class="preview-pic" :src="post.picData" alt="">
        <md-input-container>
          <label>Upload Picture</label>
          <md-file v-model="post.pic" @change.native="getPicture" accept="image/*"></md-file>
        </md-input-container>
        <md-input-container>
          <label>Add a comment...</label>
          <md-textarea v-model="post.text" style="min-height: 72px;" maxlength="250"></md-textarea>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel()">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendPost()">Post</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-button id="post-fab" class="md-fab gl-corner-fab" @click.native="openDialog">
      <md-icon>edit</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  props: ['open'],
  name: 'new-post',
  data () {
    return {
      post: {
        pic: null,
        picData: null,
        text: ''
      }
    }
  },
  methods: {
    getPicture: function (event) {
      let input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()

        reader.onload = (e) => {
          this.post.picData = e.target.result
        }

        reader.readAsDataURL(input.files[0])
      }
    },
    cancel () {
      this.post.pic = null
      this.post.picData = null
      this.post.text = ''
      this.closeDialog()
    },
    sendPost () {
      this.$emit('post', {text: this.post.text, pic: this.post.picData})
      this.cancel()
    },
    openDialog () {
      this.$refs['dialog'].open()
    },
    closeDialog () {
      this.$refs['dialog'].close()
    },
    onOpen () {
      this.$emit('open')
    },
    onClose () {
      this.$emit('close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.preview-pic {
  max-width: 300px;
  max-height: 20vh;
  display: block;
  margin: auto;

  @media (max-height: 600px) {
    display: none;
  }
}
</style>
