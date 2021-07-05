<template>
  <div class="logo">
    <img class="logo-img" :src="require('../assets/antd.svg')"/>
    <span class="logo-text">+</span>
    <img class="logo-img" :src="require('../assets/vue.png')"/>
  </div>
</template>
<script>
export default {
  name:'Logo',
}
</script>
<style lang="scss" scoped>
.logo {
  text-align: center;
  .logo-img {
    height: 32px;
    padding: 0 16px;
  }
  .logo-text {
    color: #fff;
    font-size: 24px;
  }
}

</style>