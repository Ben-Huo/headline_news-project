<template>
  <div>
    <postDetailHeader :post="post" />
    <div class="item">
      <div class="video" v-if="post.type == 2">
        <video
          src="https://video.pearvideo.com/mp4/adshort/20191101/cont-1618354-14547591_adpkg-ad_sd.mp4"
          controls
        ></video>
      </div>
      <div class="title">{{post.title}}</div>
      <div class="info" v-if="post.user">
        {{post.user.nickname}}
        2019-10-2
      </div>
      <div class="content" v-html="post.content" v-if="post.type != 2"></div>
      <div class="actionBtns">
        <div class="like" @click="like">
          <span
            class="iconfont icondianzan"
            :class="{
              red: post.has_like
          }"
          ></span>
          {{post.like_length}}
        </div>
        <div class="wechat">
          <span class="iconfont iconweixin"></span>
          微信
        </div>
      </div>
      <div class="comments">
        <h2 class="title">精彩跟帖</h2>
        <div class="emptyComment" v-if="this.comments.length == 0">暂无跟帖，抢占沙发</div>
        <div class="comment" v-else>
            <div v-for="(item,index) in comments" :key="index">
                
            </div>
        </div>
      </div>
    </div>

    <postDetailFooter :post="post" />
  </div>
</template>

<script>
import postDetailHeader from "../components/postDetailHeader";
import postDetailFooter from "../components/postDetailFooter";
export default {
  components: {
    postDetailHeader,
    postDetailFooter
  },
  data() {
    return {
      postId: this.$route.params.id,
      post: {},
      comments: []
    };
  },
  mounted() {
    //   获取文章数据
    this.$axios({
      url: "/post/" + this.postId,
      method: "get"
    }).then(res => {
      console.log(res.data);
      this.post = res.data.data;
    });
    // 获取评论
    this.getComments();
  },
  methods: {
    like() {
      //   实现点赞功能
      this.$axios({
        url: "/post_like/" + this.post.id,
        method: "get"
      }).then(res => {
        console.log(res.data);
        if (res.data.message == "点赞成功") {
          this.post.has_like = true;
          this.post.like_length += 1;
        } else if (res.data.message == "取消成功") {
          this.post.has_like = false;
          this.post.like_length -= 1;
        }
      });
    },
    getComments() {
      this.$axios({
        url: "/post_comment/" + this.postId,
        method: "get"
      }).then(res => {
        console.log(res.data);
        this.comments = res.data.data;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.item {
  padding: 2.778vw;
  padding-bottom: 27.778vw;
  .title {
    font-size: 5.556vw;
    color: #333;
    font-weight: 600;
  }
  .info {
    margin: 2.778vw 0;
    color: #888;
  }
  .content {
    line-height: 6.111vw;
    /deep/p {
      text-indent: 2em;
    }
    /deep/ img {
      max-width: 100%;
    }
  }
  .actionBtns {
    display: flex;
    margin: 5.556vw 0;
    justify-content: space-around;
    align-items: center;
    .like,
    .wechat {
      border: 1px solid #333;
      width: 80px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 15px;
    }
    .iconweixin {
      color: #00c800;
    }
  }
}
.video {
  video {
    width: 100%;
  }
}
.red {
  color: red;
}
.comments {
    padding-bottom: 22.222vw;
    border-top: 5px solid #eee;
    .title {
        padding-top: 11.111vw;
        font-weight: normal;
        text-align: center;
    }
    .emptyComment {
        height: 27.778vw;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #888;
        font-size: 14px;
    }
}
</style>