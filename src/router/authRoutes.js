import Home from '@/views/Home.vue'
import List from '@/views/List.vue'
import Profile from '@/components/profile/profile.vue'
import About from '@/components/about/about.vue'
import Calendar from '@/components/calendar/calendar.vue'

export const authRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
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