<template>
  <div>
    <h1>Persion 组件</h1>
    <h3>count组件和为{{$store.state.sum}}</h3>
    <input type="text" placeholder="请输入姓名" v-model="xm">
    <input type="submit" value="提交" @click="Submit(xm)">
    <ul>
      <li v-for="i in PersonList" :key="i.id">{{i.xm}}</li>
    </ul>
  </div>
</template>

<script>
  // 引入nanoid自动生成唯一id
  import {
    nanoid
  } from 'nanoid'
  export default {
    name: "Persion",
    computed: {
      PersonList() {
        return this.$store.state.PersonList
      }
    },
    data() {
      return {
        xm: '',

      }
    },
    methods: {
      Submit(xm) {
        // const PersonObj =[{nanoid(),}]
        console.log('xm:', this.xm, this.id)
        // const PersonObj =this.xm,id
        if (!xm) {
          alert("输入为空")
          return false
        }


        const PersonObj = {
          id: nanoid(),
          xm: this.xm
        }
        console.log('obj', PersonObj)
        this.$store.commit('Add_Person', PersonObj)
        this.xm = ''
      }
    },
    // mounted: {

    // }

  }
</script>

<style>

</style>