<template>
  <n-layout-header bordered>
    <div class="vue-admin-header">
      <Theme/>
      <n-dropdown :options="options" @select="handleSelect">
        <span class="drop-down">
          <n-avatar src="http://felis.top:8101/picture?md5=13e9d7857236becd43a82edc6ff834c8"/>
          <n-skeleton v-if="loading" :width="80" :sharp="false" size="medium" />
          <span v-else class="drop-down-text">{{user.nickname || user.username}}</span>
        </span>
      </n-dropdown>
    </div>
  </n-layout-header>
</template>
<script>
import {reactive,defineComponent,computed} from 'vue'
import router from '@/router/index'
import {useStore} from 'vuex'
import useAxios from '@/hooks/useAxios'
import Theme from '@/components/theme/Theme'
export default defineComponent({
  name:'Header',
  components:{Theme},
  setup(){
    const options = reactive(
      [
        {label:'修改密码',key:'password'},
        {label:'退出登陆',key:'logout'},
      ]
    )
    const store = useStore()
    const {fetch:logout} = useAxios({url:'/login/logout',method:'post'})
    return {
      options,
      loading:computed(()=>{
        const {nickname,username} = store.state.user.user
        return !nickname || !username
      }),
      user:computed(()=>store.state.user.user),
      handleSelect(key){
      if(key === 'logout'){
          logout()
          router.push('/login')
        }
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.vue-admin-header {
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 48px;
  justify-content: space-between;
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