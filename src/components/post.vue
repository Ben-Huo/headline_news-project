<template>
  <div>
    <div class="singleImg">
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
  padding-right: 10px;
  .title{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp:2;
      overflow: hidden;
  }
  .author {
    font-size: 3.889vw;
    color: #999;
    margin-top: 10px;
  }
}
.right img {
  width: 33.333vw;
  height: 20.833vw;
  object-fit: cover;
}
</style>