<template>
  <n-config-provider :theme="theme">
    <n-layout has-sider bordered>
      <Sider/>
      <n-layout>
        <Header/>
        <n-layout-content class="vue-admin-content">
          <router-view/>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>
<script>
import Header from '@/components/layout/Header'
import Sider from '@/components/layout/Sider'
import {defineComponent, onMounted,provide} from 'vue'
import {useStore} from 'vuex'
import useTheme from '@/hooks/useTheme'
import {useLoadingBar,NLayout,NLayoutContent,NConfigProvider} from 'naive-ui'
export default defineComponent({
  name:'Layout',
  components:{NLayout,NLayoutContent,Header,Sider,NConfigProvider},
  setup(){
    window.$loadingBar = useLoadingBar()
    const store = useStore()
    onMounted(()=>{
      store.dispatch('getLoginInfo')
    })
    const {theme,toggleTheme} = useTheme()
    provide('theme',theme)
    provide('toggleTheme',toggleTheme)
    return {
      theme
    }
  }
})
</script>
<style scoped>
.vue-admin-content {
  padding: 8px;
}
</style>