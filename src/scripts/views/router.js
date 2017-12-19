
import Vue from "vue"

import VueRouter from "vue-router"
Vue.use(VueRouter)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 单文件组件
 import Guide from "./guide.vue"
import Detail from "./detail.vue"
var routes = [
    {
        path:"/",
        component:Guide,
    },
    
    {
        path:"/detail/:id",
        name:"detail",
        component:Detail
    }
]

const router = new VueRouter({
    mode:"hash",
    routes
});


export default router;