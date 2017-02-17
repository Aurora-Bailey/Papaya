<template>
  <div class="display-posts">
    <new-post @post="makeNewPost" v-if="postable"></new-post>

    <md-whiteframe md-elevation="4dp" class="post" v-for="post in posts">
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
</template>
<script>
import NewPost from '../components/NewPost'

export default {
  props: ['postable'],
  name: 'display-posts',
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
  }
}
</script>

<style lang="scss" scoped>
.display-posts {
}
.post {
  margin: 24px 5px 5px;
  background-color: white;

  .remark-text {
    white-space: pre-line;
    margin: 0;
  }

  .post-profile {
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

  .post-head {
    padding: 15px;
    display: flex;
    align-items: center;

    .post-name {
      flex: 1;
      padding-left: 8px;
    }
    .post-date {
      color: rgba(0,0,0,0.54);
    }
  }

  .post-body {
    .post-remark {
      padding: 15px;
    }
    .post-pic {
      display: block;
      width: 100%;
      margin-bottom: 10px;

      img {
        width: 100%
      }
    }
    .post-comments {

      .comment-head {
        padding: 5px 15px;
        display: flex;
        align-items: center;

        .post-profile {
          width: 24px;
          height: 24px;
          min-width: 24px;
          min-height: 24px;
        }
        .comment-name {
          flex: 1;
          padding-left: 8px;
        }
        .comment-date {
          color: rgba(0,0,0,0.54);
        }
      }
      .comment-remark {
        padding: 5px 15px 5px 48px;
      }
    }
    .post-controls {
      color: rgba(0,0,0,0.38);
      padding: 15px;
      display: flex;
    }
    .post-make-comment {
      padding: 5px 15px;
      overflow: auto;
      display: flex;
      align-items: center;

      .post-profile {
        margin-right: 8px;
      }
    }
  }
}
</style>

<style lang="scss">
</style>
