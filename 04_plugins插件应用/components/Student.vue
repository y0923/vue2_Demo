<template>
  <div class=div>
    <h2>学生姓名:{{Name}}</h2>
    <h2>学生性别:{{StudentSex}}</h2>


  </div>
</template>

<script>
  export default {
    name: 'StudentInfo',
    data() {
      return {
        Name: '张三',
        StudentSex: '男'
      }
    },



  }
</script>

<style>

</style>