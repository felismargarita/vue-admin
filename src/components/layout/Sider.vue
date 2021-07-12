<template>
  <n-layout-sider :width="208" :collapsed-width="0" show-trigger inverted class="vue-admin-side" >
    <n-menu inverted :options="options">
    </n-menu>
  </n-layout-sider>
</template>
<script>
import {reactive,defineComponent} from 'vue'
import Logo from '../Logo.vue'
import router from '@/router/index'
export default defineComponent({
  name:'Sider',
  components:{Logo},
  setup(){
    const options = reactive(
      [
        {label:'菜单1',key:'menu1'},
        {label:'菜单2',key:'menu2'},
        {label:'菜单3',key:'menu3'},
        ]
    )
    return {
      options,
      go(name){
        router.push({name})
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