<template>
  <div>
    <postDetailHeader :post="post"/>
    <div class="item">
        <div class="video" v-if="post.type == 2">
            <video src="https://video.pearvideo.com/mp4/adshort/20191101/cont-1618354-14547591_adpkg-ad_sd.mp4" controls></video>
        </div>
      <div class="title">{{post.title}}</div>
      <div class="info" v-if="post.user">
        {{post.user.nickname}}
        2019-10-2
      </div>
      <div class="content" v-html="post.content" v-if="post.type != 2"></div>
      <div class="actionBtns">
        <div class="like">
          <span class="iconfont icondianzan"></span>
          112
        </div>
        <div class="wechat">
          <span class="iconfont iconweixin"></span>
          微信
        </div>
      </div>
    </div>
    <postDetailFooter />
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
      post: {}
    };
  },
  mounted() {
    this.$axios({
      url: "/post/" + this.postId,
      method: "get"
    }).then(res => {
      console.log(res.data);
      this.post = res.data.data;
    });
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
  .actionBtns{
      display: flex;
      margin: 5.556vw 0;
      justify-content: space-around;
      align-items: center;
      .like,.wechat {
          border: 1px solid #333;
          width: 80px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border-radius: 15px;
      }
      .iconweixin{
          color: #00c800;
      }
  }
}
.video {
    video{
        width: 100%;
    }
}
</style>