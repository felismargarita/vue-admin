<template>
  <n-icon @click="toggleTheme" size="18" class="theme-icon">
    <n-tooltip trigger="hover">
      <template #trigger>
        <Brightness2Outlined class="icon" v-if="theme"/>
        <Brightness5Filled class="icon" v-else />
      </template>
      {{themeText}}
    </n-tooltip>
  </n-icon>
</template>
<script>
import { computed, defineComponent,inject } from 'vue'
import {Brightness2Outlined,Brightness5Filled} from '@vicons/material'
import {NIcon,NTooltip} from 'naive-ui'
export default defineComponent({
  components:{NIcon,NTooltip,Brightness2Outlined,Brightness5Filled},
  setup() {
    const toggleTheme = inject('toggleTheme')
    const theme = inject('theme')
    return {
      theme,toggleTheme,
      themeText:computed(()=>theme.value ? '黑夜模式' : '日间模式'),
    }
  },
})
</script>
<style scoped>
.theme-icon {
  cursor: pointer;
  color: #CCAA33;
}
</style>