<template>
  <n-layout-header bordered>
    <div class="vue-admin-header">
      <n-dropdown :options="options">
        <span class="drop-down">
          <n-avatar src="http://felis.top:8101/picture?md5=13e9d7857236becd43a82edc6ff834c8"/>
          <span class="drop-down-text">vue-admin</span>
        </span>
      </n-dropdown>
    </div>
  </n-layout-header>
</template>
<script>
export default {
  name:'Header',
  data(){
    return {
      options:[
        {label:'修改密码'},
        {label:'退出登陆'},
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.vue-admin-header {
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 48px;
  justify-content: flex-end;
  .drop-down {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    .drop-down-text{
      margin-left: 8px;
    }
  }
}
</style>