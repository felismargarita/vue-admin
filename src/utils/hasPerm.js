import store from '../store/index'
import {isArray,isString,isFunction} from 'lodash'
export default (permissions,logic = 'and',callback)=>{
  const {permissionList} = store.state.user
  if(isString(permissions)){
    return permissionList.includes(permissions)
  }
  if(isArray(permissions)){
    if(!['and','or'].includes(logic)){
      throw new Error('Logic must be and/or ')
    }
    if(logic === 'and'){
      return permissions.every(perm=>permissionList.includes(perm))
    }
    if(logic === 'or'){
      return permissions.some(perm=>permissionList.includes(perm))
    }
  }
  if(isFunction(callback)){
    return callback(permissions,logic)
  }
  throw new Error('Permissions must be string or array')
}