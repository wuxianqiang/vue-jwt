import List from '@/views/list/list.vue'
import Home from '@/views/home/home.vue'
import About from '@/components/about/about.vue'
// import Calendar from '@/components/calendar/calendar.vue'
import Log from '@/components/log/log.vue'
import Layout from '@/components/layout/layout.vue'
import UserList from '@/views/userList/userList.vue'

export const authRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      { 
        path: 'home',
        name: 'Home',
        component: Home
      },
      { 
        path: 'profile/:id',
        name: 'Log',
        component: Log,
        meta: {
          bread: '日志',
          hidden: true
        }
      },
      {
        path: 'list',
        name: 'List',
        component: List,
        children: [
          {
            path: 'userList',
            name: 'UserList',
            component: UserList,
            meta: {
              bread: '表格'
            }
          }
        ],
        meta: {
          bread: '组件',
        }
      },
      {
        path: 'about',
        name: 'About',
        component: About,
        meta: {
          bread: '关于'
        }
      }
    ],
    meta: {
      bread: '首页',
      url: '/home'
    }
  }
]