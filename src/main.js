// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
//引入组件库
import Vant from "vant";
import {Toast} from 'vant';

import axios from "axios";
// axios 设定基准路径
axios.defaults.baseURL ="http://127.0.0.1:3000"

//axios 拦截器 响应拦截器
axios.interceptors.response.use((res)=>{
  const {data,status} =res;
  const {message} = data;
  console.log('数据被拦截了',status,message);
  if(message && status == 401){
    Toast.fail(message)
  }
  return (res)
})
// 绑定到原型
Vue.prototype.$axios = axios;

axios.defaults.baseURL = "http://localhost:3000";

//注册组件库
Vue.use(Vant);
//引入组件样式文件
import "vant/lib/index.css";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
