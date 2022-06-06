<template>
  <div class=div>
    <div class="Student-top" v-if="show">
      <h2>学生姓名:{{Name}}</h2>
      <h2>学生性别:{{StudentSex}}</h2>

      <div class="top">
        <section>
          <h4>查找用户</h4>
          <input type="text" placeholder="请输入用户名" v-bind="keyWord" />&nbsp; <button @click="isshow">show</button>
        </section>
      </div>
    </div>


    <div>
      <Flex />
    </div>



  </div>
</template>

<script>
  import Flex from "./Flex.vue"
  // import axios from 'axios';
  export default {
    components: {
      Flex
    },
    data() {

      return {
        Name: '张三',
        StudentSex: '男',
        keyWord: '',
        show: true,
      }
    },
    methods: {
      // getUser() {
      //   axios.get('https://api.github.com/search/user?q=$(this.keyWord)')
      //     .then(res => {
      //       console.log("请求成功了", res.data)
      //     })
      //     .catch(err => {
      //       console.error("请求失败了", err.data);
      //     })

      // }
      isshow() {
        console.log(this.show)
        this.show = false
      }
    }

  }
</script>

<style>

</style>