import Index from '../views/Index'
export const staticRoutes = [
  {
    path:'/login',
    name:'login',
    component:() => import(/* webpackChunkName: "Login" */ '../views/Login')
  },
  {
    path: '/',
    name: 'index',
    component: Index,
    meta:{
      requireLogin:true
    }
  },
  {path: '/404', component: import(/* webpackChunkName: "Page404" */ '../views/Page404')},
]


export const permissionRoutes = [
  {
    path:'page1',
    name:'page1',
    component:() => import(/* webpackChunkName: "Page1" */ '../views/Page1'),
    meta:{
      menuCode:'log'
    }
  },
  {
    path:'page2',
    name:'page2',
    component:() => import(/* webpackChunkName: "Page2" */ '../views/Page2'),
    meta:{
      menuCode:'log'
    }
  },
  {
    path:'/:pathMatch(.*)*',
    redirect: '/404',
  }
]

