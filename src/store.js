import Vue from 'vue'
import Vuex from 'vuex'
import modules from './module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state: {
    isShowLoading: false
  },
  mutations: {
    showLoading (state) {
      state.isShowLoading = true
    },
    hideLoading (state) {
      state.isShowLoading = false
    }
  },
  actions: {

  }
})
