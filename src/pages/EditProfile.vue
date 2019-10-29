<template>
  <div>
      <headerMiddle title="编辑资料"></headerMiddle>
      <div class="avatar">
        <img src="../../static/images/pic.jpg" class="avatar-img">
      </div>
      <cellBar label="昵称" desc="柳东龙"/>
      <cellBar label="密码" desc="*****"/>
      <cellBar label="性别" desc="男"/>
  </div>
</template>

<script>
import headerMiddle from '../components/headerMiddle';
import cellBar from '../components/cellBar';

export default {
  components:{
    headerMiddle,
    cellBar
  },
  // 新的生命周期钩子函数 created() 
  // 跟 mounted()  的区别在于他是这个组件实例创建完毕之后马上执行，这时候还未挂载，模板当中的那些dom都还不能使用
  // 可以用来获取数据
  mounted(){
    
  }
}
</script>

<style lang="less" scoped>
  .avatar{
    padding: 8.333vw;
    text-align: center;
  }
  .avatar-img{
    width: 19.444vw;
    border-radius: 50%;
  }
</style>