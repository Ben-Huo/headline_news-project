<template>
  <div>
      <div class="profile" @click="$router.push('/editprofile')">
          <img :src="user_info.head_img?this.$axios.defaults.baseURL+user_info.head_img : '../../static/images/pic.jpg'" alt="">
          <div class="profile_middle">
              <div class="name">
                  <span v-if="user_info.gender==1" class="iconfont iconxingbienv"></span>
                  <span v-else class="iconfont iconxingbienan"></span>
                  {{user_info.nickname}}
              </div>
              <div class="time">2019-10-1</div>
          </div>
          <span class="iconfont iconjiantou1"></span>
      </div>

      <cellBar label="我的关注" desc="关注的用户" @jump="$router.push('/myfollows')"/>
      <cellBar label="我的跟帖" desc="跟帖/回复" @jump="$router.push('/mycomments')"/>
      <cellBar label="我的收藏" desc="文章/视频" @jump="jumpToPage"/>
      <cellBar label="设置"  @jump="$router.push('/editprofile')"/>
      <cellBar label="退出登陆"  @jump="logOut"/>
  </div>
</template>

<script>
import cellBar from '../components/cellBar'
export default {
    components:{
        cellBar:cellBar
    },
    data(){
        return{
            user_info:{}
        }
    },
    methods:{ 
        jumpToPage(label){
            console.log(`跳转到${label}页面`);
        },
        logOut(){
            // 清除token和user_id
            localStorage.removeItem('token');
            localStorage.removeItem('user_id');
            // push 方法是跳转页面，会在浏览器留下历史纪录，返回时是逐页返回
            // replace 方法是替换当前页面的记录
            this.$router.replace('/login')
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
            // 数据获取完毕，用户数据在res.data.data里面
            this.user_info = res.data.data;
            console.log(this.user_info);
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