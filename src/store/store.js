import vuex from 'vuex'
import Vue from 'vue'
import post from '../utils/httpClient'
//该文件用于创建store

//准备actions用于响应组件中的动作
const actions = {
  jia(context, value) {
    console.log('actions中jia被调用了 ', context, value)
    context.commit('JIA', value)
  },
  jian(context, value) {
    console.log('actions中jian被调用了')
    context.commit('JIAN', value)
  },
  Odd(context, value) {
    console.log('actions中Odd被调用了 ', context)
    if (state.sum % 2) {
      context.commit('Odd', value)
    }
  },
  jiawait(context, value) {
    console.log('actions中jiawait被调用了 ', context, value)
    setTimeout(() => {
      context.commit('jiawait', value)
    }, 1500);
  },

  //actions  异步请求接口
  dispatch_tableDate(context) {
    post.get('/Books/All').then(res => {
      console.log("请求成功", res)
      context.commit('set_tableData', res.data)
    }).catch(err => {
      console.log('请求失败', err.data)
    })
  }

}

//准备mutations用于操作数据
const mutations = {
  JIA(state, value) {
    console.log('mutations中JIA被调用了', value)
    state.sum += value
  },
  JIAN(state, value) {
    console.log('mutations中JIAN被调用了', value)
    state.sum -= value
  },
  Odd(state, value) {
    console.log('mutations中Odd被调用了', state, value)
    state.sum += value
  },
  jiawait: (state, value) => state.sum += value,
  Add_Person(state, value) {
    console.log("Person", value)
    state.PersonList.unshift(value)
  },

  set_tableData(state, arr) {
    state.tableData = Object.assign([], arr)
    console.log("set_tableData...", state)
  }
}

//准备state用于存储数据
const state = {
  sum: 0,
  name: "张三",
  School: "北斗星",
  PersonList: [{
    id: '001',
    xm: '李四'
  }],
  xAxisdata: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  //请求后台数据用来保存
  tableData: []
}

//getters用于加工数据源state中数据 
const getters = {
  // bigSum(state) {
  //   return state.sum * 10
  // }
  bigSum: (state, value) => state.sum * 10,
  xAxisdata: state => state.xAxisdata,
  get_tableData: state => state.tableData

}
//在这应用vuex 插件 如果在main文件会报错
Vue.use(vuex)

const store = new vuex.Store({
  actions,
  mutations,
  state,
  getters
})
//导出store
export default store