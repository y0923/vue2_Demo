<template>

  <div class="row">

    <div class="row-list">

    </div>
    <div>
      <el-table :data="tableData" size="small" id="Table">
        <el-table-column prop="bookname" label="书名">
        </el-table-column>
        <el-table-column prop="bookms" label="描述">
        </el-table-column>
        <el-table-column prop="bookzz" label="作者">
        </el-table-column>
        <!-- <el-table-column>
          <template slot="header" slot-scope="scope">
            <span>
             
            </span>
          </template>
        </el-table-column> -->
        <el-table-column align="left" label="操作">
          <template slot-scope="scope">
            <el-button size="mini">编辑</el-button>
            <el-button size="mini" type="danger" @click="delTable(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="felx">
        <div>
          <el-button size="mini" @click="openDialog">添加</el-button>
          <el-button size="mini" @click="exportXlsx">导出</el-button>
        </div>
        <div class="Pages">
          <el-pagination @current-change="handleCurrentChange" :current-page="pagenation.current"
            :page-size="pagenation.size" layout="prev, pager, next, jumper,total" :total="pagenation.total">
          </el-pagination>
        </div>
      </div>
    </div>

    <el-dialog title="添加书籍" :visible.sync="dialogVisible" width="700px" @close="resetForm('dataform')">
      <el-form :model="dataform" ref="dataform" label-width="70px">
        <el-form-item label="作者" prop="zz">
          <el-input v-model="dataform.zz"></el-input>
        </el-form-item>
        <el-form-item label="书名" prop="sm">
          <el-input v-model="dataform.sm"></el-input>
        </el-form-item>
        <el-form-item label="书名描述" prop="ms">
          <el-input v-model="dataform.ms" type="textarea" :rows="2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button @click="resetForm('dataform')">重置</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>


  </div>


</template>

<script>
  import Poz from '../utils/httpClient.js'
  // const Poz = require('../utils/httpClient.js')
  // const axios = require('axios')

  //导入filesaver 把xlsx文件下载到地址
  import FileSaver from 'file-saver'
  //导入xlsx
  const XLSX = require('xlsx')
  export default {
    created() {
      console.log("页面刷新了");
      this.reload()

    },
    data() {
      return {
        tableData: [],
        dialogVisible: false,
        dataform: {
          zz: "",
          sm: "",
          ms: ""
        },
        // 当前页数
        // current: "1",
        // 每页条目数
        // size: "6",
        // 总数
        // total:""
        pagenation: {
          current: 1,
          size: 6,
          total: null
        }
      }
    },
    methods: {
      openDialog() {
        this.dialogVisible = true

      },
      exportXlsx() {
        console.log("导出", XLSX, FileSaver)
        // 使用 this.$nextTick 是在dom元素都渲染完成之后再执行
        this.$nextTick(function () {
          // 设置导出的内容是否只做解析，不进行格式转换 false：要解析， true:不解析
          const xlsxParam = {
            raw: true
          }
          const wb = XLSX.utils.table_to_book(document.querySelector('#Table'), xlsxParam)
          // 导出excel文件名
          let fileName = '书籍' + new Date().getTime() + '.xlsx'

          const wbout = XLSX.write(wb, {
            bookType: 'xlsx',
            bookSST: true,
            type: 'array'
          })
          try {
            // 下载保存文件
            FileSaver.saveAs(new Blob([wbout], {
              type: 'application/octet-stream'
            }), fileName)
          } catch (e) {
            if (typeof console !== 'undefined') {
              console.log(e, wbout)
            }
          }
          return wbout
        })
      },
      resetForm(formName) {
        console.log("重置");
        this.$refs[formName].resetFields()

      },
      //分页查询
      reload() {
        // Poz({
        //   methods: 'get',
        //   url: '/Books/All'
        // }).then(res => {
        //   this.tableData = JSON.parse(JSON.stringify(res.data.data))
        //   console.log("tableData>>>", this.tableData)
        // }).catch(err => {
        //   console.log("请求失败", err.data)
        // });
        Poz.post('/Books/IPage', {
          current: this.pagenation.current,
          size: this.pagenation.size
        }).then((res) => {
          console.log("请求成功>>>>", res.data)
          this.tableData = res.data.data.records,
            this.pagenation.current = res.data.data.current,
            this.pagenation.size = res.data.data.size,
            this.pagenation.total = res.data.data.total
        }).catch((err) => {
          console.log("请求失败>>", err.data)
        })

      },
      //页码变换刷新数据
      handleCurrentChange(val) {
        //当页码变成当前点击页码值
        this.pagenation.current = val;
        //加载数据
        this.reload()


      },
      submit() {
        console.log(this.dataform.zz, this.dataform.sm, this.dataform.ms);
        // Poz({
        //   methods: 'post',
        //   url: 'Books'
        // }).then(res => {
        //   console.log("提交成功")
        // }).catch(err => {
        //   console.log("提交失败")
        // });
        Poz.post('/Books', {
            bookname: this.dataform.sm,
            bookms: this.dataform.ms,
            bookzz: this.dataform.zz
          }).then(() => {
            this.reload()
          })
          .catch(function (error) {
            console.log(error);
          })

      },
      delTable(row) {
        // Poz.delete('/Books/' + id).then(() => {
        //   this.reload()
        // })
        console.log("id>>>", row.id)
        Poz.delete('/Books/' + row.id).then(() => {
          this.reload()
        })
      },
      //分页查询写到查询全部中
      // getPage() {
      //   Poz.post('/Books/IPage', {
      //     current: this.current,
      //     size: this.size
      //   }).then((res) => {
      //     console.log("请求成功 >>>>>", res.data)
      //   }).catch((err) => {
      //     console.log("请求失败", err.data)

      //   })
      // }

    }


  }
</script>

<style scoped>
  .flex {
    display: flex;
  }
</style>