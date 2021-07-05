import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {} from 'ant-design-vue'
const app = createApp(App)
app.config.productionTip = false
app.use(Antd)
app.use(store).use(router).mount('#app')
