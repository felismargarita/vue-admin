import { createRouter, createWebHistory } from 'vue-router'
import  * as session from '@/utils/session'
import {staticRoutes} from './routes'
import store from '../store/index'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:staticRoutes
})

router.beforeEach(async (to,from)=>{
  if(to.meta.requireLogin && !session.isLogin()){
    return {name:'login'}
  }
  if(to.name!=='login' && !store.state.user.user.username){
    await store.dispatch('getLoginInfo')
    return to
  }
  return true
})

export default router
