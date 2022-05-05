<template>
  <div class=div>
    <h2>学生姓名:{{Name}}</h2>
    <h2>学生性别:{{StudentSex}}</h2>
    <div class="info">
      <div class="top">
        <section>
          <h4>查找用户</h4>
          <input type="text" placeholder="请输入用户名" v-bind="keyWord" />&nbsp; <button @click="getUser">search</button>
        </section>

        <div>
          <User />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import User from "./User.vue"
  import axios from 'axios';
  export default {
    components: {
      User
    },
    data() {
      return {
        Name: '张三',
        StudentSex: '男',
        keyWord: ''
      }
    },
    methods: {
      getUser() {
        axios.get('https://api.github.com/search/user?q=$(this.keyWord)')
          .then(res => {
            console.log("请求成功了", res.data)
          })
          .catch(err => {
            console.error("请求失败了", err.data);
          })

      }
    }

  }
</script>

<style>

</style>