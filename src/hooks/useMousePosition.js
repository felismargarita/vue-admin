import {throttle} from 'lodash'
import {onUnmounted, ref} from 'vue'
export default (timer = 100)=>{
  const position = ref(null)

  const callback = throttle(e=>{
    const {x,y} = e
    position.value = {x,y}
  },timer)

  onUnmounted(()=>{
    document.removeEventListener('mousemove',callback)
  })

  document.addEventListener('mousemove',callback)
  return position
}