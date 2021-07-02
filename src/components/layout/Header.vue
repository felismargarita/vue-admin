<template>
  <a-layout-header class="vue-admin-header">
    <span class="vue-admin-dropdown">
      <a-avatar class="vue-admin-avatar" src="http://felis.top:8101/picture?md5=13e9d7857236becd43a82edc6ff834c8"/>
      <a-dropdown>
        <span class="login-username">vue-admin</span>
        <template #overlay>
          <a-menu>
            <a-menu-item>退出登陆</a-menu-item>
            <a-menu-item>修改密码</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </span>
  </a-layout-header>
</template>
<script>
export default {
  name:'Header'
}
</script>
<style lang="scss" scoped>
.vue-admin-header {
  background: #fff;
}
.vue-admin-dropdown {
  float: right;
  .login-username {
    font-size: 16px;
    color: #1890ff;
    margin-left: 4px;
  }
}

</style>