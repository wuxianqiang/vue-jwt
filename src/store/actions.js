import { getMenu } from '@/api/user'
import { authRoutes } from '@/router/authRoutes'

let formatMenuList = (menuList) => {
  let arr = [];
  function r (pid) {
    return menuList.filter(menu => {
      if (menu.pid === pid) {
        arr.push(menu.auth);
        let children = r(menu.id)
        menu.children = children.length ? children: null;
        return menu.name
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

const actions = {
  async getMenuList({commit}) {
    let data = await getMenu()
    let { menuList, authList } = formatMenuList(data)
    commit('setMenuList', menuList)
    console.log(authList)
    commit('setAuthList', authList)
  },
  async getAuthRoute({state}) {
    return formatAuthList(state.authList)
  }
}

export default actions
