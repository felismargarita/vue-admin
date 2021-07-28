<template>
  <useBooleanDemo/>
  <hr/>
  <useTimeoutDemo/>
  <hr/>
  <useIntervalDemo/>
  <hr/>
  <useMousePositionDemo/>
</template>
<script>
import {defineComponent} from 'vue'
import useBooleanDemo from './useBooleanDemo'
import useTimeoutDemo from './useTimeoutDemo'
import useIntervalDemo from './useIntervalDemo'
import useMousePositionDemo from './useMousePositionDemo'
export default defineComponent({
  components:{useBooleanDemo,useTimeoutDemo,useIntervalDemo,useMousePositionDemo}
})
</script>