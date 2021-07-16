<template>
  <n-message-provider>
    <n-loading-bar-provider>
      <router-view/>
    </n-loading-bar-provider>
  </n-message-provider>
</template>
<script>
import {defineComponent} from 'vue'
import {NMessageProvider,NLoadingBarProvider} from 'naive-ui'
export default defineComponent({
  name:'App',
  components:{NMessageProvider,NLoadingBarProvider}
})
</script>
<style lang="scss">
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
