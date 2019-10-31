<template>
  <div>
    <!-- 模板三 -->
    <div class="videoPost" v-if="item.type == 2">
      <div class="title">{{item.title}}</div>
      <div class="cover">
        <img :src="item.cover[0].url" alt />
        <div class="btn">
          <div class="iconfont iconshipin"></div>
        </div>
      </div>
      <div class="info">
        {{item.user.nickname}}
        {{item.comment_length}}跟帖
      </div>
    </div>
    <!-- 模板一 -->
    <div class="singleImg" v-else-if="item.cover.length>0&&item.cover.length<3">
      <div class="left">
        <div class="title">{{item.title}}</div>
        <div class="author">
          {{item.user.nickname}}
          <span>{{item.comment_length}}跟帖</span>
        </div>
      </div>
      <div class="right">
        <img :src="item.cover[0].url" alt />
      </div>
    </div>
    <!-- 模板二 -->
    <div class="multipImg" v-else-if="item.cover.length >= 3">
      <div class="title">{{item.title}}</div>
      <div class="covers">
        <img :src="item.cover[0].url" alt />
        <img :src="item.cover[1].url" alt />
        <img :src="item.cover[2].url" alt />
      </div>

      <div class="info">
        {{item.user.nickname}}
        {{item.comment_length}}跟帖
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style lang="less" scoped>
.singleImg {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.556vw;
  border-bottom: 1px solid #eee;
}
.left {
  flex: 1;
  padding-right: 2.778vw;
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .author {
    font-size: 3.889vw;
    color: #999;
    margin-top: 2.778vw;
  }
}
.right img {
  width: 33.333vw;
  height: 20.833vw;
  object-fit: cover;
}

.multipImg {
  padding: 5.556vw;
  border-bottom: 1px solid #eee;
  .covers {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    img {
      width: 33%;
      height: 20.556vw;
      object-fit: cover;
    }
  }
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .info {
    font-size: 3.889vw;
    color: #999;
    margin-top: 2.778vw;
  }
}

.videoPost {
  padding: 5.556vw;
  border-bottom: 1px solid #eee;
  .cover {
    margin-top: 10px;
    position: relative;
    img {
      object-fit: cover;
      width: 100%;
    }
    .btn {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .iconfont{
          width: 55px;
          height: 55px;
          line-height: 55px;
          border-radius: 50%;
          background-color: #ccc;
          color: #fff;
          font-size: 46px;
          text-align: center;
      }
    }
  }
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .info {
    font-size: 3.889vw;
    color: #999;
    margin-top: 2.778vw;
  }
}
</style>