// 入口文件
import Vue from 'vue'
// 1.1导入路由包
import VueRouter from 'vue-router'
// 1.2 安装路由
 Vue.use(VueRouter)   
// 1.3导入自己的router.js路由模块
import router from './router.js'

//按需导入mint-ui 中的组件
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'

// import Qheader from './components/Qheader.vue'
import Qheader from "./components/Qheader.vue"


Vue.component(Header.name, Header);
Vue.component('uiheader',Qheader)

import app from './App.vue'

new Vue({
    el:'#app',
    render: c => c(app),
    router  // 挂载路由对象到 VM实例上
})


console.log('ddd')