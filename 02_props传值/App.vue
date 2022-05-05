<template>
  <div>
    <Student StudentName="张三" :StudentAge="17" StudentSex="男" />
  </div>
</template>

<script>
  import Student from './components/Student'
  export default {
    name: 'App',
    components: {
      Student
    }

  }
</script>

<style>

</style>