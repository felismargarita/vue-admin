<template>
  <n-layout-sider :width="208" :collapsed-width="0" show-trigger inverted class="vue-admin-side" >
    <n-menu inverted @update:value="go" :options="options">
    </n-menu>
  </n-layout-sider>
</template>
<script>
import {defineComponent,computed} from 'vue'
import {useStore} from 'vuex'
import router from '@/router/index'
import {NLayoutSider,NMenu} from 'naive-ui'
export default defineComponent({
  name:'Sider',
  components:{NLayoutSider,NMenu},
  setup(){
    const store = useStore()
    return {
      options:computed(()=>store.state.menu.menus),
      go(key,{path}){
        if(path){
          router.push(path)
        }
      }
    }

  }
})
</script>
<style  scoped>
.vue-admin-side {
  min-height: 100vh;
}
</style>