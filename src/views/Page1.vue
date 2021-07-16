<template>
  <div>
    <div>{{user}}</div>
    <Test v-if="hasPerm(['checkConfig:update','checkConfig:update1'])"/>
  </div>
</template>
<script>
import Test from './Test'
import useUser from '@/hooks/useUser'

export default {
  components:{Test},
  created(){
  },
  setup() {
    const user = useUser()
    return {
      user
    }
  },
}
</script>
