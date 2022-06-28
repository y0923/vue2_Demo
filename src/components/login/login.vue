<template>
  <div class="login-container">
    <!--el-form是element ui组件中的form表单  model用于收集表单的数据  rules是验证表单规则 -->
    <el-form ref="loginForm" :model="FormInfo" class="login-form" label-position="left">
      <div class="title-container">
        <h3 class="title">登录</h3>
      </div>

      <el-form-item>
        <el-input placeholder="用户名" name="username" type="text" tabindex="1" v-model="FormInfo.username" />
      </el-form-item>

      <el-form-item>
        <el-input placeholder="密码" name="password" tabindex="2" v-model="FormInfo.password" />
      </el-form-item>

      <el-button @click="submit('FormInfo')" type="primary" style="width:100%;margin-bottom:30px;">登录</el-button>

      <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: 123</span>
      </div>

    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        FormInfo: {
          username: "",
          password: ""
        }
      }
    },
    methods: {
      submit() {
        console.log("提交")
      }

    }
  }
</script>

<style>
  .login-container {
    min-height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .login-form {
    width: 500px;
    max-width: 100%;
    position: relative;
    padding: 120px 50px 0;
    overflow: hidden;
    background-color: #2d3a4b;
    margin: 150px auto
  }

  .tips {
    margin-bottom: 10px;
    font-size: 14px;
    color: #fff
  }

  .title-container {
    position: relative
  }

  .title {
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    margin: 0 auto 0 auto;
    color: #eee
  }
</style>