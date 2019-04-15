import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import * as getters from './getters'
import modules from '@/module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  getters,
  actions,
  mutations,
  state
})