export default {
  namespaced: true,
  state: {
    username: []
  },
  actions: {
    addUser () {
      console.log('添加用户')
    },
    getUserInfo () {
      return sessionStorage.getItem('user_id')
    }
  }
}