<template>
  <div class=div>
    <h2 @click="showName()">学生姓名:{{Name}}</h2>
    <h2>学生性别:{{StudentSex}}</h2>


  </div>
</template>

<script>
  import {
    Mixin
  } from './mixin.js'
  export default {
    name: 'StudentInfo',
    data() {
      return {
        Name: '张三',
        StudentSex: '男'
      }
    },
    mixin: [Mixin]


  }
</script>

<style>

</style>