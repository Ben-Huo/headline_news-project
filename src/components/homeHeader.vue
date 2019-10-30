<template>
  <div class="header">
    <span class="iconfont iconnew"></span>
    <div class="middle">
      <div class="search">
        <span class="iconfont iconsearch"></span>
        搜索新闻
      </div>
    </div>
    <span class="iconfont iconwode" @click="$router.push('/profile')"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  background-color: red;
  height: 13.889vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0 4.167vw;
}
.iconnew {
  font-size: 15vw;
}
.iconwode {
  font-size: 6.667vw;
}
.middle {
  flex: 1;
  .search {
    width: 210px;
    height: 34px;
    background-color: rgba(255, 255, 255, .4);
    line-height: 34px;
    border-radius: 17px;
    margin: 0 auto;
    text-align: center;
  }
}
</style>