<template>
  <div>
    <h1>运算</h1>
    <h2>当前结果为：{{sum}}</h2>
    <h2>当前求和10倍为:{{bigSum}}</h2>
    <h2>测试数组：{{$store.getters.xAxisdata}}</h2>
    <h3>我叫：{{name}},我在{{$store.state.School}}</h3>
    <h3>Person组件的名字总数{{PersonList.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
    <button @click="dispatch">测试</button>
    <button @click="getter">测试getter</button>
    <hr>
    <div>
      <Persion />
    </div>
  </div>

</template>

<script>
  import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'
  import Persion from './Persion.vue'
  export default {
    components: {
      Persion
    },
    name: "Count",
    data() {
      return {
        n: 1, //用户选择的数字

      }
    },
    computed: {
      //亲自写的逻辑 在模板上直接调用
      // name() {
      //   return this.$store.state.name
      // },
      // sum() {
      //   return this.$store.state.sum
      // },
      // School() {
      //   return this.$store.state.School
      // }
      //mapState的对象写法 方法名要与指定的state.name都要写
      // ...mapState({
      //   name: 'name',
      //   sum: 'sum',
      //   School: 'School'
      // })
      PersonList() {
        return this.$store.state.PersonList
      },
      //mapState的数组写法  方法名一定要与state.name要相同才能简写
      ...mapState(['name', 'sum', 'School']),

      //借助mapGetters生成计算属性，从getter读取数组  数组写法
      ...mapGetters(['bigSum'])
    },
    methods: {
      // increment() {
      //   this.$store.commit('JIA', this.n)
      // },
      // decrement() {
      //   this.$store.dispatch('jian', this.n)
      // },
      // incrementOdd() {
      //   this.$store.dispatch('Odd', this.n)
      // },
      // incrementWait() {
      //   this.$store.dispatch('jiawait', this.n)
      // },

      //借助mapMutations 生成commit方法
      ...mapMutations({
        increment: 'JIA'
      }),
      //借助mapActions 生成$.store.dispatch方法 注意这是{} 是对象写法
      ...mapActions({
        decrement: 'jian',
        incrementOdd: 'Odd',
        incrementWait: 'jiawait'
      }),
      dispatch() {
        console.log("dispatch>>>", this.$store.dispatch('dispatch_tableDate'))
      },
      getter() {
        console.log('getter>>', this.$store.getters)
      }
    },
    mounted() {
      console.log('store>>>>>', this.$store)
    }
  }
</script>