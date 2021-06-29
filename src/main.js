import { createApp } from 'vue'
import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from "./router";
import axios from './axios'

// 第一种方式
// createApp(App).user(ant).mount('#app')

// 第二种方式
const app = createApp(App);
app.use(ant);
app.use(router); // use 路由组件
app.mount('#app');

app.config.globalProperties.$axios = axios
app.config.globalProperties.$router = router
