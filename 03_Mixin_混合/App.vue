<template>
  <div>
    <Student />
    <SchoolInfo />
    
  </div>
</template>

<script>
  import Student from './components/Student'
  import SchoolInfo from './components/SchoolInfo.vue'
  export default {
    name: 'App',
    components: {
      Student,
      SchoolInfo
    }

  }
</script>

<style>

</style>