<template>
  <div>
    <div>row1</div>
    <Test v-if="hasPerm(['checkConfig:update','checkConfig:update1'])"/>
  </div>
</template>
<script>
import Test from './Test'
export default {
  components:{Test},
  created(){
  },
  setup() {
    
  },
}
</script>
