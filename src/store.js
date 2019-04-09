import Vue from 'vue'
import Vuex from 'vuex'
import modules from './module'
import { getMenu } from './api/user'
import { authRoutes } from './router'

Vue.use(Vuex)

let formatMenuList = (menuList) => {
  let arr = [];
  function r (pid) {
    return menuList.filter(menu => {
      if (menu.pid === pid) {
        arr.push(menu.auth);
        let children = r(menu.id)
        menu.children = children.length ? children: null;
        return true
      }
    })
  }
  return {menuList: r(-1), authList: arr}
}

let formatAuthList = (authList) => {
  function r(authRoutes) {
    return authRoutes.filter(route => {
      if (authList.includes(route.name)) {
        if (route.children) {
          route.children = r(route.children)
        }
        return true
      }
    })
  }
  return r(authRoutes)
}

export default new Vuex.Store({
  modules,
  state: {
    isShowLoading: false,
    hasRules: false,
    menuList: [],
    authList: []
  },
  mutations: {
    showLoading (state) {
      state.isShowLoading = true
    },
    hideLoading (state) {
      state.isShowLoading = false
    },
    setMenuList (state, list) {
      state.menuList = list
    },
    setAuthList (state, list) {
      state.authList = list
      state.hasRules = true
    }
  },
  actions: {
    async getMenuList({commit}) {
      let data = await getMenu()
      let { menuList, authList } = formatMenuList(data)
      commit('setMenuList', menuList)
      commit('setAuthList', authList)
    },
    async getAuthRoute({state}) {
      return formatAuthList(state.authList)
    }
  }
})


