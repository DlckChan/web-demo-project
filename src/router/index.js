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
    path:'/theme-switch',
    component:() => import ('../views/ThemeChange.vue')
  },
  {
    path:'/screen-adaptation',
    component:()=> import('../views/ScreenAdaptation.vue')
  },
  {
    path:'/embed-object',
    component:()=> import('../views/EmbedObject.vue')
  },
  {
    path:'/el-adaptation',
    component:()=>import('../views/ElAdaptation.vue')
  },
  {
    path:'/vue-props',
    component:()=>import('../views/VueProps.vue')
  },
  {
    path:'/vw-adaptation',
    component:()=>import('../views/VwAdaptation.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
