<template>
  <n-layout-sider class="vue-admin-side" collapsible bordered>
    <n-menu theme="dark" :options="options">
    </n-menu>
  </n-layout-sider>
</template>
<script>
import Logo from '../Logo.vue'
export default {
  name:'Sider',
  components:{Logo},
  data(){
    return {
      options:[
        {label:'菜单1',key:'menu1'},
        {label:'菜单2',key:'menu2'},
        {label:'菜单3',key:'menu3'},
        ]
    }
  },
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