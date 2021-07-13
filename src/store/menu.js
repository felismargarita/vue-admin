import menus from '@/const/menus'
import {VIEW_CODE} from '@/const/const'
const hasPerm = (menu,permissionList = [])=>{
  const {key,anno} = menu
  if(anno){
    return true
  }else{
    return permissionList.includes(key+':'+VIEW_CODE)
  }
}

const menuFilter = (menus,permissionList)=>{
  const ms = []
  menus.forEach(menu=>{
    if(hasPerm(menu,permissionList)){
      const {children} = menu
      if(children && children.length){
        rs.push({
          ...menu,
          children:menuFilter(children,permissionList)
        })
      }else{
        ms.push(menu)
      }
    }
  })
  return ms
}

export default {
  state:{
    menus:[]
  },
  mutations:{
    updateMenu(state,info){
      const {permissionList} = info
      state.menus = menuFilter(menus,permissionList)
    }
  },
}