<template>
  <div>
      <headerMiddle title="编辑资料"></headerMiddle>
      <div class="avatar">
        <img src="../../static/images/pic.jpg" class="avatar-img">
      </div>
      <cellBar label="昵称" desc="柳东龙"/>
      <cellBar label="密码" desc="*****"/>
      <cellBar label="性别" desc="男"/>
  </div>
</template>

<script>
import headerMiddle from '../components/headerMiddle';
import cellBar from '../components/cellBar';

export default {
  components:{
    headerMiddle,
    cellBar
  }
}
</script>

<style lang="less" scoped>
  .avatar{
    padding: 8.333vw;
    text-align: center;
  }
  .avatar-img{
    width: 19.444vw;
    border-radius: 50%;
  }
</style>