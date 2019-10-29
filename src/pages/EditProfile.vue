<template>
  <div>
    <headerMiddle title="编辑资料"></headerMiddle>
    <div class="avatar">
      <img
        :src="profile.head_img?this.$axios.defaults.baseURL+profile.head_img : '../../static/images/pic.jpg'"
        class="avatar-img"
      />
    </div>
    <cellBar label="昵称" :desc="profile.nickname" @jump="isShowNickname = true" />
    <cellBar label="密码" desc="*****" />
    <cellBar label="性别" :desc="profile.gender" />

    <!-- v-model 控制是否显示  title  控制标题   show-cancel-button  控制是否显示取消确认按钮   confirm  是点击确认按钮事件 -->
    <van-dialog v-model="isShowNickname" title="编辑昵称" show-cancel-button @confirm="editNickname">
      <!-- 这里要嵌入一个输入框 -->
      <van-field v-model="newNickname" placeholder="请输入昵称" />
    </van-dialog>
  </div>
</template>

<script>
import headerMiddle from "../components/headerMiddle";
import cellBar from "../components/cellBar";

export default {
  components: {
    headerMiddle,
    cellBar
  },
  data() {
    return {
      isShowNickname: false,
      newNickname: "",
      profile: {}
    };
  },
  methods: {
    loadPage() {
      // 发送ajax请求
      this.$axios({
        url: "/user/" + localStorage.getItem("user_id"),
        method: "get",
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then(res => {
        console.log(res);
        // 数据获取完毕，用户数据在res.data.data里面
        this.profile = res.data.data;
        console.log(this.profile);
        this.profile.gender = this.profile.gender == 1 ? "男" : "女";
      });
    },
    editNickname() {
      // 获取到了新昵称  this.newNickname
      console.log("点击了确认按钮", this.newNickname);
      this.$axios({
        url: "/user_update/" + localStorage.getItem("user_id"),
        method: "post",
        headers: {
          Authorization: localStorage.getItem("token")
        },
        data: {
          nickname: this.newNickname
        }
      }).then(res => {
        console.log(res.data);
        this.loadPage()
      });
    }
  },
  // 新的生命周期钩子函数 created()
  // 跟 mounted()  的区别在于他是这个组件实例创建完毕之后马上执行，这时候还未挂载，模板当中的那些dom都还不能使用
  // 可以用来获取数据
  mounted() {
    // 将读取数据的方法封装起来，每一次修改都重新读取一遍数据
    this.loadPage()
  }
};
</script>

<style lang="less" scoped>
.avatar {
  padding: 8.333vw;
  text-align: center;
}
.avatar-img {
  width: 19.444vw;
  border-radius: 50%;
}
</style>