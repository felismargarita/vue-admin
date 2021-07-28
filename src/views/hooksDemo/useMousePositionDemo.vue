<template>
  <div>鼠标当前位置：{{position}}</div>
</template>
<script>
  import {defineComponent} from 'vue'
  import useMousePosition from '@/hooks/useMousePosition'
  export default defineComponent({
    setup(){
      const position = useMousePosition()
      return {
        position
      }
    }
  })

</script>