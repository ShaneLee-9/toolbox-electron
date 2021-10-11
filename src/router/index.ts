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
