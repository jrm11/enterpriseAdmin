<style>
  @import "../assets/style/app.css";

  .index {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
  }

  .header {
    padding: 0 15px;
  }

  .header, .footer {
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

  /*全屏图标*/
  .screen-full {
    margin-top: 14px;
  }

  .footer {
    line-height: 50px;
    flex: 0 0 50px;
  }

  /*主体*/
  .main {
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    flex: 1;
  }

  /*右侧栏*/
  .slider-right {
    flex-direction: column;
    background-color: #f0f0f0;
    flex: 1;
  }

  .main-header {
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    text-align: right;
    padding: 0 15px;
  }

  /*左侧栏*/
  .slider {
    width: 260px;
    background-color: #2c343f;
    order: -1;
  }

  /*覆盖树形菜单样式*/
  .el-dropdown-menu {
    margin-top: 0;
  }

  /*树形菜单背景色*/
  .el-tree {
    background-color: #2c343f;
    color: #fff;
  }

  /*树形菜单三角符号*/
  .el-tree-node__expand-icon {
    font-size: 18px;
    margin-left:10px;
  }

  /*树形菜单hover 背景色*/
  .el-tree-node:focus > .el-tree-node__content, .el-tree-node__content:hover {
    background-color: #2d243f;
  }

  /*树形菜单hover 高度*/
  .el-tree-node__content {
    height: 40px;
  }
</style>
<template>
  <div class="index">
    <header class="header">
      <router-link to="/index">
        <img src="../assets/images/logo.png" alt="" class="fl">
        <img src="../assets/images/menu.svg" alt="" class="fl menu">
        <div class="fr">
          <el-button>全屏</el-button>
          <el-button><i class="el-icon-rank mr5"></i>部门排序</el-button>
          <el-button><i class="el-icon-download mr5"></i>导出</el-button>
          <el-button><i class="el-icon-upload2 mr5"></i>导入</el-button>
          <el-dropdown split-button type="primary" trigger="click" class="ml10">
            name
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><i class="el-icon-edit"></i>修改密码</el-dropdown-item>
              <el-dropdown-item><i class="el-icon-edit"></i>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </router-link>
    </header>
    <div class="main">
      <div class="slider">
        <el-tree
          :data="data"
          :props="defaultProps"
          accordion
          @node-click="handleNodeClick">
        </el-tree>
      </div>
      <div class="slider-right">
        <header class="main-header">
          <el-button size="small" type="primary">公用账号管理</el-button>
          <el-button size="small" type="primary">添加子公司</el-button>
          <el-button size="small" type="primary">添加部门</el-button>
          <el-button size="small" type="primary">添加成员</el-button>
          <el-button size="small" type="danger">批量管理</el-button>
        </header>
      </div>

    </div>
    <footer class="footer">
      &copy粤2017-2018
    </footer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mainHeight: document.body.clientHeight || document.documentElement.clientHeight,
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    mounted () {
      document.querySelector(".main").style.height = this.mainHeight - 110 + "px"
    },
    methods: {
      handleNodeClick(data) {
        console.log(data)
      }
    }
  }
</script>
