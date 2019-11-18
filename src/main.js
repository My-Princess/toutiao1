import Vue from 'vue'
import App from './App.vue'

import router from './router/router'
// vant按需引入
import { Toast } from 'vant'
Vue.use(Toast)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// render: h => h(App) 是下面内容的缩写过程：
// render: function (createElement) {
//   return createElement(App);
// }

// 进一步缩写为(ES6 语法)：
// render (createElement) {
//     return createElement(App);
// }

// 再进一步缩写为：
// render (h){
//     return h(App);
// }

// 按照 ES6 箭头函数的写法，就得到了：
// render: h => h(App);
