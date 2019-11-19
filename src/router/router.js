// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'
Vue.use(VueRouter)

// 创建路由对象
var router = new VueRouter({
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Register',
      path: '/register',
      component: Register
    }
  ]
})

// 暴露
export default router
