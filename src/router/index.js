import { createRouter, createWebHistory } from 'vue-router'
import  * as session from '@/utils/session'
import {staticRoutes} from './routes'
import store from '../store/index'

const loadingStart = ()=>{
  window.$loadingBar && window.$loadingBar.start()
}

const loadingFinish = ()=>{
  window.$loadingBar && window.$loadingBar.finish()
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:staticRoutes
})

router.beforeEach(async (to,from)=>{
  loadingStart()
  if(to.meta.requireLogin && !session.isLogin()){
    loadingFinish()
    return {name:'login'}
  }
  if(to.name!=='login' && !store.state.user.user.username){
    await store.dispatch('getLoginInfo')
    loadingFinish()
    return to
  }
  loadingFinish()
  return true
})

export default router
