import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/report',
    name: 'Report',
    component: function () {
      return import('../views/Report.vue')
    }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: function () {
      return import('../views/Setting.vue')
    }
  },
  {
    path: '/product/add',
    name: 'Product Add',
    component: function () {
      return import('../views/product/ProductAdd.vue')
    }
  },
  {
    path: '/product/:productId/detail',
    name: 'Product Detail',
    component: function () {
      return import('../views/product/ProductDetail.vue')
    }
  },
  {
    path: '/product/:productId/update',
    name: 'Product Update',
    component: function () {
      return import('../views/product/ProductUpdate.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
})

export default router
