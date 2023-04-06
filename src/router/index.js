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
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/after/Index.vue')
  },
  {
    path: '/sectionGoods',
    name: 'sectionGoods',
    component: () => import('../views/after/SectionGoods.vue')
  },
  {
    path: '/goodsdetails',
    name: 'goodsdetails',
    component: () => import('../views/after/GoodsDetails.vue')
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: () => import('../views/after/ShoppingCart.vue')
  },
  {
    path: '/confirmOrder',
    name: 'confirmOrder',
    component: () => import('../views/after/ConfirmOrder.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/after/Home.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
