<template>
  <div class=div>
    <h1 v-text="msg"></h1>
    <h2>学生姓名:{{StudentName}}</h2>
    <h2>学生年龄:{{StudentAge}}</h2>
    <h2>学生性别:{{StudentSex}}</h2>
    <button @click="changesex()">修改性别</button>

  </div>
</template>

<script>
  export default {
    name: 'StudentInfo',
    data() {
      return {
        msg: "我是一名学生！",
        sex: this.StudentAge
      }
    },
    methods: {
      changesex() {
        this.sex++
      }
    },
    props: ['StudentName', 'StudentAge', 'StudentSex'] //props 从父组件简单传值 如果类型不同就全是字符串

    // props: {
    //   StudentName: {
    //     type: String, //声明类型是字符串
    //     required: true //name是必要的
    //   },
    //   StudentAge: {
    //     type: Number,
    //     default: 20 //默认值
    //   },
    //   StudentSex: {
    //     type: String
    //   }

    // }

  }
</script>

<style>

</style>