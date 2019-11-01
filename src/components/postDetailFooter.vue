<template>
  <div class="footer">
      <!-- 未激活状态 -->
      <div class="disable">
          <input type="text" class="commentInput" placeholder="写跟帖">
          <div class="commentIcon">
              <span class="iconfont iconpinglun-"></span>
              <div class="commentNumber">1020</div>
          </div>
          <span class="iconfont iconshoucang"></span>
          <span class="iconfont iconfenxiang"></span>
      </div>

      <!-- 激活状态 -->
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
</style>