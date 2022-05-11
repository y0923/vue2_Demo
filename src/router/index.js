//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 先引入组件
import School from "../components/School"
import Student from "../components/Student"
import Echarts from "../components/Echarts.vue"
import Grid from "../components/Grid.vue"
import Message from "../components/Message.vue"
import Detail from "../components/Detail.vue"
import Count from "../components/count.vue"
import Test from "../components/Test.vue"
import User from "../components/User.vue"
import Demo from "../components/Demo.vue"

//创建并暴露一个路由器
const router = new VueRouter({
  routes: [{
      path: '/School',
      component: School,
      //二级路由
      children: [{
        path: '/Echarts',
        component: Echarts
      }, {
        path: '/Grid',
        component: Grid
      }, {
        path: '/Test',
        component: Test
      }, {
        name: 'Message',
        path: '/Message',
        component: Message,
        children: [{
          name: 'xiangqing',
          path: '/Detail/:id/:title', //使用占位符声明接收params参数,可以指定可传或不传  在占位符后面加问号就行 id?  
          component: Detail,
          // props: true   props一种写法
          //props函数写法
          props($router) {
            return {
              id: $router.params.id,
              title: $router.params.title
            }
          }
        }]
      }, {
        name: 'yunsuan',
        path: '/Count',
        component: Count
      }]
    },
    {
      path: '/Student',
      component: Student,

    },
    {
      path: '/User',
      component: User
    },
    {
      path: '/Demo',
      component: Demo
    }
  ]

})

//路由前置守卫在路由被切换时候调用
// router.beforeEach(() => {

// })

export default router