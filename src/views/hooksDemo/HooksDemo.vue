<template>
  <useBooleanDemo/>
  <hr/>
  <useTimeoutDemo/>
  <hr/>
  <useIntervalDemo/>
  <hr/>
</template>
<script>
import {defineComponent} from 'vue'
import useBooleanDemo from './useBooleanDemo'
import useTimeoutDemo from './useTimeoutDemo'
import useIntervalDemo from './useIntervalDemo'
export default defineComponent({
  components:{useBooleanDemo,useTimeoutDemo,useIntervalDemo}
})
</script>