<template>
  <div class="footer">
      <!-- 未激活状态 -->
      <div class="disable" v-if="!isFocus">
          <input type="text" class="commentInput" placeholder="写跟帖" @focus="showArea()">
          <div class="commentIcon">
              <span class="iconfont iconpinglun-"></span>
              <div class="commentNumber">1020</div>
          </div>
          <span class="iconfont iconshoucang" :class="{red:post.has_star}" @click="isStar"></span>
          <span class="iconfont iconfenxiang"></span>
      </div>

      <!-- 激活状态 -->
      <div class="enable" v-if="isFocus">
          <textarea class="commentArea" rows="3" placeholder="回复" @blur="isFocus = false" ref="commentArea"></textarea>
          <div class="btnSend">
              发送
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['post'],
    data(){
        return{
            isFocus:false
        }
    },
    methods:{
        showArea(){
            this.isFocus = true;
            // 这里即使你改变了 data 数据
            // vue 是会等你的剩余代码执行完了才会更新页面
            // 所以你现在是获取不到这个被 v-if 抹去的 dom
            // 有一个函数可以设置一个异步回调,告诉 vue 等待我们下一次渲染完毕的时候再执行回调函数
            this.$nextTick(()=>{
                // 这个函数是告诉 vue 在下一次渲染完毕的时候
                // 再执行这段代码  一般用在这些代码强烈依赖于渲染后的页面状态的那种代码
                this.$refs.commentArea.focus();
            })
        },
        isStar(){
            this.$axios({
                url:'/post_star/'+ this.post.id,
                method:'get'
            }).then(res=>{
                console.log(res.data);
                if(res.data.message == '收藏成功'){
                    this.post.has_star = true;
                }else if(res.data.message=='取消成功'){
                    this.post.has_star = false;
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    .disable{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        input{
            background-color: #d7d7d7;
            width: 180px;
            height: 31px;
            line-height: 31px;
            border-radius: 15.5px;
            font-size: 14px;
            border: none;
            outline: none;
            padding: 15px;
            box-sizing: border-box;
            color: #666;
        }
        .iconfont{
            font-size: 23px;
        }
        .commentIcon{
            position: relative;
            .commentNumber{
                position: absolute;
                top: -4px;
                left: 4px;
                height: 16px;
                line-height: 16px;
                font-size: 12px;
                background-color: red;
                color: #fff;
                border-radius: 8px;
                padding: 0 2px;
            }
        }
    }
    .enable{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 2.778vw;
        .commentArea{
            width: 290px;
            border: none;
            outline: none;
            background-color: #d7d7d7;
            color: #666;
            padding: 16px;
            border-radius: 10px;
            box-sizing: border-box;
        }
        .btnSend{
            background-color: red;
            color: #fff;
            font-size: 14px;
            padding: 0 15px;
            height: 30px;
            line-height: 30px;
            border-radius: 15px;
        }
    }
    .red{
        color: red;
    }
</style>