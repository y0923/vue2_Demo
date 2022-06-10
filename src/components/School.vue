<template>

  <div class="row">

    <div class="row-list">

    </div>
    <div>
      <el-table :data="tableData" style="width: 1350px">
        <el-table-column prop="bookname" label="书名">
        </el-table-column>
        <el-table-column prop="bookms" label="描述">
        </el-table-column>
        <el-table-column prop="bookzz" label="作者">
        </el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <span>
              <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
            </span>

          </template>
          <template slot-scope="scope">
            <el-button size="mini">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <button @click="getBook">请求</button>
    </div>


  </div>


</template>

<script>
  import Poz from '../utils/httpClient.js'
  // const Poz = require('../utils/httpClient.js')
  // const axios = require('axios')
  export default {
    created() {
      console.log("页面刷新了")
      // const LJ = axios.get('/Books/All')
      //   .then(res => {
      //     console.log("请求成功了", res.data)
      //     this.tableData = res.data.data
      //   })
      //   .catch(err => {
      //     console.error("请求失败了", err.data);
      //   })
      // console.log("Get=>", h)
      Poz({
        methods: 'get',
        url: '/Books/All'
      }).then(res => {
        console.log("请求成功", res.data)
        this.tableData = res.data.data
      }).catch(err => {
        console.log("请求失败", err.data)
      })
    },
    //  created() {
    //  console.log("parent created 方法执行了");
    //  },
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      getBook() {

      }
      // getBook() {
      //   let A = this.Get.data;
      //   console.log("数据》》", A)
      // }
    }


  }
</script>

<!-- <style>
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
</style> -->