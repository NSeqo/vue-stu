
import { commonRoutes, asyncRoutes } from '@/router'



const state = {
    routes: [], //完整路由表
    addRoutes: [] // 用户可访问的路由表
}

const mutations = {

    setRoutes(state, routes) {
        state.addRoutes = routes; // 添加的路由表
        state.routes = commonRoutes.concat(routes)
    }
}

const actions = {
    // 路由生成信息,根据用户的角色信息
    generateRoutes({ commit }, roles) {
        return new Promise(resolve => {
            const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
            commit('setRoutes', accessedRoutes)
            resolve(accessedRoutes)
        })

    }
}

/**
 *  根据用户角色列表，判断该用户是否有权限访问route
 *  roles:[]
 *  
 */
function hasPermisson(roles, route) {

    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role))
    } else {
        // 该路由没有配置meta.roles属性，则表明所有角色都可以访问
        return true
    }
}


// 根据角色信息，过滤路由
export function filterAsyncRoutes(routes = [], roles) {
    const res = [];

    routes.forEach(route => {
        const routeCopy = { ...route }
        if (hasPermisson(roles, routeCopy)) {
            if (routeCopy.children) {
                routeCopy.children = filterAsyncRoutes(routeCopy.children, roles)
            }
            res.push(routeCopy)
        }

    })

    return res

}


export default {

    namespaced: true,
    state,
    mutations,
    actions

}