import { createRouter, createWebHashHistory } from 'vue-router'
import LoginAndRegistered from "../views/after/LoginAndRegistered.vue"


//路由配置
// {
//   path: '/about',
//   name: 'about',
//   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
// }
const routes = [
  {
    path: '/',
    name: 'loginAndRegistered',
    component: LoginAndRegistered
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
