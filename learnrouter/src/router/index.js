import vueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/home'
import About from '../components/about'
import User from '../components/user'

// 1.通过vue.use(插件)，安装插件
Vue.use(vueRouter)
// 创建对象
const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },{
        path:'/about',
        component:About
    },{
        path:'/user/:u_id',
        component:User
    }
]
const router =new vueRouter({
    // 配置路径和组件关系
    routes,  
    mode:'history',
    linkActiveClass:'active'
})
// 将router对象传入到vue实例中
export default router