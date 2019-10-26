<template>
  <div class="container">
    <!-- 关闭按钮 -->
    <div class="closeBtn">
      <span class="iconfont iconicon-test"></span>
    </div>
    <!-- logo -->
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>
    <!-- 用户名输入框 -->
    <div class="inputName">
      <authInput
        type="text"
        placeholder="请输入手机号"
        rule="^\d{4,16}$"
        err_message="请输入正确手机号"
        @input="setUserName"
      ></authInput>
    </div>
    <!-- 密码输入框 -->
    <div class="inputPwd">
      <authInput
        type="password"
        placeholder="请输入密码"
        rule="^\d{3,16}$"
        err_message="请输入正确密码"
        @input="setPassword"
      ></authInput>
    </div>
    <!-- 登陆按钮 -->
    <div class="btn">
      <authBtn text="登陆" @send="sendLogin" />
    </div>
    <!-- 跳转注册 -->
    <div class="register">
      还没有账号？
      <router-link to="/register">立即注册</router-link>
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
      password: ""
    };
  },
  methods: {
    setUserName(name) {
      this.username = name;
    },
    setPassword(password) {
      this.password = password;
    },
    sendLogin() {
      console.log("登陆按钮被点击");
      console.log(`应该发送用户名${this.username}和密码${this.password}`);
      // 发送ajax请求
      this.$axios({
        url: "/login",
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        console.log(res);
        if (res.data.statusCode && res.data.statusCode == 401) {
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
// scoped是局部css声明
.container {
  padding: 0 5.556vw;
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
  .btn {
    margin-top: 10.556vw;
  }
  .register {
    text-align: center;
    margin-top: 6.667vw;
  }
}
</style>