import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import New from "../views/news.vue"
import About from "../views/About.vue"
import Loading from "../views/loading.vue"
import Login from "../views/login.vue"
import User from "../views/user.vue"

import store from "../store/index"
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/user",
    name: "User",
    component: User,
    meta: {
      test: true,
    }
  },
  {
    path: '/about',
    name: 'About',

    component: About
  },
  {
    path: "/news",
    name: "News",
    component: New,
    meta: {
      test: true,
    }
  },
  {
    path: "/loading",
    name: "Loading",
    component: Loading
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

//路由前置守卫
router.beforeEach((to, from, next) => {
  /**
   * to  即将进入的目标路由对象信息
   * from 之前的目标路有对象信息
   * next 确认导航的方法，有参数，跳转至参数路有对象，无参数，跳转至to
   */
  console.log(to, from);
  //获取此时的仓库loading状态
  const status = store.getters["loginUser/status"];
  if (to.meta.test) {
    //判断目标路由是否需要鉴权
    if (status === 'loading') {
      //正在登录中
      next({
        path:"/loading",
        query:{
          returnurl:to.fullPath
        }
      });
    } else if (status === "login") {
      //已登录
      next()
    } else {
      //未登录
      alert("该页面需要登录后才能继续访问，请先进行登录")
      next({
        path:"/login",
        query:{
          returnurl:to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router