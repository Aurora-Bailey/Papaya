<template>
  <div class="home using-sidebar">
    <new-post @post="makeNewPost"></new-post>

    <div class="gl-narrow-wrapper-600">

      <md-whiteframe md-elevation="4dp" class="gl-post" v-for="post in posts">

        <div class="post-head">
          <div class="post-profile">
            <img :src="post.profile" alt="">
          </div>
          <span class="post-name">{{post.name}}</span>
          <span class="post-date">{{post.date | elapsed}}</span>
        </div>

        <div class="post-body">
          <div class="post-remark">
            <p class="remark-text">{{post.remark}}</p>
          </div>
          <div class="post-pic">
            <img :src="post.pic" alt="">
          </div>

          <div class="post-comments" v-for="com in post.comments">
            <div class="comment-head">
              <div class="post-profile">
                <img :src="com.profile" alt="">
              </div>
              <span class="comment-name">{{com.name}}</span>
              <span class="comment-date">{{com.date | elapsed}}</span>
            </div>

            <div class="comment-remark">
              <p class="remark-text">{{com.remark}}</p>
            </div>
          </div>

          <div class="post-controls" v-if="!post.addCommentToggle">
            <span style="flex: 1"></span>
            <md-button class="md-icon-button md-raised" @click.native="post.addCommentToggle=!post.addCommentToggle">
              <md-icon>comment</md-icon>
              <md-tooltip>Make a comment on this thread.</md-tooltip>
            </md-button>
          </div>

          <div class="post-make-comment" v-if="post.addCommentToggle">
            <div class="post-profile">
              <img :src="post.profile" alt="">
            </div>
            <md-input-container>
              <label>Add a comment...</label>
              <md-textarea v-model="post.addComment" maxlength="250"></md-textarea>
            </md-input-container>
            <md-button class="md-icon-button" :class="{'md-primary': post.addComment !== ''}" @click.native="pseudoMakeComment(post)">
              <md-icon v-if="post.addComment !== ''">arrow_forward</md-icon>
              <md-icon v-if="post.addComment === ''">clear</md-icon>
            </md-button>
          </div>

        </div>

      </md-whiteframe>

    </div>
  </div>
</template>
<script>
import NewPost from '../components/NewPost'

export default {
  name: 'home',
  components: {
    NewPost
  },
  methods: {
    pseudoMakeComment: function (post) {
      if (post.addComment === '') {
        post.addCommentToggle = false
        return false
      }

      post.comments.push({
        ownerID: post.ownerID,
        commentID: 5,
        date: Date.now(),
        name: post.name,
        profile: 'https://placeimg.com/24/24/people/8',
        remark: post.addComment
      })

      post.addComment = ''
      post.addCommentToggle = false
    },
    makeNewPost: function (post) {
      this.posts.unshift({
        name: 'Baz Hamilton',
        profile: 'https://placeimg.com/48/48/people/8',
        date: Date.now(),
        postID: 1,
        ownerID: 3,
        remark: post.text,
        pic: post.pic,
        comments: [],
        addComment: '',
        addCommentToggle: false
      })
    }
  },
  data () {
    return {
      posts: [
        {
          name: 'Baz Hamilton',
          profile: 'https://placeimg.com/48/48/people/8',
          date: 1487008034000,
          postID: 1,
          ownerID: 3,
          remark: 'Intel Core i7-6900K 20M Broadwell-E 8-Core 3.2 GHz LGA 2011-v3',
          pic: 'http://www.macsessed.com/postpics/intel-ivy-bridge.jpg',
          comments: [
            {
              ownerID: 8,
              commentID: 4,
              date: 1487008034000,
              name: 'Waylon Isadore',
              profile: 'https://placeimg.com/24/24/people/7',
              remark: 'Personal Rig Update - Luke\'s New PC ROCKS ( ͡° ͜ʖ ͡°)'
            },
            {
              ownerID: 8,
              commentID: 5,
              date: 1487008035000,
              name: 'Waylon Isadore',
              profile: 'https://placeimg.com/24/24/people/7',
              remark: 'Layouts over 1600dp wide may let the layout grow until it hits a max width. At this point, the grid may do one of the following:'
            }
          ],
          addComment: '',
          addCommentToggle: false

        },
        {
          name: 'Baz Hamilton',
          profile: 'https://placeimg.com/48/48/people/8',
          date: 1487008034000,
          postID: 1,
          ownerID: 3,
          remark: 'Intel Core i7-6900K 20M Broadwell-E 8-Core 3.2 GHz LGA 2011-v3',
          pic: 'http://www.macsessed.com/postpics/intel-ivy-bridge.jpg',
          comments: [
            {
              ownerID: 8,
              commentID: 4,
              date: 1487008034000,
              name: 'Waylon Isadore',
              profile: 'https://placeimg.com/24/24/people/7',
              remark: 'Personal Rig Update - Luke\'s New PC ROCKS ( ͡° ͜ʖ ͡°)'
            },
            {
              ownerID: 8,
              commentID: 5,
              date: 1487008035000,
              name: 'Waylon Isadore',
              profile: 'https://placeimg.com/24/24/people/7',
              remark: 'Layouts over 1600dp wide may let the layout grow until it hits a max width. At this point, the grid may do one of the following:'
            }
          ],
          addComment: '',
          addCommentToggle: false

        },
        {
          name: 'Baz Hamilton',
          profile: 'https://placeimg.com/48/48/people/8',
          date: 1487008034000,
          postID: 1,
          ownerID: 3,
          remark: 'Intel Core i7-6900K 20M Broadwell-E 8-Core 3.2 GHz LGA 2011-v3',
          pic: 'http://www.macsessed.com/postpics/intel-ivy-bridge.jpg',
          comments: [
            {
              ownerID: 8,
              commentID: 4,
              date: 1487008034000,
              name: 'Waylon Isadore',
              profile: 'https://placeimg.com/24/24/people/7',
              remark: 'Personal Rig Update - Luke\'s New PC ROCKS ( ͡° ͜ʖ ͡°)'
            },
            {
              ownerID: 8,
              commentID: 5,
              date: 1487008035000,
              name: 'Waylon Isadore',
              profile: 'https://placeimg.com/24/24/people/7',
              remark: 'Layouts over 1600dp wide may let the layout grow until it hits a max width. At this point, the grid may do one of the following:'
            }
          ],
          addComment: '',
          addCommentToggle: false

        }
      ]
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('blue')
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  overflow: auto;
}
</style>

<style lang="scss">
</style>
