<template>
  <div>
      <headerMiddle title="我的关注"/>
      <div class="item" v-for="(item,index) in myFollows" :key="index">
          <!-- 这里是关注的框  用 v-for 遍历数据 -->
          <img :src="item.head_img?$axios.defaults.baseURL+item.head_img : '../../static/images/pic.jpg'" class="avatar">
          <div class="itemMiddle">
              <div class="name">{{item.nickname}}</div>
              <div class="data">2019-10-4</div>
          </div>
          <div class="btnCancel">取消关注</div>
      </div>
  </div>
</template>

<script>
import headerMiddle from '../components/headerMiddle'
export default {
    components:{
        headerMiddle
    },
    data(){
        return{
            myFollows : []
        }
    },
    mounted(){
        // 1.获取数据
        this.$axios({
            url:'user_follows',
            method:'get',
        }).then(res=>{
            console.log(res.data);
            this.myFollows = res.data.data;
        })
    }
}
</script>

<style lang="less" scoped>
    .item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5.556vw;
        border-bottom: 1px solid #eee;
    }
    .avatar{
        width: 11.111vw;
        border-radius: 50%
    }
    .itemMiddle{
        flex: 1;
        padding-left: 4.167vw;
        .data{
            font-size: 3.889vw;
            color: #888;
        }
    }
    .btnCancel{
        height: 8.333vw;
        line-height: 8.333vw;
        padding:  0 2.778vw;
        border-radius: 20px;
        background-color: #eee;
        color: #888;
    }
</style>