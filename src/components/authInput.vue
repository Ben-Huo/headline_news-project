<template>
  <div>
    <input
      class="input"
      :class="{error:!isOk}"
      :type="type"
      :placeholder="placeholder"
      @input="dataChange"
      @blur="showTips"
    />
  </div>
</template>

<script>
export default {
  // 声明接收的参数
  props: ["type", "placeholder", "rule", "err_message"],
  data() {
    return {
      isOk: true
    };
  },
  methods: {
    dataChange($event) {
      console.log("数据有变化");
      // 这里我们检测到数据有变化,需要调用正则表达式确认数据的合法性
      //1.创建正则表达式
      if (!$event.target.value) {
        this.isOk = true;
      } else {
        var regex = new RegExp(this.rule);
        //2.测试数据的合法性
        this.isOk = regex.test($event.target.value);
      }
      if (!this.isOk) {
        console.log(this.err_message);
      }
      // 每一次数据有所变化,都应该使用事件往外传输,告诉父组件,数据有了变化
      this.$emit("input", $event.target.value);
    },
    showTips() {
      // 只有当前的 isOk 为 false 才会弹窗
      if (!this.isOk) {
        this.$toast.fail(this.err_message);
      }
    }
  }
};
</script>

<style scoped lang="less">
.input {
  margin-bottom: 5.556vw;
  width: 100%;
  height: 38.002px;
  padding: 5.556vw;
  box-sizing: border-box;
  background-color: #fff;
  border: none;
  border-bottom: 1px solid #666;
  outline: none;
}
.error {
  border-color: red;
}
</style>