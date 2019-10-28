<template>
  <div class="wrapper" @click="jumpPage">
      <div class="cell">
          <div class="left">{{label}}</div>
          <div class="right">{{desc}}</div>
          <span class="iconfont iconjiantou1"></span>
      </div>
  </div>
</template>

<script>
export default {
    props:[
        'label',
        'desc'
    ],
    methods:{

        jumpPage(){
            // 触发一个自定义事件，告诉父组件这个按钮被点击了
            this.$emit('jump',this.label)
        }
    }
}
</script>

<style scoped lang="less">
    .wrapper{
        padding-left: 5.556vw;
    }
    .cell{
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 13.889vw;
        line-height: 13.889vw;
        .right{
            flex: 1;
            text-align: right;
            font-size: 14px;
            color: #999;
        }
        .iconjiantou1{
            font-size: 14px;
            color: #999;
            padding: 0 10px;
        }
    }
</style>