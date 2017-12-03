<template>
  <div>
    <header class="main-header">
      <span class="fl user-name">用户</span>
      <div v-if="addAction" style="display: inline-block">
        <el-button size="small" type="primary" @click="dialog = true">公用账号管理</el-button>
        <el-button size="small" type="primary" @click="addCompany= true">添加子公司</el-button>
        <el-button size="small" type="primary" @click="addPardent= true">添加部门</el-button>
        <el-button size="small" type="primary" @click="addStaff = true">添加成员</el-button>
      </div>
      <div v-else style="display: inline-block">
        <el-button size="small" type="primary" @click="staffSort= true">职员排序</el-button>
        <el-button size="small" type="danger" @click="dialog= true">批量删除</el-button>
        <el-button size="small" type="primary" @click="dialog = true">批量移动</el-button>
      </div>
      <el-button class="ml10" size="small" :type="btnType" @click="batchManager" v-html="batchText"></el-button>
    </header>

    <!--添加子公司-->
    <el-dialog title="添加子公司" :visible.sync="addCompany" width="30%">
      <el-form>
        <el-form-item label="子公司名称：">
          <el-input auto-complete="off" placeholder="请输入子公司名称"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：">
          <el-input auto-complete="off" placeholder="请输入子公司邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input auto-complete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：">
          <el-input auto-complete="off" placeholder="请输入确认密码"></el-input>
        </el-form-item>
        <el-form-item label="说明：">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-popover
          ref="popover1"
          placement="top-start"
          width="200"
          trigger="hover"
          content="子公司可以指定管理员，该管理员可以独立的管理该子公司人员及部门。">
        </el-popover>
        <el-button class="fl" v-popover:popover1 style="border:none">子公司与部门的区别</el-button>
        <el-button type="primary" @click="addCompany = false">确 定</el-button>
      </div>

    </el-dialog>

    <!--添加部门-->
    <el-dialog title="添加部门" :visible.sync="addPardent" width="30%">
      <el-form>
        <el-form-item label="部门名称：">
          <el-input auto-complete="off" placeholder="请输入部门名称"></el-input>
        </el-form-item>
        <el-form-item label="说明：">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-popover
          ref="popover1"
          placement="top-start"
          width="200"
          trigger="hover"
          content="子公司可以指定管理员，该管理员可以独立的管理该子公司人员及部门。">
        </el-popover>
        <el-button class="fl" v-popover:popover1 style="border:none">子公司与部门的区别</el-button>
        <el-button type="primary" @click="addPardent = false">确 定</el-button>
      </div>

    </el-dialog>

    <!--添加成员-->
    <el-dialog title="添加成员" :visible.sync="addStaff" width="40%">
      <el-form>
        <el-form-item label="姓名：">
          <el-input auto-complete="off" placeholder="请输入子公司名称"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：">
          <el-input auto-complete="off" placeholder="请输入子公司邮箱"></el-input>
        </el-form-item>
        <el-form-item label="职员：">
          <el-input auto-complete="off" placeholder="请输入职员姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号：">
          <el-input auto-complete="off" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <label class="tal pct100" style="display: block">单位：</label>
        <el-form-item>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-input placeholder="请输入区号"></el-input>
            </el-col>
            <el-col :span="12">
              <el-input placeholder="请输入号码"></el-input>
            </el-col>
            <el-col :span="6">
              <el-input placeholder="请输入分机号"></el-input>
            </el-col>
          </el-row>
        </el-form-item>

        <label class="tal pct100" style="display: block">内线：</label>
        <el-form-item>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-input placeholder="请输入区号"></el-input>
            </el-col>
            <el-col :span="18">
              <el-input placeholder="请输入号码"></el-input>
            </el-col>
          </el-row>
        </el-form-item>

        <label class="tal pct100" style="display: block">家庭：</label>
        <el-form-item>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-input placeholder="请输入区号"></el-input>
            </el-col>
            <el-col :span="18">
              <el-input placeholder="请输入号码"></el-input>
            </el-col>
          </el-row>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-popover
          ref="popover1"
          placement="top-start"
          width="200"
          trigger="hover"
          content="① 使用该员工的邮箱或手机号与密码（默认密码为 123456）登录。 ② 为该员工添加手机号码，即可在客户端使用手机+验证码的方式登录。">
        </el-popover>
        <el-button class="fl" v-popover:popover1 style="border:none">如何在客户端登录</el-button>
        <el-button type="primary" @click="addStaff = false">确 定</el-button>
      </div>
    </el-dialog>


    <!--职员排序-->
    <el-dialog title="添加成员" :visible.sync="staffSort" width="40%">
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}"
      >
        <el-table-column
          prop="date"
          label="日期"
          sortable>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          sortable>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          :formatter="formatter">
        </el-table-column>
      </el-table>

      <el-button type="primary" @click="staffSort = false">确 定</el-button>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        addStaff: false,
        addCompany: false,
        addPardent: false,
        staffSort: false,
        addAction: true,
        flag: false,
        batchText: '批量管理',
        btnType: "danger",
        tableData: [{
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      batchManager () {
        this.flag = !this.flag
        if (this.flag === true) {
          this.addAction = false
          this.batchText = '取消'
          this.btnType = "primary"
        }
        if (this.flag === false) {
          this.addAction = true
          this.batchText = '批量管理'
          this.btnType = "danger"
        }
      },
      formatter(row, column) {
        return row.address
      }
    }

  }
</script>

<style>
  .main-header {
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    text-align: right;
    padding: 0 15px;
  }

  .user-name {
    font-size: 16px;
    font-weight: bold;
  }
  .el-table__row{
    text-align: left;
  }
</style>
