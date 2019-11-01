<template>
  <div class="footer">
      <!-- 未激活状态 -->
      <div class="disable" v-if="false">
          <input type="text" class="commentInput" placeholder="写跟帖">
          <div class="commentIcon">
              <span class="iconfont iconpinglun-"></span>
              <div class="commentNumber">1020</div>
          </div>
          <span class="iconfont iconshoucang"></span>
          <span class="iconfont iconfenxiang"></span>
      </div>

      <!-- 激活状态 -->
      <div class="enable">
          <textarea class="commentArea" rows="3" placeholder="回复"></textarea>
          <div class="btnSend">
              发送
          </div>
      </div>
  </div>
</template>

<script>
export default {

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
</style>