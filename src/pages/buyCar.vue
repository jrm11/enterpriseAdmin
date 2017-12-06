<template>
  <div class="w">
    <div>
      <ul class="header">
        <li class=" check">
          <input type="checkbox" v-model="checkAll">全选
        </li>
        <li class=" pic">
          <p>dd</p>
        </li>
        <li class=" name">
          <p>商品名称</p>
        </li>
        <li class=" price">
          <p>单价</p>
        </li>
        <li class=" num">
          <p>数量</p>
        </li>
        <li class=" total">
          <p>小计</p>
        </li>
        <li class=" action">
          <p>操作</p>
        </li>
      </ul>
      <div v-for="(item ,index) in data" key="index">
        <div class="list-body clearfix">
          <div class="list-item">
            <div class="item-check col">
              <input type="checkbox" v-model="item.checked" @click="currClick(item,index)">
            </div>
          </div>
          <div class="list-item">
            <div class="item-pic col">
              <p :style="{background:item.img}" style="width: 50px; height: 50px"></p>
            </div>
          </div>
          <div class="list-item">
            <div class="item-name col">
              <h3>{{item.name}}</h3>
              <span>{{item.subName}}</span>
            </div>
          </div>
          <div class="list-item">
            <div class="item-price col">
              <p>{{item.price | formatMoney}}</p>
            </div>
          </div>
          <div class="list-item">
            <div class="item-num col">
              <div class="change-goods-num clearfix">
                <a type="button" class="minus  fl" @click.prevent="changeMoney(item,-1)">-</a>
                <input type="text" class="change-num fl" v-model="item.num">
                <a type="button" class="plus  fl" @click.prevent="changeMoney(item,1)">+</a>
              </div>
            </div>
          </div>
          <div class="list-item">
            <div class="item-total col">
              <p>{{item.price*item.num | formatMoney}}</p>
            </div>
          </div>
          <div class="list-item">
            <div class="item-action col">
              <button class="btn-del" @click="del(index)">删除</button>
            </div>
          </div>
        </div>
      </div>
      <div class="result">
        <p class="fl">共{{totalNum}}件商品</p>
        <p class="fr"><span>共</span>{{totalMoney |formatMoney}}<span>元</span></p>
      </div>
    </div>
  </div>

</template>

<script>
  import Mock from 'mockjs'
  import axios from 'axios'
  export default {
    data () {
      return {
        data: [],
        checked: [],
        totalPrice: 0,
      }
    },
    methods: {
      //删除
      del(index){
        this.data.splice(index, 1);
      },
      //数量改变
      changeMoney(item, index){
        if (index > 0) {
          item.num++
        } else {
          item.num--;
          if (item.num <=1) {
            item.num = 1;
          }
        }
      },
      //列表checkbox点击
      currClick(item, index){
        console.log(item)
        var _this = this;
        if (item.checked == false) {
          this.$set(item, 'checked', true);
          let total = item.price * item.num;
          _this.totalPrice.push(total);
        } else {
          item.checked = !item.checked;
          if (item.checked) {
            this.totalPrice = [];
            this.data.forEach(function (item, index) {
              if (item.checked) {
                let total = item.price * item.num;
                _this.totalPrice.push(total);
              }
            });
          } else {
            this.totalPrice = [];
            this.data.forEach(function (item, index) {
              if (item.checked) {
                let total = item.price * item.num;
                _this.totalPrice.push(total);
              }
            });
          }
        }
      }
    },

    filters: {
      //价格过滤
      formatMoney(val){
        return "￥" + val.toFixed(2);
      }
    },
    computed: {
      totalMoney(){
        var sum = 0;
        for (let i = 0; i < this.totalPrice.length; i++) {
          sum += this.totalPrice[i];
        }

        return sum;
      },
      totalNum(){
        var totalNum = 0;
        for (let i = 0; i < this.data.length; i++) {
          totalNum += parseInt(this.data[i].num);
        }
        return totalNum;
      },
      //全选
      checkAll: {
        get() {
          return this.checkedCount == this.data.length;
        },
        set(value){
          var _this = this;
          if (value) {
            this.totalPrice = [];
            this.checked = this.data.map(function (item) {
              item.checked = true;
              let total = item.price * item.num;
              _this.totalPrice.push(total);
              return item
            })
          } else {
            this.checked = [];
            this.totalPrice = [];
            this.data.forEach(function (item, index) {
              item.checked = false;
            });
          }
        }
      },
      checkedCount: {
        get() {
          return this.checked.length;
        }
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
          "num|1-20": 20,
          'price|1-100': 10000
        }));
      }
      this.data = dataList;
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../assets/style/app";

  $bgf: #fff;
  .w {
    width: 1200px;
    margin: 0 auto;
  }

  .result {
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    background: #fff;
    border-top: 1px solid #ddd
  }

  .col {
    height: 50px;
    vertical-align: middle;
    display: table-cell;
  }

  /*thead*/
  .header {
    line-height: 60px;
    height: 60px;
    background: $bgf;
    text-align: left;
    li {
      float: left;
    }
  }

  /*购物车内容*/
  .list-body {
    background: #fff;
    border-top: 1px solid #ddd;
    padding: 15px 30px 15px 0;
  }

  .list-item {
    float: left;
    background: $bgf;
    text-align: left;
    display: table-cell;
    vertical-align: middle;
  }

  .check, .item-check {
    width: 100px;
    padding-left: 20px;
  }

  .pic, .item-pic {
    width: 120px;
  }

  .name, .item-name {
    width: 380px;
  }

  .price, .item-price {
    width: 150px;
  }

  .change-goods-num {
    box-sizing: border-box;
    height: 38px;
    line-height: 38px;
    text-align: center;
    border: 1px solid #ddd;
  }

  .minus, .plus {
    width: 36px;
    height: 36px;
    background: #fff;
    border: none;
    transition: .2s;
  }

  .minus:hover, .plus:hover {
    background: #f0f0f0;
  }

  .change-num {
    border: none;
    text-align: center;
    width: 46px;
    height: 36px;
  }

  .num, .item-num {
    width: 120px;
    text-align: center;
  }

  .total, .item-total {
    width: 150px;
    text-align: center;
  }

  .action, .item-action {
    width: 120px;
    text-align: center;
  }

  .btn-del {
    padding: 5px 10px;
    border: none;
    background: #409EFF;
    color: #fff;
    font-size: 14px;
    transition: .3s;
  }

  .btn-del:hover {
    background: #4968ff;
  }
</style>
