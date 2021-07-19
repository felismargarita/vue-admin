<template>
  <div>useTimeout</div>
  {{count}}
</template>
<script>
import {defineComponent,ref} from 'vue'
import useTimeout from '@/hooks/useTimeout'
export default defineComponent({
  setup(){
    const count = ref(0)
    useTimeout(()=>{
      count.value ++
    },4000)
    return {
      count
    }
  }
})
</script>