<template>
  <div class="profile-crop">
    <img class="picture-orig" id="upload-profile-image" src="" alt="">
  </div>
</template>

<script>
import Cropper from 'cropperjs'
let image = null
let cropper = null

export default {
  props: ['image'],
  name: 'profile-crop',
  data () {
    return {
      image_processed: ''
    }
  },
  watch: {
    image: function (e) {
      if (e === '') {
        this.clear()
      } else {
        this.process(e, (image) => {
          this.image_processed = image
        })
      }
    },
    image_processed: function (e) {
      console.log('emit')
      this.$emit('crop', e)
    }
  },
  methods: {
    process: function (data, cb) {
      this.clear()
      image.src = data

      cropper = new Cropper(image, {
        aspectRatio: 1,
        autoCropArea: 1,
        scalable: false,
        zoomable: false,
        movable: false,
        cropend (e) {
          let image = cropper.getCroppedCanvas({
            width: 200,
            height: 200
          }).toDataURL('image/jpeg', 0.7)
          cb(image)
        },
        ready (e) {
          let image = cropper.getCroppedCanvas({
            width: 200,
            height: 200
          }).toDataURL('image/jpeg', 0.7)
          cb(image)
        }
      })
    },
    clear () {
      if (cropper) cropper.destroy()
      if (image) image.src = ''
    }
  },
  mounted: function () {
    image = this.$el.children[0]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.picture-orig {
  min-width: 100%;
  max-width: 100%;
}
</style>
