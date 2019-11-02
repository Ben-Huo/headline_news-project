<template>
  <div>
      <div class="commentWrapper">
          <div class="meta">
              <img :src="item.user.head_img ? $axios.defaults.baseURL + item.user.head_img : '../../static/images/pic.jpg'">
              <div class="info">
                  <div class="name">{{item.user.nickname}}</div>
                  <div class="time">两小时前</div>
              </div>
              <div class="btnReply">回复</div>
          </div>
          <div class="commentContent">{{item.content}}</div>
      </div>
      
  </div>
</template>

<script>
export default {
    props:['item']
}
</script>

<style lang="less" scoped>
    .commentWrapper{
        padding: 5.556vw 2.778vw;
        border-bottom: 1px solid #eee;
    }
    .meta{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 4.167vw;
        img{
            width: 12.5vw;
            height: 12.5vw;
            border-radius: 50%;
            margin-right: 2.778vw;
            object-fit: cover;
        }
        .info{
            flex: 1;
            .time{
                font-size: 3.889vw;
                color: #888;
            }
        }
        .btnReply{
            font-size: 3.889vw;
            color: #888;
        }
    }
</style>