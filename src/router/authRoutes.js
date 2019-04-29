import List from '@/views/list/list.vue'
import Home from '@/views/home/home.vue'
import About from '@/views/about/about.vue'
import Log from '@/components/log/log.vue'
import Layout from '@/components/layout/layout.vue'
import UserList from '@/views/userList/userList.vue'
import ProductList from '@/views/productList/productList.vue'

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
              bread: '表格组件'
            }
          },
          {
            path: 'productList',
            name: 'ProductList',
            component: ProductList,
            meta: {
              bread: '轮播组件'
            }
          }
        ],
        meta: {
          bread: '组件列表',
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