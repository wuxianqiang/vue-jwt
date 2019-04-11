import Vue from 'vue'
import App from './App.vue'
import router from './router/defaultRoutes'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import socket from './socket'
Vue.config.productionTip = false
import '@/common/css/reset.css'

Vue.use(ElementUI)
Vue.directive('phone', {
  update (el, bindings, vnode) {
    let ctx = vnode.context
    el.value = ctx[bindings.expression]
  },
  inserted (el) {
    el.focus()
  },
  bind (el, bindings, vnode) {
    let ctx = vnode.context;
    el.addEventListener('input', (e) => {
      let val = e.target.value.replace(/[^\d]/g, '')
      if (val.length > 11) {
        val = val.slice(0, 11)
      }
      ctx[bindings.expression] = val
      el.value = val
    })
    el.value = ctx[bindings.expression]
  },
})

new Vue({
  router,
  store,
  socket,
  render: h => h(App)
}).$mount('#app')
