import { createRouter, createWebHistory, RouteMeta, RouteRecordRaw } from 'vue-router'
import RandomActivity from '../views/RandomActivity.vue'

interface NavRouteMeta extends RouteMeta {
  icon: string
  label: string
}

type NavRouteItem = RouteRecordRaw & {
  meta: NavRouteMeta
}

export const navRoutes: Array<NavRouteItem> = [
  {
    path: '/randomActivity',
    name: 'RandomActivity',
    component: RandomActivity,
    meta: {
      icon: 'fas fa-dice',
      label: '随机活动'
    }
  },
  {
    path: '/mockExpress',
    name: 'MockExpress',
    component: () => import('@/views/ExpressMock.vue'),
    meta: {
      icon: 'fas fa-shipping-fast',
      label: '模拟快递'
    }
  },
  {
    path: '/news',
    name: 'TodayNews',
    component: () => import('@/views/TodayNews.vue'),
    meta: {
      icon: 'fas fa-newspaper',
      label: '今日头条'
    }
  }
]

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/randomActivity'
  },
  ...navRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
