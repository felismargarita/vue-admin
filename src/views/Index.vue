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
import {defineComponent, onMounted} from 'vue'
import {useStore} from 'vuex'
import {useLoadingBar,NLayout,NLayoutContent} from 'naive-ui'
export default defineComponent({
  name:'Layout',
  components:{NLayout,NLayoutContent,Header,Sider},
  setup(){
    window.$loadingBar = useLoadingBar()
    const store = useStore()
    onMounted(()=>{
      store.dispatch('getLoginInfo')
    })
  }
})
</script>
<style scoped>
.vue-admin-content {
  padding: 8px;
}
</style>