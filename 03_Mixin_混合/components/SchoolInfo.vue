<template>
  <div>
    <h2 @click="showName()">学校名称：{{Name}}</h2>
    <h2>学校地址：{{SchoolAdress}}</h2>

  </div>
</template>

<script>
  //引入Mixin     在js中export暴露出来的  
  import {
    Mixin
  } from './mixin.js'
  export default {
    data() {
      return {
        Name: "北斗星",
        SchoolAdress: '广东'
      }
    },
    Mixin: [Mixin]


  }
</script>

<style>

</style>