import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    redirect:'page1',
    children:[
      {
        path:'page1',
        name:'page1',
        component:() => import(/* webpackChunkName: "Page1" */ '../views/Page1.vue')
      },
      {
        path:'page2',
        name:'page2',
        component:() => import(/* webpackChunkName: "Page2" */ '../views/Page2.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
