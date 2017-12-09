<template>
  <div class="w">
    <template v-if="list.length">
      <div style="background: #fff">
      <table>
        <thead>
        <tr>
          <th>
            <input type="checkbox" @click="checkAll" v-model="checked">全选
          </th>
          <th>商品名称</th>
          <th>商品单价</th>
          <th>商品数量</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in list">
          <td>
            <input type="checkbox" v-model="selectList" :value="index" name="selectList" @click="singleCheck(item)">
          </td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>
            <a @click.prevent="changeMoney(index,-1)" :disabled="item.count === 1">-</a>
            <input type="text" v-model="item.count " style="width: 30px">
            <a @click.prevent="changeMoney(index,1)">+</a>
          </td>
          <td>
            <p>{{item.price*item.count}}</p>
          </td>
          <td>
            <button @click="del(index)">移除</button>
          </td>
        </tr>
        </tbody>
      </table>
      <div>总价：{{ totalPrice }}</div>
      <div>总购买数量： {{ totalNum }}</div>
      </div>
    </template>
    <div v-else>购物车为空！</div>
  </div>

</template>

<script>
  import Mock from 'mockjs'
  import axios from 'axios'
  export default {
    data () {
      return {
        list: [],
        selectList: [],
        checked: false
      }
    },
    computed: {
      totalPrice () {
        var total = 0;
        var _this = this;
        this.selectList.forEach(function (index) {
          var data = _this.list[index];
          total += data.price * data.count;
        });
        return total;
      },
      totalNum(){
        var totalCount = 0;
        var _this = this;
        this.selectList.forEach(function (index) {
          var data = _this.list[index];
          totalCount += data.count;
        });
        return totalCount;
      }
    },
    methods: {
      singleCheck(item){

      },
      changeMoney (index, i) {
        var item = this.list[index];
        if (i < 0) {
          item.count--;
          if (item.count < 1) {
            return false;
          }
        } else {
          item.count++;
        }
      },
      del (index) {
        this.list.splice(index, 1);
      },
      checkAll () {
        var selectList = document.getElementsByName('selectList');
        var len = selectList.length;
        if (this.checked) {//反选
          for (var i = 0; i < len; i++) {
            var item = selectList[i];
            item.checked = true;
            console.log(item);
          }
          this.checked = false;
          this.selectList = [];
        }
        else {//全选
          for (i = 0; i < len; i++) {
            item = selectList[i];
            if (item.checked === false) {
              item.checked = true;
              this.selectList.push(selectList[i].value);
              console.log(item);
            }
          }
          this.checked = true;
        }
      }
    },
    filters: {
      //价格过滤
      formatMoney(val){
        alert(val);
        return "￥" + val.toFixed(2);
      }
    },
    mounted(){
      // 通过mockjs生成假数据
      var dataList = [];
      for (var i = 0; i < 4; i++) {
        dataList.push(Mock.mock({
          img: Mock.mock('@color()'),
          name: '@name',
          subName: '@name',
          "count|1-20": 20,
          'price|1-100': 10000,
        }));
      }
      this.list = dataList;
    }
  }
</script>
<style>
  [v-cloak] {
    display: none;
  }

  table {
    background: #fff;
    border: 1px solid black;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
  }

  th, td {
    padding: 8px 16px;
    border: 1px solid black;
    text-align: center;
  }
  .w {
    width: 1200px;
    margin: 0 auto;
  }
  th {
    background-color: gray;
  }
</style>
