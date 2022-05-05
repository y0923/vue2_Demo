import Vue from 'vue'
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
// const echarts = require('echarts')
// Vue.prototype.$echarts = echarts


//关闭生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)

new Vue({

  render: h => h(App),
  router: router
}).$mount('#app')