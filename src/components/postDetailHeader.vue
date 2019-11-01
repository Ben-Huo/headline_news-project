<template>
  <div class="head">
      <div class="left">
          <span class="iconfont iconjiantou2" @click="$router.back()"></span>
          <span class="iconfont iconnew"></span>
      </div>
      <!-- 实现关注功能 添加一个 click 点击事件 -->
      <!-- 判断 post.has_follow 来实现 关注和已关注 标签的显示切换 -->
      <div class="btnFollowActive" v-if="post.has_follow == false" @click="isFollow">
          关注
      </div>
      <div class="btnFollow" v-else-if="post.has_follow == true" @click="unFollow">
          已关注
      </div>
  </div>
</template>

<script>
export default {
    props:['post'],
    methods:{
        isFollow(){
            // 发送ajax请求
            this.$axios({
                url:'/user_follows/'+ this.post.user.id,
                method:'get'
            }).then(res=>{
                console.log(res);
                // 如果 res.data.message == '关注成功' 请求完成
                if(res.data.message == '关注成功'){
                    this.post.has_follow = true;
                }

            })
        },
        unFollow(){
            this.$axios({
                url:'/user_unfollow/'+ this.post.user.id,
                method:'get'
            }).then(res=>{
                console.log(res);
                // 如果 res.data.message == '取消关注成功' 请求完成
                if(res.data.message == '取消关注成功'){
                    this.post.has_follow = false;
                }

            })
        },
    }
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