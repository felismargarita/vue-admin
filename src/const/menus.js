import uuid from '@/utils/uuid'
import {NIcon} from 'naive-ui'
import { h } from 'vue'
const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menuWrapper = (menus = [])=>{
  return menus.map(menu=>{
    const {children,icon,key} = menu
    const rst = {
      ...menu,
      key:key || uuid(),
      anno:!key, 
      icon:icon && renderIcon(icon)
    }
    if(children && children.length){
     return {
        ...rst,
        children:menuWrapper(children)
      }
    }else{
      return rst
    }
  })
}

const menus = [
  {label:'菜单1',key:'log',path:'/page1'},
  {label:'菜单2',path:'/page2'},
  {label:'Demo',children:[
    {label:'数据表格',path:'/demo/datatable'},
  ]},
]
export default menuWrapper(menus)