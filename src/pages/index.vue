<style lang="scss" rel="stylesheet/scss">
  @import "../assets/style/app";
  @import "../assets/style/input";
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



</style>
<template>
  <div class="index">
    <header-top></header-top>
    <div class="main">
      <div class="slider">
        <el-tree
          :data="data4"
          :props="defaultProps"
          node-key="id"
          accordion>
        </el-tree>
      </div>

      <div class="slider-right">
       <main-header></main-header>
      </div>
    </div>

    <footer-bottom></footer-bottom>

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
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
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
        }
      }
    },
    components: {
      headerTop,
      footerBottom,
      mainHeader
    },
    mounted () {
      document.querySelector(".main").style.height = this.mainHeight - 110 + "px"
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
      append (data) {
        console.log(data.children)
        const newChild = {id: id++, label: 'testtest', children: []}
        if (!data.children) {
          this.$set(data, 'children', [])
        }
        data.children.push(newChild)
      },

      remove (node, data) {
        const parent = node.parent
        const children = parent.data.children || parent.data
        const index = children.findIndex(d => d.id === data.id)
        children.splice(index, 1)
      }
    }
  }
</script>
