import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import socket from './socket'
Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach(async (to, from, next) => {
  if (!store.state.hasRules) {
    await store.dispatch('getMenuList')
    let list = await store.dispatch('getAuthRoute')
    router.addRoutes(list)
    next({...to, replace:true});
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  socket,
  render: h => h(App)
}).$mount('#app')
