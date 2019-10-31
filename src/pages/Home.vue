<template>
  <div>
    <homeHeader />

    <!-- 顶部tab组件 -->
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) in tabList" :key="index" :title="item.name">
        <div v-for="(postItem,index) in item.posts" :key="index">
          {{postItem.title}}
        </div>
      </van-tab>
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
        // 遍历每一个分类对象添加posts数组来存放文章列表
        res.data.data.forEach(element => {
          element.posts=[];
        });
        console.log(res.data);
        this.tabList = res.data.data;

        this.getPosts(this.active)
      });
    },
    getPosts(tabIndex){
      // 这里传入了 tab 的 index
      // 就可以通过 data 里面的 tabList 数据
      // 获取到对应的 分类 id
      const categoryId = this.tabList[tabIndex].id;
      // 根据这个 id 获取对应分类的文章列表
      this.$axios({
        url:'/post',
        method:'get',
        // 如果是get请求可以使用 params 的属性来带参数
        params:{
          category:categoryId
        }
      }).then(res=>{
        console.log(res.data);
        // 获取完了对应的文章列表数据
        // 把它放进对应的 tabIndex 的 tab 对象当中
        this.tabList[tabIndex].posts = res.data.data
      })
    }
  }
};
</script>

<style>
</style>