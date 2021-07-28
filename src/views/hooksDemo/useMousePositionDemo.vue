<template>
  <div>{{position}}</div>
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