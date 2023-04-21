import {createRouter, createWebHashHistory} from 'vue-router'
import LoginAndRegistered from "../views/front/LoginAndRegistered.vue"
import {showFailToast} from 'vant'

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
    },
    {
        path: '/admin',
        component: () => import('../views/after/AfterIndex.vue'),
        children: [
            {
                path: '',
                component: () => import('../views/after/GoodsManagement.vue')
            }, {
                path: 'goodsManagement',
                component: () => import('../views/after/GoodsManagement.vue')
            }, {
                path: 'orderManagement',
                component: () => import('../views/after/OrderManagement.vue')
            }, {
                path: 'userManagement',
                component: () => import('../views/after/UserManagement.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
//配置路由拦截，如果有token访问登录注册就返回上一级
router.beforeEach((to, from, next) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    let token = localStorage.getItem("token");
    //这些页面如果没有token直接跳转登录
    if ((to.path === '/shoppingCart' || to.path === '/addressList' || to.path === '/confirmOrder' || to.path === '/myOrder')
        && (token === null || token === '')) {
        showFailToast("您还未登录");
        next('/');
        return;
    }
    // 如果是登录页面，且token不为空就返回首页
    if (to.path === '/' && token) {
        next("/index");
        return;
    }
    //如果访问含admin的网址，必须有adminToken，否则直接返回到index
    let adminToken = localStorage.getItem("adminToken");
    if (to.path === '/admin/login') {
        next();
        return;
    } else if (to.path.includes("admin") && (adminToken === null || adminToken === '')) {
        next("/index");
        return;
    }
    next();
});
export default router
