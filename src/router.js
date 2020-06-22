
import VueRouter from 'vue-router'
 
// 导入对应路由组件
import homeContainer from './modules/tabbar/homeContainer.vue'
import memberContainer from './modules/tabbar/memberContainer.vue'
import shopcarContainer from './modules/tabbar/shopcarContainer.vue'
import searchContainer from './modules/tabbar/searchContainer.vue'

var router = new VueRouter({
    routes:[ // 配置路由规则
        { path:'/home',name:"home",component:homeContainer},
        { path:'/member',name:"member",component:memberContainer},
        { path:'/shopcar',name:"shopcar",component:shopcarContainer},
        { path:'/search',name:"search",component:searchContainer}

     ]
}) 

export default router