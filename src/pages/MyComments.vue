<template>
  <div>
      <headerMiddle title="我的跟帖"/>
      <div class="item" v-for="(item,index) in CommentsList" :key="index">
          <div class="data">2019-10-4</div>
          <div class="parent" v-if="item.parent">
            <div class="name">回复：{{item.parent.user.nickname}}</div>
            <div class="parentContent">
                {{item.parent.content}}
            </div>
          </div>
          <div class="mainContent">
              {{item.content}}
          </div>
          <div class="postOrigin">
              原文：{{item.post.title}}
          </div>
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
            CommentsList:[]
        }
    },
    mounted(){
        this.$axios({
            url:'/user_comments',
            method:'get'
        }).then(res=>{
            console.log(res.data);
            this.CommentsList=res.data.data
        })
    }
}
</script>

<style lang="less" scoped>
    .item{
        font-size: 3.889vw;
        padding: 5.556vw;
        border-bottom: 1px solid #eee;
    }
    .data{
        color: #888;
    }
    .postOrigin{
        margin-top: 2.778vw;        
        color: #888;
    }
    .parent{
        margin-top: 2.778vw;
        color: #888;
        padding: 4.167vw;
        background-color: #eee;
        .parentContent{
        margin-top: 2.778vw;
        }
    }
    .mainContent{
        margin-top: 2.778vw;
    }
</style>