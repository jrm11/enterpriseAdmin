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
    width: 500px;
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

  .el-form-item {
    margin-bottom: 10px;
  }
</style>
<template>
  <div class="login-container">
    <div class="clearfix">
      <div class="fl tal">
        <h2>注册</h2>
        <h4>注册一个新账号</h4>
      </div>
      <router-link to="/login" class="fr">
        <el-button size="small" type="primary">登录</el-button>
      </router-link>
    </div>
    <el-form :model="registerForm" :rules="rules" ref="registerForm" class="mt30">
      <el-form-item label="企业名称:" prop="account">
        <el-input v-model="registerForm.account" placeholder="请输入企业名称"></el-input>
      </el-form-item>
      <el-form-item label="邮箱:" prop="email">
        <el-input v-model="registerForm.email" placeholder="请输入注册邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="pwd">
        <el-input type="password" v-model="registerForm.pwd" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码:" prop="confirmPwd">
        <el-input type="password" v-model="registerForm.confirmPwd" placeholder="请输入确认密码"></el-input>
      </el-form-item>
      <el-button type="primary" class="btn-login" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      var checkAccount = function (rule, value, callback) {
        if (value === '') {
          return callback(new Error('用户名不能为空'));
        } else {
          callback()
        }
      }
      var checkPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerForm.confirmPwd !== '') {
            this.$refs.registerForm.validateField('confirmPwd');
          }
          callback();
        }
      };
      var checkConfirmPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.pwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        registerForm: {
          account: '',
          email: '',
          pwd: '',
          confirmPwd: ''
        },
        rules: {
          account: [
            {validator: checkAccount, trigger: 'blur'},
            {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'}
          ],
          pwd: [
            {validator: checkPwd, trigger: 'blur'},
            {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
          ],
          confirmPwd: [
            {validator: checkConfirmPwd, trigger: 'blur'},
            {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      register(){
        this.$refs.registerForm.validate((valid)=> {
          if (valid) {
            let account = this.registerForm.account;
            let email = this.registerForm.email;
            let pwd = this.registerForm.pwd;
            console.log(account, email, pwd);
          }
        })
      }
    }
  }
</script>
