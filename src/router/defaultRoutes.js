import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login.vue'
import Layout from '@/components/layout/layout.vue'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
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
          if (to.path === '/') {
            next({ path: '/home' })
          } else {
            next()
          }
        } else {
          next({ path: '/login' })
        }
      })
    }
  }
})

export default router
