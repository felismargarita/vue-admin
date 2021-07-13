import {VIEW_CODE} from '@/const/const'
const hasPerm = (route,permissions=[])=>{
  const {meta} = route
  if(meta && meta.menuCode){
    return permissions.includes(meta.menuCode+':'+VIEW_CODE)
  }else{
    return true
  }
}

const filterRoutes = (routes = [],permissions = [])=>{
  const rs = []
  routes.forEach(route=>{
    if(hasPerm(route,permissions)){
      if(route.children && route.children.length){
        rs.push({
          ...route,
          children:filterRoutes(route.children,permissions)
        })
      }else{
        rs.push(route)
      }
    }
  })
  return rs
}

export default filterRoutes