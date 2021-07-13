<template>
<n-message-provider>
    <router-view/>
</n-message-provider>
</template>
<script>
import {defineComponent} from 'vue'
export default defineComponent({
  name:'App'
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
