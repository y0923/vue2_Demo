<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref='btn' @click="showDom()">点击</button>
    <SchoolText ref="sch" />
  </div>
</template>

<script>
  import SchoolText from './components/SchoolText'

  export default {
    name: 'App',
    components: {
      SchoolText

    },
    data() {
      return {
        msg: 'hello world!'
      }
    },
    methods: {
      showDom() {
        console.log(this.$refs.title) //获取dom元素
        console.log(this.$refs.btn) //获取dom元素
        console.log(this.$refs.sch) //school组件实例对象
      }
    }
  }
</script>

<style>

</style>