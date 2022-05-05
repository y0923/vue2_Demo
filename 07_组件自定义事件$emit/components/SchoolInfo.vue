<template>
  <div>
    <h2>学校名称：{{Name}}</h2>
    <h2>学校地址：{{SchoolAdress}}</h2>
    <button @click="sendSchoolName">发送学校姓名</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        Name: "北斗星",
        SchoolAdress: '广东'
      }
    },
    methods: {
      sendSchoolName() {
        this.$emit('Xm', this.Name)
      }
    }



  }
</script>

<style>

</style>