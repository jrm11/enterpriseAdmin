<style lang="scss" scoped rel="stylesheet/scss">
  @import "../assets/style/app";

  .btn-login {
    width: 100%;
    margin-top: 10px;
  }

  .login-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    padding: 40px;
    border-radius: 10px;
    background: #fff;
    border: 1px solid #ddd;
  }

  .login-logo {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .forget-pwd {
    display: block;
    font-size: 12px;
    margin-top: 30px;
    text-align: right;
  }
</style>
<template>
  <div class="login-container">
    <div class="clearfix">
      <div class="fl tal">
        <h2>登录</h2>
        <h4>请输入您的账号或密码</h4>
      </div>
      <router-link to="/register" class="fr">
        <el-button size="small" type="primary">注册</el-button>
      </router-link>
    </div>
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="mt30">
      <el-form-item label="账号" prop="username">
        <el-input v-model="loginForm.username" placeholder="输入账号：admin"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="输入密码:123456"></el-input>
      </el-form-item>
      <router-link to="/" class="forget-pwd">忘记密码?</router-link>
      <el-button type="primary" @click="login" class="btn-login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data () {
      var username = function (rule, value, callback) {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        } else {
          callback()
        }
      }
      var password = function (rule, value, callback) {
        if (!value) {
          return callback(new Error('密码不能为空'));
        } else {
          callback()
        }
      };
      return {
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {validator: username, trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
          ],
          password: [
            {validator: password, trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      login () {
        this.$refs.loginForm.validate((valid)=> {
          if (valid) {
            let account = this.loginForm.username;
            let pwd = this.loginForm.password;
            console.log(typeof  account);
            console.log(typeof  pwd);
            if (account == 'admin' && pwd == '123456') {
              this.$router.push('/index')
            }else{
              this.$message({
                showClose: true,
                message: '账号或密码错误',
                type: 'error'
              });
            }
          }
        })
      },
    }
  }
</script>
