<template>
  <div>
    <homeHeader />

    <!-- 顶部tab组件 -->
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) in tabList" :key="index" :title="item.name">内容 {{item.name}}</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import homeHeader from "../components/homeHeader";
export default {
  components: {
    homeHeader
  },
  data() {
    return {
      // 获取 token 就可以判断有没有登陆，设置一个默认激活的当前分类
      active: localStorage.getItem('token')?1:0,
      tabList: []
    };
  },
  mounted() {
    this.initTabList();
  },
  methods: {
    initTabList() {
      this.$axios({
        url: "/category",
        method: "get"
      }).then(res => {
        console.log(res.data);
        this.tabList = res.data.data;
      });
    }
  }
};
</script>

<style>
</style>