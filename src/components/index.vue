<template>
  <div class="Index">
    <div class="page-header">
      <h1>Vue Router Demo</h1>
      <button @click="$router.back()">后退</button>
      <button @click="$router.forward()">前进</button>
    </div>

    <div class="row-list">
      <Router-link class="row-list-a" to="/Student" active-class="active">学生 </Router-link>
      <Router-link class="row-list-b" to="/School" active-class="active">学校 </Router-link>
      <Router-link class="row-list-b" to="/Demo" active-class="active">Demo </Router-link>
      <Router-link class="row-list-a" to="/Grid" active-class="active"> Grid</Router-link>
      <Router-link class="row-list-b" to="/Echarts" active-class="active">Echarts </Router-link>
      <Router-link class="row-list-c" to="/Message" active-class="active">Message </Router-link>
      <Router-link class="row-list-d" to="/Count" active-class="active">Count </Router-link>
      <Router-link class="row-list-e" to="/Test" active-class="active">Test </Router-link>
    </div>
    <div class="index-info">
      <router-view />
    </div>
  </div>

</template>

<script>

</script>

<style>
  .Index {
    width: auto;
    height: auto;
  }

  .page-header {
    text-align: center;
  }
</style>