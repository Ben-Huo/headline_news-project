<template>
  <div>
    <div class="singleImg" v-if="item.cover.length>0&&item.cover.length<3">
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

    <div class="multipImg" v-if="item.cover.length >= 3">
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


.multipImg{
    padding: 5.556vw;
    border-bottom: 1px solid #eee;
    .covers{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        img{
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
</style>