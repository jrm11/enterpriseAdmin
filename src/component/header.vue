<template>
  <header class="header">
      <img src="../assets/images/logo.png" alt="" class="fl">
      <img src="../assets/images/menu.svg" alt="" class="fl menu">
      <div class="fr">
        <el-button @click="toBuyCar">购物车</el-button>
        <el-button><i class="el-icon-rank mr5"></i>部门排序</el-button>
        <el-button><i class="el-icon-download mr5"></i>导出</el-button>
        <el-button><i class="el-icon-upload2 mr5"></i>导入</el-button>
        <el-dropdown split-button type="primary" trigger="click" class="ml10">
          name
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="el-icon-edit"></i>修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="loginOut"><i class="el-icon-edit"></i>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      loginOut () {
        this.$router.push('/login')
      },
      toBuyCar(){
        this.$router.push('/buyCar')
      }
    }
  }
</script>

<style scoped>

  .header {
    padding: 0 15px;
  }

  .header {
    background-color: #333;
    color: #fff;
  }

  /*菜单图标*/
  .menu {
    margin-top: 14px;
    margin-left: 80px;
  }

  .header {
    line-height: 60px;
    flex: 0 0 60px;
  }


</style>
