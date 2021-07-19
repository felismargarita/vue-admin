import {ref} from 'vue'
export default (boolean)=>{
  const state = ref(!!boolean)

  const setTrue = ()=>state.value = true
  const setFalse = ()=>state.value = false
  const toggle = ()=> state.value = !state.value 
  return {
    state,
    setTrue,
    setFalse,
    toggle
  }
}