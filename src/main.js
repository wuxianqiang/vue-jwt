import Vue from 'vue'
import App from './App.vue'
import router from './router/defaultRoutes'
import store from './store'
import ElementUI from 'element-ui'
import VCharts from 'v-charts'
import 'element-ui/lib/theme-chalk/index.css'
import * as filters from './filters'
import * as directives from './directives'
Vue.config.productionTip = false
import '@/common/css/reset.css'
import backtop from './plugin/backtop'
import prompt from './plugin/prompt'
// 注册过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
// 注册指令
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]));

Vue.use(ElementUI)
Vue.use(VCharts)
Vue.use(prompt)
Vue.use(backtop, {
  el: '#content'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
