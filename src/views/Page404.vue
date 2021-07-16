<template>
<div class="page-404">
  <n-result class="result" size="large" status="404" title="Oh...Oh...页面找不到">
    <template #footer>
      <n-button type="primary" @click="back">回到首页</n-button>
    </template>
  </n-result>
</div>
</template>
<script>
import {defineComponent} from 'vue'
import {NButton,NResult} from 'naive-ui'
import router from '@/router/index'
export default defineComponent({
  components:{NButton,NResult},
  setup() {
    return {
      back(){
        router.push('/')
      }
    }
  },
})
</script>
<style scoped lang="scss">
.page-404 {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: #2d3a4b;
  :deep() .n-result-header__title {
  color: #fff ;
}
}

</style>