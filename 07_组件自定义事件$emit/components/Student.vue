<template>
  <div class=div>
    <h2>学生姓名:{{Name}}</h2>
    <h2>学生性别:{{StudentSex}}</h2>
    <button @click="SendName">发送学生姓名</button>


  </div>
</template>

<script>
  export default {

    props: ['getStudentName'],
    data() {
      return {
        Name: '张三',
        StudentSex: '男'
      }
    },
    methods: {
      SendName() {
        this.getStudentName(this.Name)
      }
    },



  }
</script>

<style>
  .div {
    width: 200px;
    height: 100px;
    background-color: blue;
  }
</style>