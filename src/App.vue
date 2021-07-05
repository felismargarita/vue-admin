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
body {
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
