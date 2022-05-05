<template>
  <div class="row">
    <div class="page-header">
      <h1>Vue Router Demo</h1>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
    </div>

    <div class="row-list">
      <Router-link class="row-list-a" to="/Student" active-class="active">学生 </Router-link>
      <Router-link class="row-list-b" to="/School" active-class="active">学校 </Router-link>
    </div>
    <div class="plac">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  export default {
    methods: {
      back() {
        this.$router.back()
      },
      forward() {
        this.$router.forward()
      }
    }


  }
</script>

<style>
  .row {
    width: 100%;
    height: 100%;
  }


  .page-header {

    text-align: center;
  }

  .row-list {
    /* text-align: center; */
    width: 100px;
    font-size: 24px;
    /* margin-left: 300px; */
    display: flex;
    flex-direction: column
  }

  .row-list-a {
    border: 1px solid #CCCCCC;
    text-decoration: none;
    border-collapse: collapse;
  }

  .row-list-b {
    border: 1px solid #CCCCCC;
    text-decoration: none;
  }

  .plac {
    width: 100%;
    height: 100%;
  }
</style>