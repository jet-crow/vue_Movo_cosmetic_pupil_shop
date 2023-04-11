import { createRouter, createWebHashHistory } from 'vue-router'
import LoginAndRegistered from "../views/front/LoginAndRegistered.vue"

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
    component: () => import('../views/front/Index.vue')
  },
  {
    path: '/sectionGoods',
    name: 'sectionGoods',
    component: () => import('../views/front/SectionGoods.vue')
  },
  {
    path: '/goodsdetails',
    name: 'goodsdetails',
    component: () => import('../views/front/GoodsDetails.vue')
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: () => import('../views/front/ShoppingCart.vue')
  },
  {
    path: '/confirmOrder',
    name: 'confirmOrder',
    component: () => import('../views/front/ConfirmOrder.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/front/Home.vue')
  },
  {
    path: '/addressList',
    name: 'addressList',
    component: () => import('../views/front/AddressList.vue')
  },
  {
    path: '/myOrder',
    name: 'myOrder',
    component: () => import('../views/front/MyOrder.vue')
  },
  {
    path: '/admin/login',
    name: 'login',
    component: () => import('../views/after/Login.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
