const mutations = {
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
}

export default mutations
