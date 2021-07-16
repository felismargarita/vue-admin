<script>
import { defineComponent } from 'vue'
import {NButton,useMessage} from 'naive-ui'
export default defineComponent({
  setup(props) {
    const message = useMessage();
    return ()=>(
      <div>
      <NButton size="small" onClick={()=>message.success('JSX启用成功')}>JSX测试</NButton>
      <div style={{fontSize:'20px',fontWeight:600}}>
        JSX可以解决渲染函数书写比较麻烦的问题,但是我个人觉得使用还是要克制,否则就是放弃了vue的模板优势,还不如去用react
      </div>
      </div>
    )
  },
})
</script>
