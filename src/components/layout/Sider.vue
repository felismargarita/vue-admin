<template>
  <a-layout-sider class="vue-admin-side">
    <a-menu theme="dark">
      <a-menu-item key="1" @click="go('page1')">菜单1</a-menu-item>
      <a-menu-item key="2" @click="go('page2')">菜单2</a-menu-item>
      <a-menu-item key="3">菜单3</a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
export default {
  name:'Sider',
  methods:{
    go(name){
      this.$router.push({name})
    }
  }
}
</script>
<style  scoped>
.vue-admin-side {
  min-height: 100vh;
}
</style>