import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/about',               
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/themeswitch',
    component:() => import ('../views/ThemeChange.vue')
  },
  {
    path:'/screenadaptation',
    component:()=> import('../views/ScreenAdaptation.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
