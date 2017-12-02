<template>
  <div class="index">
    <header class="header">

    </header>
    <div class="main">
      <div class="slider">
        <ul>
          <li>dddd</li>
          <li>dddd</li>
          <li>dddd</li>
          <li>dddd</li>
          <li>dddd</li>
          <li>dddd</li>
        </ul>
      </div>
      <div class="slider-right"></div>

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
        mainHeight: document.body.clientHeight || document.documentElement.clientHeight
      }
    },
    mounted () {
      document.querySelector(".main").style.height = this.mainHeight - 120 + "px"
    }
  }
</script>
<style>

  .index {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
  }

  .header, .footer {
    flex: 0 0 60px; /* 头、脚尺寸固定，不放大、不缩小 */
    line-height: 60px;
    background: #333;
    color: #fff;
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
    background: #0099ff;
    flex: 1;
  }

  /*左侧栏*/
  .slider {
    width: 200px;
    background: #2c343f;
    order: -1;
    color: #fff;
  }
</style>
