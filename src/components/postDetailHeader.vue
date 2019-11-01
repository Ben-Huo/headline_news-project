<template>
  <div class="head">
      <div class="left">
          <span class="iconfont iconjiantou2" @click="$router.back()"></span>
          <span class="iconfont iconnew"></span>
      </div>
      <div class="btnFollowActive">
          关注
      </div>
      <!-- <div class="btnFollow">
          已关注
      </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 13.889vw;
        line-height: 13.889vw;
        padding: 0 2.778vw;
    }
    .left{
        display: flex;
        align-items: center;
    }
    .iconnew{
        font-size: 15vw;
        margin-left: 2.778vw;
    }
    .btnFollowActive{
        background-color: red;
        color: #fff;
        height: 7.222vw;
        line-height: 7.222vw;
        border-radius: 3.611vw;
        padding:0 3.611vw;
        border: 1px solid red;

    }
    .btnFollow{
        border: 1px solid #888;
        color: #777;
        height: 7.222vw;
        line-height: 7.222vw;
        border-radius: 3.611vw;
        padding:0 3.611vw;
    }
</style>