<template>
  <div class="btn" @click="send">{{text}}</div>
</template>

<script>
export default {
  props: ["text"],
  methods: {
    send() {
      this.$emit("send");
    }
  }
};
</script>

<style lang="less" scoped>
.btn {
  background-color: #cc3300;
  height: 13.333vw;
  line-height: 13.333vw;
  color: #fff;
  text-align: center;
  border-radius: 6.667vw;
}
</style>