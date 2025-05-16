//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from '@/views/Home'
import Search from "@/views/search";
import GoodList from "@/views/goodList";
//配置路由
//通过export 对外暴露
export default new VueRouter({
    //配置路由
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/goodList/:category?',
            name: 'goodList',
            component: GoodList,
            props:true,
            meta: {}
        },
        {
            path: '/search/:keyWord?',
            name: 'search',
            component: Search,
            meta: {
                //路由元信息

            },
            props: true
        },
        //重定向
        {
            path: '/',
            redirect: '/home',

        }
    ]
})
