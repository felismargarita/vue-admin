import {isFunction,isNumber} from 'lodash'
export default (fn,delay,options = { immediate : false})=>{
  if(!isFunction(fn)){
    throw new Error('the first parametere must be a funtion')
  }
  if(!isNumber(delay)){
    throw new Error('the first parametere must be a number')
  }
  const start = ()=>{
    if(options?.immediate){
      fn()
    }
    return setInterval(()=>{
      fn()
    },delay)
  }
  const timer = start()
  const clear = ()=>clearInterval(timer)

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