<template>
  <div class="container">
    <!-- 关闭按钮 -->
    <div class="closeBtn">
      <span @click="$router.back()" class="iconfont iconjiantou"></span>
    </div>
    <!-- logo -->
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>
    <!-- 用户名输入框 -->
    <div class="userName">
      <authInput
        type="text"
        placeholder="手机号"
        rule="^\d{4,16}$"
        err_message="请输入正确手机号"
        @input="setUserName"
      ></authInput>
    </div>
    <!-- 昵称输入框 -->
    <div class="nickName">
      <authInput
        type="text"
        placeholder="昵称"
        rule="^\d{4,16}$"
        err_message="请输入正确昵称"
        @input="setNickName"
      ></authInput>
    </div>
    <!-- 密码输入框 -->
    <div class="userPwd">
      <authInput
        type="password"
        placeholder="密码"
        rule="^\d{3,16}$"
        err_message="请输入正确密码"
        @input="setPassword"
      ></authInput>
    </div>
    <!-- 注册按钮 -->
    <div class="btn">
      <authBtn text="注册" @send="sendRegister" />
    </div>
  </div>
</template>

<script>
import authInput from "../components/authInput";
import authBtn from "../components/authBtn";
export default {
  components: {
    authInput: authInput,
    authBtn: authBtn
  },
  data() {
    return {
      username: "",
      nickname: "",
      password: ""
    };
  },
  methods: {
    setUserName(name) {
      this.username = name;
    },
    setNickName(nickname) {
      this.nickname = nickname;
    },
    setPassword(password) {
      this.password = password;
    },
    sendRegister() {
      // 发送ajax请求
      this.$axios({
        url: "http://127.0.0.1:3000/register",
        method: "post",
        data: {
          username: this.username,
          nickname: this.nickname,
          password: this.password
        }
      }).then(res => {
        console.log(res);
        if (res.data.statusCode && res.data.statusCode == 400) {
          this.$toast.fail(res.data.message);
        } else {
          this.$toast.success(res.data.message);
        }
      });
    }
  }
};
</script>

<style lang='less' scoped>
.container {
  padding: 0 5.556vw;
}
.closeBtn {
  padding-top: 20px;
  .iconfont {
    font-size: 7.5vw;
  }
}

.logo {
  display: flex;
  justify-content: center;
  .iconfont {
    font-size: 35vw;
    color: #d81e06;
  }
}
</style>