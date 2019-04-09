import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Profile from './views/Profile.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Hello from './components/HelloWorld.vue'

Vue.use(Router)

export const authRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'list',
        name: 'List',
        component: List,
        children: [
          {
            path: 'hello',
            name: 'Hello',
            component: Hello
          }
        ]
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'about',
        name: 'About',
        component: About
      }
    ]
  }
]

export default new Router({
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
