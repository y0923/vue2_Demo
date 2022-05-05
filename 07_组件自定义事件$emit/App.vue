<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <Student :getStudentName="getStudentName" />
    <SchoolInfo v-on:Xm="getSchoolName" />
    <!-- <SchoolInfo ref="SchoolInfo" /> -->

  </div>
</template>

<script>
  import Student from './components/Student'
  import SchoolInfo from './components/SchoolInfo'
  export default {
    name: 'App',
    components: {
      Student,
      SchoolInfo
    },
    data() {
      return {
        msg: "组件之间自定义事件"
      }
    },
    methods: {
      getStudentName(Name) {
        console.log("我收到:", Name);
      },
      getSchoolName(Name) {
        console.log("学校姓名：", Name);
      },
      // mounted() {
      //     this.$refs.SchoolInfo.$on('Xm', this.getSchoolName())
      //   },

    }
  }
</script>

<style>

</style>