import {useStore} from 'vuex'
export default ()=>{
  const store = useStore()
  const {username,nickname,id} = store.state.user.user
  return {username,nickname,id}
}