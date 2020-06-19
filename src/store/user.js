/**
 *  用户模块
 *  
 *  维护用户登录的token, 角色列表
 */

import { login, getInfo } from '@/api/user';

const state = {
    token: localStorage.getItem('token'),
    roles: []
}


const mutations = {

    setToken(state, token) {
        state.token = token
    },

    setRoles(state, roles) {
        state.roles = roles
    }

}


const actions = {

    // 处理登录逻辑, 登录成功后设置token，本地缓存
    login({ commit }, userinfo) {
        return login(userinfo).then(res => {
            commit("setToken", res.data);
            localStorage.setItem("token", res.data);
        })
    },

    // 获取用户的信息, 用户登录后token有了，根据token去后台获取用户信息
    getInfo({ commit, state }) {
        return getInfo(state.token).then(({ data: roles }) => {
            commit("setRoles", roles);
            return { roles }
        })
    },

    // 重置token
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit("setToken", "");
            commit("setRoles", []);
            localStorage.removeItem('token');
            resolve();
        })
    }
}



export default {
    namespaced: true,
    state,
    mutations,
    actions
}