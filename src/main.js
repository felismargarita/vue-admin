import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import naive from 'naive-ui'

const app = createApp(App)
app.config.productionTip = false
app.use(naive)
app.use(store).use(router).mount('#app')
