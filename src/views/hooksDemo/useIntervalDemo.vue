<template>
  <div>useInterval</div>
  <div>{{count}}</div>
  <button @click="clear">clear</button>
  <button @click="reset">reset</button>
</template>
<script>
import { defineComponent,ref } from 'vue'
import useInterval from '@/hooks/useInterval'
export default defineComponent({
  setup() {
    const count = ref(0)
    const {reset,clear} = useInterval(()=>{
      count.value ++
    },2000,{immediate:true,autoClear:8000})
    return {
    reset,clear,count
    }
  },
})
</script>
