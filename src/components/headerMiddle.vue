<template>
  <div class="header">
      <span class="iconfont iconjiantou2" @click="$router.back()"></span>
      <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
    props:['title']
}
</script>

<style lang="less" scoped>
    .header{
        display: flex;
        justify-content: space-between;
        height: 50px;
        line-height: 50px;
    }
    .iconfont{
        padding:  0 2.778vw;
    }
    .title{
        flex: 1;
        text-align: center;
        margin-right: 5vw;
        font-weight: bold;
        font-size: 18px;
    }
</style>