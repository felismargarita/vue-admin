<template>
<n-config-provider :theme="theme">
  <n-message-provider>
    <n-loading-bar-provider>
      <router-view/>
    </n-loading-bar-provider>
  </n-message-provider>
</n-config-provider>
</template>
<script>
import {defineComponent, provide} from 'vue'
import useTheme from '@/hooks/useTheme'
import {NConfigProvider,NMessageProvider,NLoadingBarProvider} from 'naive-ui'
export default defineComponent({
  name:'App',
  components:{NConfigProvider,NMessageProvider,NLoadingBarProvider},
  setup(){
    const {theme,toggleTheme} = useTheme()
    provide('theme',theme)
    provide('toggleTheme',toggleTheme)
    return {
      theme
    }
  }
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
