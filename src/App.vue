<template>
  <router-view/>
</template>
<script>
export default {
  name:'App',
  methods:{
    onClick(){
      this.$message.info('show hello message')
    }
  }
}
</script>
<style lang="scss">
</style>
