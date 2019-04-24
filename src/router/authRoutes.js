import List from '@/views/List.vue'
import Home from '@/views/home/home.vue'
import About from '@/components/about/about.vue'
import Calendar from '@/components/calendar/calendar.vue'
import Log from '@/components/log/log.vue'
import Layout from '@/components/layout/layout.vue'

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
            path: 'calendar',
            name: 'Calendar',
            component: Calendar,
            meta: {
              bread: '日历'
            }
          }
        ],
        meta: {
          bread: '列表',
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
      url: '/profile'
    }
  }
]