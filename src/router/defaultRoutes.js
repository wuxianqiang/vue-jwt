import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/components/login/login.vue'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (!store.state.hasRules) {
    await store.dispatch('getMenuList')
    let list = await store.dispatch('getAuthRoute')
    router.addRoutes(list)
    next({...to, replace: true});
  } else {
    if (to.name === 'Login') {
      next()
    } else {
      store.dispatch('user/getUserInfo').then((res) => {
        if (res) {
          next()
        } else {
          next({ path: '/login' })
        }
      })
    }
  }
})

export default router
