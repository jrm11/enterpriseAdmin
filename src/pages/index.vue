<style lang="scss" rel="stylesheet/scss">
  @import "../assets/style/app";
  @import "../assets/style/input";

  $border-d: #ddd;
  $bgf: #fff;
  $w-1: 1px;
  .index {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
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

  /*左侧栏*/
  .slider {
    width: 260px;
    background-color: #2c343f;
    /*order: -1;*/
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
    margin-left: 10px;
  }

  /*树形菜单hover 背景色*/
  .el-tree-node:focus > .el-tree-node__content, .el-tree-node__content:hover {
    background-color: #5b6f8c;
    border-bottom: 1px solid #677d9e;
  }

  /*树形菜单hover 高度*/
  .el-tree-node__content {
    height: 40px;
  }

  /*修改分页样式 element-ui*/
  .page {
    padding: 15px 0;
    background: $bgf;
  }


  .el-pager li {
    /*padding: 5px 10px;*/
    margin: 0 5px;
    padding: 0 6px;
    border-radius: 5px;
    border: $w-1 solid $border-d;
    cursor: pointer;
  }


  /*上下页的样式*/
  .el-pagination .btn-next, .el-pagination .btn-prev {
    border: $w-1 solid $border-d;
    border-radius: 5px;
    padding: 0;
  }

  .el-pagination {
    padding: 0
  }

  /*页码点击后的样式*/
  .el-pager li.active {
    color: $bgf;
    background: #409EFF !important;
    border: 0;
    padding: 0;
  }

  .staff-info {
    height: 100%;
    background: #f5f5f5;
  }

  /*.el-table{*/
  /*padding:20px;*/
  /*}*/

</style>
<template>
  <div class="index">
    <header-top id="js-header"></header-top>
    <div class="main " id="js-main">
      <div class="slider">
        <el-tree
          :data="data4"
          :props="defaultProps"
          ref="tree"
          node-key="id"
          @node-click="nodeClick"
          accordion>
        </el-tree>
      </div>

      <div class="slider-right">
        <main-header id="js-main-header"></main-header>

        <!--表格数据-->
        <div class="p20 staff-info">
          <el-table
            :height="tableHeight"
            :data="tableData"
            style="width: 100%;"
            :default-sort="{prop: 'date', order: 'descending'}"
          >
            <el-table-column
              prop="job"
              label="职位"
              sortable>
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              sortable>
            </el-table-column>
            <el-table-column
              prop="email"
              label="邮箱"
              sortable>
            </el-table-column>
            <el-table-column
              prop="phone"
              label="手机"
              sortable>
            </el-table-column>

            <el-table-column
              prop="department"
              label="单位"
              sortable>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button-group>
                  <el-tooltip class="item" effect="dark" content="编辑" placement="top">
                    <el-button type="primary" class="btn-action" size="small">
                      <i class="el-icon-edit"></i>
                    </el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="删除" placement="top">
                    <el-button type="danger" class="btn-action" size="small">
                      <i class="el-icon-delete"></i>
                    </el-button>
                  </el-tooltip>
                </el-button-group>
              </template>
            </el-table-column>
          </el-table>

          <!--分页-->
          <div class="page clearfix">
            <el-col :span="22">
              <el-pagination
                layout="total, sizes, prev, pager, next, jumper"
                @current-change="handleCurrentChange"
                :page-size="pagesize"
                :total="total"
                :page-sizes="[10]"
                style="float:right;">
              </el-pagination>
            </el-col>
          </div>
        </div>

      </div>
    </div>

    <footer-bottom id="js-footer"></footer-bottom>

  </div>
</template>
<script>
  import headerTop from '@/component/header'
  import footerBottom from '@/component/footer'
  import mainHeader from '@/component/main-header'

  let id = 1000
  export default {
    data () {
      return {
        tableHeight: "",
        total: 0,
        page: 1,
        pagesize: 10,
        mainHeight: document.body.clientHeight || document.documentElement.clientHeight,
        data4: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        },
          {
            id: 2,
            label: '一级 2',
            children: [{
              id: 5,
              label: '二级 2-1'
            },
              {
                id: 6,
                label: '二级 2-2'
              }]
          },
          {
            id: 3,
            label: '一级 3',
            children: [{
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2'
            }]
          }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData: [
          {
            job: '总监',
            name: '王小虎2',
            email: 'tom@qq.com',
            phone: '13567989000',
            department: '国际社事业部'
          },
          {
            job: '经理',
            name: '黄小虎',
            email: 'huang@qq.com',
            phone: '1867890345',
            department: '研发部'
          },
          {
            job: '班长',
            name: '珠珠',
            email: 'zhu@qq.com',
            phone: '171234560977',
            department: 'HR'
          },
          {
            job: '班长',
            name: '珠珠',
            email: 'zhu@qq.com',
            phone: '171234560977',
            department: 'HR'
          },
          {
            job: '班长',
            name: '珠珠',
            email: 'zhu@qq.com',
            phone: '171234560977',
            department: 'HR'
          },
          {
            job: '班长',
            name: '珠珠',
            email: 'zhu@qq.com',
            phone: '171234560977',
            department: 'HR'
          },
          {
            job: '班长',
            name: '珠珠',
            email: 'zhu@qq.com',
            phone: '171234560977',
            department: 'HR'
          },
          {
            job: '班长',
            name: '珠珠',
            email: 'zhu@qq.com',
            phone: '171234560977',
            department: 'HR'
          },
          {
            job: '班长',
            name: '珠珠',
            email: 'zhu@qq.com',
            phone: '171234560977',
            department: 'HR'
          }]
      }
    },
    components: {
      headerTop,
      footerBottom,
      mainHeader
    },
    mounted () {
      let doc = document;
      //头部高度
      let headerH = doc.querySelector("#js-header").offsetHeight
      //主体内容头部的高度
      let mainHeaderH = doc.querySelector("#js-main-header").offsetHeight
      //页脚高度
      let footerH = doc.querySelector("#js-footer").offsetHeight
      //主体高度
      doc.querySelector("#js-main").style.height = this.mainHeight - headerH - footerH + "px"
      //表格内容高度
      //修改主体内容内边距及分页条时（目前padding=20px）相应的也需要修改值（目前为60）分页条高度+内边距=60
      this.tableHeight = this.mainHeight - headerH - footerH - mainHeaderH - 100
    },
    methods: {
      handleNodeClick (data) {
        console.log(data)
      },
      handleCheckChange () {
//        console.log("节点选中状态发生变化时的回调")
      },
      handleCurrentChange () {
//        console.log("当前选中节点变化时触发的事件")
      },
      handleNodeExpand () {
//        console.log("节点被展开时触发的事件")
      },
      handleNodeCollapse () {
//        console.log("节点被关闭时触发的事件")
      },
      nodeClick(data,node){
        console.log(data.id)
        console.log(this.$refs.tree.getCheckedKeys());
      }
    }
  }
</script>
