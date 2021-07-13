import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import naive from 'naive-ui'
import directives from './directives/index'
import hasPerm from './utils/hasPerm'
export const app = createApp(App)
directives.forEach(({name,...rest})=>{
  app.directive(name,rest)
})
app.config.productionTip = false
app.config.globalProperties.hasPerm = hasPerm
app.use(naive).use(store).use(router).mount('#app')
