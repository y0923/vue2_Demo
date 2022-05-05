<template>

  <div class="row">

    <div class="row-list">
      <Router-link class="row-list-a" to="/Grid" active-class="active"> Grid</Router-link>
      <Router-link class="row-list-b" to="/Echarts" active-class="active">Echarts </Router-link>
      <Router-link class="row-list-c" to="/Message" active-class="active">Message </Router-link>
      <Router-link class="row-list-d" to="/Count" active-class="active">Count </Router-link>
      <Router-link class="row-list-e" to="/Test" active-class="active">Test </Router-link>
    </div>
    <div class="plac">
      <router-view></router-view>
    </div>
  </div>


</template>

<script>

</script>

<style>
  .row-list {
    width: 100px;
    display: flex;
  }



  .row-list-c {
    font-size: 24px;
    border: 1px, solid, black;
    text-decoration: none;
    border-collapse: collapse;
    border: 1px solid #CCCCCC;
  }

  .row-list-d {
    font-size: 24px;
    border: 1px, solid, black;
    text-decoration: none;
    border-collapse: collapse;
    border: 1px solid #CCCCCC;
  }

  .row-list-e {
    font-size: 24px;
    border: 1px, solid, black;
    text-decoration: none;
    border-collapse: collapse;
    border: 1px solid #CCCCCC;
  }

  .active {
    background-color: red;
    color: orige
  }

  .row {
    display: flex;
    flex-direction: column
  }

  .plac {}
</style>