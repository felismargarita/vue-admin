<template>
  <div id="nav">
    <a-button type="primary" @click="onClick">button</a-button>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
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
