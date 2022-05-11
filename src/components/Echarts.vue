<template>
  <div>
    <div id="main" style="height: 200px; width: 400px;">
    </div>

  </div>
</template>

<script>
  import * as echarts from 'echarts';

  export default {

    name: 'App',


    methods: {
      initChart() {

        let myChart = echarts.init(document.getElementById('main'));

        myChart.setOption({
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},

          xAxis: {
            data: this.$store.getters.xAxisdata
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }

    },
    mounted() {
      this.initChart();
      console.log('PersonList', this.$store.getters.xAxisdata)
    }


  }
</script>