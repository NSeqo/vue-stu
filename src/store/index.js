
import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import permisson from './permisson'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        permisson
    },

    getters: {
        roles: state => state.user.roles
    }

})