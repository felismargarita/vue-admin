import {isFunction,isNumber} from 'lodash'
import {ref} from 'vue'
export default (fn,delay,options = { immediate : false})=>{
  if(!isFunction(fn)){
    throw new Error('the first parametere must be a funtion')
  }
  if(!isNumber(delay)){
    throw new Error('the first parametere must be a number')
  }
  const timer = ref(null)
  const start = ()=>{
    if(options?.immediate){
      fn()
    }
    timer.value = setInterval(()=>{
      fn()
    },delay)
  }
  const clear = ()=>{
    clearInterval(timer.value)
    timer.value = null
  }

  start()
  if(isNumber(options.autoClear)){
    setTimeout(()=>{
      clear()
    },options.autoClear)
  }

  return {
    clear,
    reset:()=>{
      clear()
      start()
    }
  }
}