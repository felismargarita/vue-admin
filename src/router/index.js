import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index'
import  * as session from '@/utils/session'
const routes = [
  {
    path:'/login',
    name:'login',
    component:() => import(/* webpackChunkName: "Login" */ '../views/Login')
  },
  {
    path: '/',
    name: 'index',
    component: Index,
    redirect:'page1',
    meta:{
      requireLogin:true
    },
    children:[
      {
        path:'page1',
        name:'page1',
        component:() => import(/* webpackChunkName: "Page1" */ '../views/Page1')
      },
      {
        path:'page2',
        name:'page2',
        component:() => import(/* webpackChunkName: "Page2" */ '../views/Page2')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from)=>{
  if(to.meta.requireLogin && !session.isLogin()){
    return {name:'login'}
  }
  return true
})

export default router
