<template>
  <div>
      <div class="profile">
          <img src="../images/pic.jpg" alt="">
          <div class="profile_middle">
              <div class="name">
                  <span class="iconfont iconxingbienan"></span>
                  火星网友
              </div>
              <div class="time">2019-10-1</div>
          </div>
          <span class="iconfont iconjiantou1"></span>
      </div>

      <cellBar label="我的关注" desc="关注的用户" @jump="jumpToPage"/>
      <cellBar label="我的跟帖" desc="跟帖/回复" @jump="jumpToPage"/>
      <cellBar label="我的收藏" desc="文章/视频" @jump="jumpToPage"/>
      <cellBar label="设置"  @jump="jumpToPage"/>
  </div>
</template>

<script>
import cellBar from '../components/cellBar'
export default {
    components:{
        cellBar:cellBar
    },
    methods:{
        jumpToPage(label){
            console.log(`跳转到${label}页面`);
            
        }
    },
    mounted(){
        // 在这里应该发送请求，获取用户数据
        // user_id已经存储在 localStorage里面

        this.$axios({
            url: '/user/' + localStorage.getItem('user_id'),
            method:'get',
            headers:{
                Authorization : localStorage.getItem('token')
            }
        }).then(res=>{
            console.log(res);
            
        })
    }
}
</script>

<style lang="less" scoped>
    .profile{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8.333vw;
        border-bottom: 5px solid #eee;
        img{
            width: 19.444vw;
            border-radius: 50%;
        }
    }
    .profile_middle{
        flex: 1;
        padding-left: 2.778vw;
        font-size: 16px;
    }
    .time{
        font-size: 14px;
    }

</style>