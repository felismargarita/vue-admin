<template>
  <n-layout has-sider bordered>
    <Sider/>
    <n-layout>
      <Header/>
      <n-layout-content class="vue-admin-content">
        <router-view/>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
<script>
import Header from '@/components/layout/Header'
import Sider from '@/components/layout/Sider'
export default {
  name:'Layout',
  components:{Header,Sider}
}
</script>
<style scoped>
.vue-admin-content {
  padding: 4px;
}
</style>