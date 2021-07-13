import axios from '@/hooks/axios'
import {permissionRoutes} from '../router/routes'
import filterRoutes from '../router/filterRoutes'
import router from '../router/index'
export default ({
  state: {
    user:{},
    permissionList:[]
  },
  mutations: {
    updateUserInfo(state,info){
      const {user,permissionList} = info 
      state.user = user
      state.permissionList = permissionList
    }
  },
  actions: {
    async getLoginInfo({commit}){
      const {userMenuPermissionList:permissionList,user} =await axios({url:'/login/getInfo',method:'post'})
      filterRoutes(permissionRoutes,permissionList).forEach(r=>{
        router.addRoute('index',r)
      })
      commit({type:'updateUserInfo',permissionList,user})
      commit({type:'updateMenu',permissionList})
    }
  }
})
