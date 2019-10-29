<template>
  <div>
    <headerMiddle title="编辑资料"></headerMiddle>
    <div class="avatar">
      <img
        :src="profile.head_img?this.$axios.defaults.baseURL+profile.head_img : '../../static/images/pic.jpg'"
        class="avatar-img"
      />
      <van-uploader :after-read="afterRead" class="fileUpLoader" />
    </div>
    <cellBar label="昵称" :desc="profile.nickname" @jump="isShowNickname = true" />
    <cellBar label="密码" desc="*****" @jump="isShowPwd = true" />
    <cellBar label="性别" :desc="profile.gender" @jump="isShowGender = true" />

    <!-- 下面存放组件  上面放内容 -->
    <!-- v-model 控制是否显示  title  控制标题   show-cancel-button  控制是否显示取消确认按钮   confirm  是点击确认按钮事件 -->
    <van-dialog
      v-model="isShowNickname"
      title="编辑昵称"
      show-cancel-button
      @confirm="editProfile({nickname:newNickname})"
    >
      <!-- 这里要嵌入一个输入框 -->
      <van-field v-model="newNickname" placeholder="请输入昵称" />
    </van-dialog>

    <!-- 修改密码 -->
    <van-dialog
      v-model="isShowPwd"
      title="编辑密码"
      show-cancel-button
      @confirm="editProfile({password:newPwd})"
    >
      <!-- 这里要嵌入一个输入框 -->
      <van-field v-model="newPwd" placeholder="请输入密码" />
    </van-dialog>

    <!-- 上拉菜单组件 -->
    <!-- actions 是一个数组，存放所有选项 -->
    <!-- select 是选择后的回调函数 -->
    <van-action-sheet
      v-model="isShowGender"
      :actions="actions"
      @select="selectGender"
      cancel-text="取消"
    />
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
      isShowPwd: false,
      isShowGender: false,
      newNickname: "",
      newPwd: "",
      actions: [{ name: "男" }, { name: "女" }],
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
    afterRead(fileItem){
      console.log(fileItem);
      // 这里是选择完图片后的回调方法，我们想要的图片就在 fileItem.file 里面
      // 只需要将这个文件转换成  api  要求的二进制形式，发送ajax 请求即可
      
    },
    editProfile(newData) {
      // 获取到了新昵称  this.newNickname
      console.log("点击了确认按钮", this.newNickname);
      this.$axios({
        url: "/user_update/" + localStorage.getItem("user_id"),
        method: "post",
        headers: {
          Authorization: localStorage.getItem("token")
        },
        data: newData
      }).then(res => {
        console.log(res.data);
        this.loadPage();
      });
    },
    selectGender(item) {
      // 这个点击之后的回调，可以接收一个参数
      // 是选择了的那个对象
      // 这个时候我们只需要使用 item.name 就可以获取用户选择的那个选项
      console.log("你选择了" + item.name);
      this.editProfile({
        gender: item.name == "男" ? 1 : 0
      });
      this.isShowGender = false;
    }
  },
  // 新的生命周期钩子函数 created()
  // 跟 mounted()  的区别在于他是这个组件实例创建完毕之后马上执行，这时候还未挂载，模板当中的那些dom都还不能使用
  // 可以用来获取数据
  mounted() {
    // 将读取数据的方法封装起来，每一次修改都重新读取一遍数据
    this.loadPage();
  }
};
</script>

<style lang="less" scoped>
.avatar {
  padding: 8.333vw;
  text-align: center;
  position: relative;
}
.fileUpLoader{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}
.avatar-img {
  width: 19.444vw;
  border-radius: 50%;
}
</style>