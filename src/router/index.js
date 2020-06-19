
// 配置vue-router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 公共页面，不需要路由守卫，不需要登录
export const commonRoutes = [
    {
        path: "/login",
        component: () => import("@/views/Login"),
        hidden: true // 导航菜单忽略该项
    },
    {
        path: "/",
        component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
        name: "home",
        meta: {
            title: "Home", // 导航菜单项标题
            icon: "qq" // 导航菜单项图标
        }
    }
]


// 权限页面, 用户必须登录且拥有必要的角色才可以访问
export const asyncRoutes = [
    {
        path: "/about",
        component: () => import(/* webpackChunkName: "home" */ "@/views/About.vue"),
        name: "about",
        meta: {
            title: "About",
            icon: "denglong",
            roles: ['admin', 'editor']
        },
    }
]


export default new VueRouter({
    mode: 'history',
    routes: commonRoutes
})