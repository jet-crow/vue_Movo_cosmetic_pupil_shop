import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'
const app = createApp(App);

/* 全局方法 */
//获取本地图片
app.config.globalProperties.$getImgUrl = (src) => {
    return require("@/assets/images/" + src)
}
app.use(router);
app.mount('#app');
