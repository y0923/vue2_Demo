import Vue from 'vue'
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import installElementPlugin from './utils/element'

// const echarts = require('echarts')
// Vue.prototype.$echarts = echarts
//引入store
import store from './store/store'


//关闭生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)
Vue.use(installElementPlugin)


const vm = new Vue({
  store,
  render: h => h(App),
  router: router,
}).$mount('#app')

console.log('@@@', vm)