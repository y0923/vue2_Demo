<template>
  <div class=div>
    <h2>学校名称:{{SchoolName}}</h2>
    <h2>学校地址:{{SchoolAdress}}</h2>

  </div>
</template>

<script>
  export default {
    name: 'SchoolName',
    data() {
      return {
        SchoolName: '北斗星',
        SchoolAdress: '湖南'
      }
    }

  }
</script>

<style>
  .div {
    background-color: blue
  }
</style>