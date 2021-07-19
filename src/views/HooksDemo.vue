<template>
  <div>useBoolean</div>
  <div>{{state}}</div>
  <button @click="setTrue">setTrue</button>
  <button @click="setFalse">setFalse</button>
  <button @click="toggle">toggle</button>
  <hr/>
</template>
<script>
import {defineComponent} from 'vue'
import useBoolean from '@/hooks/useBoolean'
export default defineComponent({
  setup() {
    const {state,setTrue,setFalse,toggle} = useBoolean(false)
    return {
      state,setTrue,setFalse,toggle
    }
  },
})
</script>