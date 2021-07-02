<template>
  <a-layout>
    <Sider/>
    <a-layout>
      <Header/>
      <a-layout-content class="vue-admin-content">
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
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